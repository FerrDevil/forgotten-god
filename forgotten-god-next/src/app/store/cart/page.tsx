
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import {CartPageWrapper} from "@/services/store/styles/cartPage"
import { CartItemType } from "@/services/store/components/CartPage/types/types"
import CartPageClientHandler from "@/services/store/components/CartPage/CartPageClientHandler/CartPageClientHandler"

const getUserCart = async () => {
    try{
        const refreshResponse = await fetch("https://forgotten-god.onrender.com/auth/refresh", {method: "POST", credentials: "include"})
        if (!refreshResponse.ok) {
            throw new Error("Login to see this page")
        }
        const request = await fetch("https://forgotten-god.onrender.com/store/getCart", {credentials: "include"})
        const cartItems : CartItemType[] = await request.json()
        return cartItems
    }
    catch(error){
        throw error
    }
    
    
}

const CartPage = async () => {
    const cart : CartItemType[] = await getUserCart()
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