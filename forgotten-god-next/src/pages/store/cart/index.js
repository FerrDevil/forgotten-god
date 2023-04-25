import { useEffect, useState } from "react"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import {CartPageWrapper, CartWrapper, CartItem, CartItemTitle, CartItemImage, CartItemPrice, CartItemDeleteButton, OrderBlock, OrderButton, OrderPriceWrapper, OrderPriceTitle, OrderPriceSum, EmptyCartMessage, ExtendCartButton, ExtendCartButtonText, ExpandCartMoreSVG, ExpandCartLessSVG} from "@/services/store/styles/cartPage.js"
import Link from "next/link"
import BasePageLayout from "@/components/Layout/BasePageLayout.jsx"
import OfferPopup from "@/services/store/components/OfferPopup/OfferPopup.jsx"

/* export async function getServerSideProps(){
} */

const CartPage = () => {
    const [cart, setCart] = useState([])
    const [isOfferPopupOpen, setOfferPopupOpen] = useState(false)

    useEffect(() => {
        const getUserCart = async () => {
            const refreshResponse = await fetch("https://forgotten-god.onrender.com/auth/refresh", {method: "POST", credentials: "include"})
            const request = await fetch("https://forgotten-god.onrender.com/store/getCart", {credentials: "include"})
            const cartItems = await request.json()
            setCart(cartItems)
            console.log(cartItems)
        }
        getUserCart()
    }, [])
    


    if (cart.msg || cart.error) {
        return (
            <BasePageLayout>
                <StoreNavigation/>
            
                <CartPageWrapper>
                    Login to see this page
                </CartPageWrapper>
            </BasePageLayout>

        )
    }
    
    
    return (
        
            <BasePageLayout>
                <StoreNavigation/>
                
                <CartPageWrapper>
                    <OfferPopup isVisible={isOfferPopupOpen} setVisible={setOfferPopupOpen}/>
                    <Cart cart={cart} setCart={setCart}/>
                    <OrderBlock>
                    {
                        cart.length !== 0 && 
                            <>
                            <OrderPriceWrapper>
                                <OrderPriceTitle>Общая стоимость:</OrderPriceTitle>
                                <OrderPriceSum>{cart.reduce((prev, cartItem) => prev + parseInt(cartItem.price), 0)} ₽</OrderPriceSum>
                            </OrderPriceWrapper>
                            <OrderButton onClick={() => {setOfferPopupOpen(prev => !prev)}}>Оформить</OrderButton>
                            </>
                    }
                        
                        
                    </OrderBlock>
                </CartPageWrapper>
                
            </BasePageLayout>
        
        

    )
}

const Cart = ({cart, setCart}) => {

    const [isEntireCartVisible, setEntireCartVisible] = useState(false)

    const deleteCartItem = (cartItemId) => {
        return async () => {
            const refreshResponse = await fetch("/auth/refresh", {method: "POST"})
            const response = await fetch(`/store/removeCartItem/${cartItemId}`, {method: "DELETE"})
            const message = await response.json()
            if (response.ok && !message.error && !message.msg){
                setCart(prev => prev.filter(cartItem => cartItem.productId !== cartItemId))
            }
        }

    }

    const cartElements = cart && !cart.message && !cart.error && cart?.map(
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



export default CartPage