"use client"
import { Suspense } from "react"
import { SearchingProduct } from "./types"
import ImageLoader, { imageLoader } from "@/components/ui/ImageLoader/ImageLoader"
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
                <ImageLoader src={`${product.logo}`} width={1920} height={1280} sizes="100vw" alt="gameLogo" priority={true}/>
            </SearchProductImageWrapper>
            
            <SearchProductInfo>
                <SearchProductTitle>{product.title}</SearchProductTitle>
                <SearchProductPrice>{product.price} ₽</SearchProductPrice>
            </SearchProductInfo>
        </SearchProductWrapper>
       
        
    )
}

export default SearchProduct