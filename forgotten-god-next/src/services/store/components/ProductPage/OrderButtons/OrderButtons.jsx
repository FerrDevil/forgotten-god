"use client"
import { OrderButtonWrapper, OrderButton, CartButtonWrapper, CartButton } from "./orderButtons"
import { useRouter } from "next/navigation"

const OrderButtons = () => {
    const router = useRouter()

    const addToCartHandle = async () => {
        const refreshResponse = await fetch("https://forgotten-god.onrender.com/auth/refresh", {method: "POST", credentials: "include"})
        const response = await fetch("https://forgotten-god.onrender.com/store/addToCart", {method: "POST", credentials: "include", body: JSON.stringify({productId: product.id})})
    }

    const orderProduct = async () => {
        await addToCartHandle()
        router.push("/store/cart")
    }

    return(
        <OrderButtonWrapper>
            <OrderButton onClick={orderProduct}>Оформить</OrderButton>
            <CartButtonWrapper tabIndex={0} onClick={addToCartHandle}>
                <CartButton/>
            </CartButtonWrapper>
        </OrderButtonWrapper>
    )
}


export default OrderButtons