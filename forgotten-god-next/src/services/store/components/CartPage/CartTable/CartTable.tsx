"use client"
import Link from "next/link"
/* import React from "react" */
import { useState } from "react"
import { CartWrapper, CartItem, CartItemTitle, CartItemImage, CartItemPrice, CartItemDeleteButton, EmptyCartMessage, ExtendCartButton, ExtendCartButtonText, ExpandCartMoreSVG, ExpandCartLessSVG} from "./styles"
import { ICartTable } from "./types"


const CartTable = ({cart, setCart} : ICartTable) => {

    const [isEntireCartVisible, setEntireCartVisible] = useState(false)

    const deleteCartItem = (cartItemId: number) => {
        return async () => {
            const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include"})
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/store/removeCartItem/${cartItemId}`, {method: "DELETE", credentials: "include"})
            const message = await response.json()
            if (response.ok && !message.error && !message.msg){
                setCart(prev => prev.filter(cartItem => cartItem.productId !== cartItemId))
            }
        }

    }

    const cartElements = !!cart && cart?.map(
        cartItem => (
            <CartItem key={cartItem.productId}>
                <Link href={`/store/product/${cartItem.productId}`}>
                    <CartItemImage src={cartItem?.logo && `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/image/${cartItem?.logo}`}/>
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