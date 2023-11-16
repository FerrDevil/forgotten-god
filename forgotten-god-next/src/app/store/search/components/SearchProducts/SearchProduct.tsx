"use client"
import { Suspense } from "react"
import { SearchingProduct } from "./types"
import { imageLoader } from "@/imageHelper"
import { AddToCartButton, AddToCartSVG, SearchProductImage, SearchProductImageWrapper, SearchProductInfo, SearchProductPrice, SearchProductTitle, SearchProductWrapper } from "./styles"

const SearchProduct = ({product} : {product: SearchingProduct}) => {

    const addToCart = async (productIndex : number) => {
        const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/store/addToCart`, {method: "POST", credentials: "include", body: JSON.stringify({productId: productIndex})})
    }

    return(
        
        <SearchProductWrapper  href={`/store/product/${product.id}`} onClick={(event) => {event.stopPropagation()}}>
            <AddToCartButton onClick={(event) => {event.preventDefault(); addToCart(product.id)}}>
                <AddToCartSVG/>
            </AddToCartButton>
            <SearchProductImageWrapper>
                <SearchProductImage loader={imageLoader} src={`${product.logo}`}/>
            </SearchProductImageWrapper>
            
            <SearchProductInfo>
                <SearchProductTitle>{product.title}</SearchProductTitle>
                <SearchProductPrice>{product.price} ₽</SearchProductPrice>
            </SearchProductInfo>
        </SearchProductWrapper>
       
        
    )
}

export default SearchProduct