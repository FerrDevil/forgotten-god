"use client"
import Link from "next/link"
import React from "react"
import { useState } from "react"
import {CartWrapper, CartItem, CartItemTitle, CartItemImage, CartItemPrice, CartItemDeleteButton, EmptyCartMessage, ExtendCartButton, ExtendCartButtonText, ExpandCartMoreSVG, ExpandCartLessSVG} from "./styles"
import { CartItemType } from "@/services/store/components/CartPage/types/types"


const CartTable = ({cart} : {cart: CartItemType[]}) => {
    const [cartItems, setCartItems] = useState(cart)

    const [isEntireCartVisible, setEntireCartVisible] = useState(false)

    const deleteCartItem = (cartItemId: number) => {
        return async () => {
            const refreshResponse = await fetch("https://forgotten-god.onrender.com/auth/refresh", {method: "POST", credentials: "include"})
            const response = await fetch(`https://forgotten-god.onrender.com/store/removeCartItem/${cartItemId}`, {method: "DELETE", credentials: "include"})
            const message = await response.json()
            if (response.ok && !message.error && !message.msg){
                setCartItems(prev => prev.filter(cartItem => cartItem.productId !== cartItemId))
            }
        }

    }

    const cartElements = !!cartItems && cartItems?.map(
        cartItem => (
            <CartItem key={cartItem.productId}>
                <Link href={`/store/product/${cartItem.productId}`}>
                    <CartItemImage src={cartItem?.logo && `https://forgotten-god.onrender.com/image/${cartItem?.logo}`}/>
                </Link>
                <CartItemTitle>{cartItem.title}</CartItemTitle>
                <CartItemPrice>{cartItem.price} ₽</CartItemPrice>
                <CartItemDeleteButton onClick={deleteCartItem(cartItem.productId)}>Удалить</CartItemDeleteButton>
            </CartItem>
        )
    )

    const MAX_CART_LENGTH = 4

    return (
        cart.length === 0 ? 
        <EmptyCartMessage>Корзина пуста</EmptyCartMessage> :
        <CartWrapper>
            <CartItem>
                <div></div>
                <CartItemTitle>НАЗВАНИЕ</CartItemTitle>
                <CartItemPrice>ЦЕНА</CartItemPrice>
            </CartItem>
            {
                isEntireCartVisible ? 
                    cartElements :
                    cartElements.filter((_, index) => index < MAX_CART_LENGTH)
            }
            {
                cart.length > MAX_CART_LENGTH &&
                <ExtendCartButton onClick={() => {setEntireCartVisible(prev => !prev)}}>
                
                        {
                            isEntireCartVisible ?
                            <>
                                <ExtendCartButtonText>Закрыть</ExtendCartButtonText>
                                <ExpandCartLessSVG/>
                            </>  :
                            <>
                                <ExtendCartButtonText>Открыть больше</ExtendCartButtonText>
                                <ExpandCartMoreSVG/>
                            </> 
                        }
                
                    
                </ExtendCartButton>
            }
        </CartWrapper>)
}

export default CartTable