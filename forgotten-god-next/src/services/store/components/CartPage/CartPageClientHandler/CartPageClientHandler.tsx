"use client"

import { Dispatch, SetStateAction, useState } from "react"
import CartOrder from "../CartOrder/CartOrder"
import CartTable from "../CartTable/CartTable"
import { CartItemType } from "../types/types"


const CartPageClientHandler = ({cart} : {cart: CartItemType[]}) => {
    const [cartItems, setCartItems] = useState(cart)
    return (
        <>
            <CartTable cart={cartItems} setCart={setCartItems}/>
            <CartOrder cart={cartItems}/>
        </>
    )
}

export default CartPageClientHandler