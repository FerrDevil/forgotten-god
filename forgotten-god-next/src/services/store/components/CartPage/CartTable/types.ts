import { Dispatch, SetStateAction } from "react"
import { CartItemType } from "../types/types"

export interface ICartTable{
    cart: CartItemType[]
    setCart: Dispatch<SetStateAction<CartItemType[]>>
}