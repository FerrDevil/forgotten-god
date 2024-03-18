"use client"
import { useState } from "react"
import OfferPopup from "@/services/store/components/CartPage/OfferPopup/OfferPopup"
import {OrderBlock, OrderButton, OrderPriceWrapper, OrderPriceTitle, OrderPriceSum} from "./styles"
import { ICartOrder } from "./types"


const CartOrder = ({cart}: ICartOrder) => {

    const [isOfferPopupOpen, setOfferPopupOpen] = useState(false)
    return (
        <OrderBlock>
            {
                cart.length !== 0 && 
                    <>
                        <OrderPriceWrapper>
                            <OrderPriceTitle>Общая стоимость:</OrderPriceTitle>
                            <OrderPriceSum>{cart.reduce((prev: number, cartItem) => (prev + parseInt(cartItem.price)), 0)} ₽</OrderPriceSum>
                        </OrderPriceWrapper>
                        <OrderButton onClick={() => {setOfferPopupOpen(prev => !prev)}}>Оформить</OrderButton>
                        <OfferPopup isVisible={isOfferPopupOpen} setVisible={setOfferPopupOpen}/>
                    </>
            }
            
            
        </OrderBlock>
    )
}

export default CartOrder