"use client"
import { OrderButtonWrapper, OrderButton, CartButtonWrapper, CartButton } from "./styles"
import { useRouter } from "next/navigation"

const OrderButtons = ({product}) => {
    const router = useRouter()

    const addToCartHandle = async () => {
        const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/store/addToCart`, {method: "POST", credentials: "include", body: JSON.stringify({productId: product.id})})
    }

    const orderProduct = async () => {
        await addToCartHandle()
        router.push("/store/cart")
        router.refresh()
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