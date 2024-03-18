"use client"
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader"
import { CartItemWrapper, CartItemTitle, CartItemPrice, CartItemDeleteButton, CartItemInfo, CartItemImageLink} from "./styles"
import { TCartItem } from "../../types"
import { useToastMessage } from "@/components/ToastMessage/ToastMessageProvider"
import { deleteCartItem, revalidateStore } from "./actions"
import { useState } from "react"

export default function CartItem({ cartItem }: { cartItem: TCartItem }) {

    const setToastMessage = useToastMessage()
    const [isDeleted, setDeleted] = useState(false)


    const deleteItemHandle = (cartItem) => {

        const ANIMATION_TIMING = 2000
        return async () => {
            setDeleted(true)
            const response = await deleteCartItem(cartItem.id) 
           
            if (!response){
                setToastMessage( "Продукт успешно удален", false, ANIMATION_TIMING ) 
                setTimeout( () => { revalidateStore() }, ANIMATION_TIMING )
            }
            else{
                setToastMessage("Что-то пошло не так", false, ANIMATION_TIMING) 
            }
        }
    }


    return (
        <CartItemWrapper $isDeleted={isDeleted}>
            
            <CartItemImageLink href={`/store/product/${cartItem.id}`}>
                <ImageLoader src={ `${cartItem.logo}`} alt="productLogo" fill={true}  priority={true} sizes="100vw"/>
            </CartItemImageLink>
            <CartItemInfo>
                <CartItemTitle>{cartItem.title}</CartItemTitle>
                <CartItemPrice>{cartItem.price} ₽</CartItemPrice>
                <CartItemDeleteButton onClick={ deleteItemHandle(cartItem) }>Удалить</CartItemDeleteButton>
            </CartItemInfo>
            
        </CartItemWrapper>
  )
}
