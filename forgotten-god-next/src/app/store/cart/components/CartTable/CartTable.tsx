"use client"
import { CartWrapper } from "./styles"

import { TCartItem } from "../../types"
import CartItem from "./CartItem"



const CartTable = ({cart} : {cart: TCartItem[]}) => {

    

    const cartElements = !!cart && cart.map(
        cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem}/>
        )
    )


    return (
        <CartWrapper>
            {cartElements}
        </CartWrapper>)
}

export default CartTable