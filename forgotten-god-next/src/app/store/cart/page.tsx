
import StoreNavigation from "@/services/store/components/StoreNavigation/StoreNavigation"
import {CartPageHeading, CartPageHeadingWrapper, CartPageWrapper, CartWrapper} from "./styles"


import prisma from "@/lib/prisma/prisma"
import { auth } from "@/utils/userAuth/auth"
import CartTable from "@/app/store/cart/components/CartTable/CartTable"
import CartOrder from "@/app/store/cart/components/CartOrder/CartOrder"
import { cache } from "react"
import {EmptyCartMessage } from "./components/CartTable/styles"
import { redirect } from "next/navigation"
import ClearCart from "./components/ClearCart/ClearCart"
import { TCartItem } from "./types"

export const metadata= {
    title: "Корзина | Forgotten God"
}


const getUserCart = cache( async () => {
    const userId = (await auth())?.user.id
    if (!userId) redirect("/signIn")
    const cartIds = (await prisma.cart.findMany({
        where:{
            userId: userId 
        }
    })).map(cartItem => cartItem.productId)

    const cartItems = await prisma.product.findMany({
        where:{
            id: { in: cartIds }
        }
    })

    return cartItems
})

const CartPage = async () => {
    
    const cart: TCartItem[] = await getUserCart()
    

    return (
            <>
                <StoreNavigation/>
                <CartPageWrapper>
                    <CartPageHeadingWrapper>
                        <CartPageHeading>Ваша корзина</CartPageHeading>

                       {cart.length > 0 && <ClearCart/>}

                    </CartPageHeadingWrapper>
                    <CartWrapper>
                        
                        {
                            cart.length === 0 ?
                                <EmptyCartMessage>Корзина пуста</EmptyCartMessage>
                            :
                                <>
                                    <CartTable cart={cart} />
                                    <CartOrder cart={cart}/>
                                </>    
                        }
                    </CartWrapper>
                </CartPageWrapper>
                
                
            </>
    )
}





export default CartPage