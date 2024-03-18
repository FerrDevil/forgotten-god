"use client"
import { addToCart } from "./actions"
import { OrderButtonWrapper, OrderButton, CartButton, SuccessButtonSVG, CartButtonSVG, UnauthorizedCartLink } from "./styles"

const OrderButtons = ({product, userId}) => {

    const addToCartHandle = addToCart.bind(null, product.id, false)
    const orderProductHandle = addToCart.bind(null, product.id, true)



    const autorizedCartButtons = (
        <>
         {
                product.isInCart ?
                    <>
                        <OrderButton onClick={() => { orderProductHandle() }}>Оформить</OrderButton>
                        <CartButton >
                            <SuccessButtonSVG/>
                        </CartButton>
                    </>
                
                :
                    <>
                        <OrderButton onClick={() => { orderProductHandle() }}>Оформить</OrderButton>
                        <CartButton onClick={() => { addToCartHandle() }}>
                            <CartButtonSVG/>
                        </CartButton>
                    </>
                    
            }</>
    )
    const unautorizedCartButton = (
        <>
            <UnauthorizedCartLink href="/signIn">Оформить</UnauthorizedCartLink>
            <UnauthorizedCartLink href="/signIn">
                <CartButtonSVG/>
            </UnauthorizedCartLink>
        </>
        
    )

    const addToCartButtons = (
        <>
            {
                userId ?
                autorizedCartButtons :
                unautorizedCartButton
            }
        </>
        
        
    )

    return(
        <OrderButtonWrapper>
            {addToCartButtons}
        </OrderButtonWrapper>
    )
}


export default OrderButtons