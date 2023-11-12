"use client"
import React from "react"
import {SearchContent, SearchProduct, SearchProductImage, SearchProductInfo, SearchProductTitle, SearchProductPrice, SearchNoSuchProductsFound, AddToCartButton, AddToCartSVG, SearchProductImageWrapper} from "./styles"
import { SearchingProduct } from "./types"
import { imageLoader } from "@/imageHelper"



const SearchProducts = ({products} : {products: SearchingProduct[]}) => {

    const addToCart = async (productIndex : number) => {
        const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/auth/refresh`, {method: "POST", credentials: "include"})
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/store/addToCart`, {method: "POST", credentials: "include", body: JSON.stringify({productId: productIndex})})
    }

    return(
        <>
            <SearchContent>
                {products.map((product, productIndex) => 
                    <SearchProduct key={productIndex} href={`/store/product/${product?.id}`} onClick={(event) => {event.stopPropagation()}}>
                        <AddToCartButton onClick={(event) => {event.preventDefault(); addToCart(product?.id)}}>
                            <AddToCartSVG/>
                        </AddToCartButton>
                        <SearchProductImageWrapper>
                            <SearchProductImage loader={imageLoader} src={`${product.logo}`}/>
                        </SearchProductImageWrapper>
                        
                        <SearchProductInfo>
                            <SearchProductTitle>{product.title}</SearchProductTitle>
                            <SearchProductPrice>{product.price} ₽</SearchProductPrice>
                        </SearchProductInfo>
                    </SearchProduct>
                )}
                    
            </SearchContent>
                    
            {products.length === 0 && <SearchNoSuchProductsFound>По вашему запросу ничего не найдено</SearchNoSuchProductsFound>}
        </>
    )
}

export default SearchProducts