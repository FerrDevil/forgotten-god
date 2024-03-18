"use client"

import { clearUserCart } from "./actions"
import { ClearCartButton } from "./styles"


export default function ClearCart() {

    const clearUserCartHandle = async () => {
        await clearUserCart()
    }
  return (
    <ClearCartButton onClick={clearUserCartHandle}>Очистить корзину</ClearCartButton>
  )
}
