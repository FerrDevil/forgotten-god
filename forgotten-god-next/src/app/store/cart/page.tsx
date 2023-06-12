"use client"
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation"
import {CartPageWrapper} from "@/services/store/styles/cartPage"
import { CartItemType } from "@/services/store/components/CartPage/types/types"
import CartPageClientHandler from "@/services/store/components/CartPage/CartPageClientHandler/CartPageClientHandler"

import { cookies } from "next/dist/client/components/headers"
import { useEffect, useState } from "react"


const getUserCart = async () => {
    try{
        const refreshCookie = cookies().get("refresh-fg-cookie");
        if(!refreshCookie?.value){
            return null
        }
        const refreshResponse = await fetch(`${process.env.HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include", headers: {
            Authorization: `Bearer ${refreshCookie.value}`
        }})
        if (!refreshResponse.ok) {
            throw new Error("Login to see this page")
        }
        const request = await fetch(`${process.env.HOST_DOMAIN}/store/getCart`, {credentials: "include", headers: {
            cookie: refreshResponse.headers.get("set-cookie")
        }})
        const cartItems : CartItemType[] = await request.json()
        return cartItems
    }
    catch(error){
        throw error
    }
    
    
}

const CartPage =  () => {
    
    const [cart, setCart] = useState([])
    useEffect(() => {
        const getCart = async () => {
            const refreshResponse = await fetch(`${"https://forgotten-god.onrender.com"}/auth/refresh`, {method: "POST", credentials: "include"})
            if (!refreshResponse.ok) {
                throw new Error("Login to see this page")
            }
            const request = await fetch(`${"https://forgotten-god.onrender.com"}/store/getCart`, {credentials: "include"})
            const cartItems : CartItemType[] = await request.json()
            console.log(cartItems)
            setCart(cartItems)
        }
        getCart()
    }, [])
    
    

    return (
            <>
                <StoreNavigation/>
                <CartPageWrapper>
                    <CartPageClientHandler cart={cart} setCart={setCart}/>
                </CartPageWrapper>
            </>
    )
}





export default CartPage