
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation.jsx"
import {CartPageWrapper} from "@/services/store/styles/cartPage"
import CartTable from "@/services/store/components/CartPage/CartTable/CartTable"
import { CartItemType } from "@/services/store/components/CartPage/types/types"

const getUserCart = async () => {
    const refreshResponse = await fetch("https://forgotten-god.onrender.com/auth/refresh", {method: "POST", credentials: "include"})
    const request = await fetch("https://forgotten-god.onrender.com/store/getCart", {credentials: "include"})
    const cartItems = await request.json()
    return cartItems
}

const CartPage = async () => {
    const cart : CartItemType[] = await getUserCart()
    return (
        
            <>
                <StoreNavigation/>
                
                <CartPageWrapper>
                    
                    <CartTable cart={cart}/>
                    
                </CartPageWrapper>
                
            </>
        
        

    )
}





export default CartPage