
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import {CartPageWrapper} from "@/services/store/styles/cartPage"
import { CartItemType } from "@/services/store/components/CartPage/types/types"
import CartPageClientHandler from "@/services/store/components/CartPage/CartPageClientHandler/CartPageClientHandler"

import { cookies } from "next/dist/client/components/headers"


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

const CartPage = async () => {
    const cart : CartItemType[] | null = await getUserCart()
    return (
            <>
                <StoreNavigation/>
                <CartPageWrapper>
                    <CartPageClientHandler cart={cart}/>
                </CartPageWrapper>
            </>
    )
}





export default CartPage