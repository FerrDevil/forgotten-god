"use client"

import { Dispatch, SetStateAction, useState } from "react"
import CartOrder from "../CartOrder/CartOrder"
import CartTable from "../CartTable/CartTable"
import { CartItemType } from "../types/types"


const CartPageClientHandler = ({cart, setCart} : {cart: CartItemType[], setCart: Dispatch<SetStateAction<CartItemType[]>>}) => {
    /* const [cartItems, setCartItems] = useState(cart) */
    return (
        <>
            <CartTable cart={cart} setCart={setCart}/>
            <CartOrder cart={cart}/>
        </>
    )
}

export default CartPageClientHandler