"use client"
import React from "react"
import {SearchContent, SearchProduct, SearchProductImage, SearchProductInfo, SearchProductTitle, SearchProductPrice, SearchNoSuchProductsFound, AddToCartButton, AddToCartSVG} from "./searchProductsStyles"
import { SearchingProduct } from "./types"



const SearchProducts = ({products} : {products: SearchingProduct[]}) => {

    const addToCart = async (productIndex : number) => {
        const refreshResponse = await fetch("/auth/refresh", {method: "POST", credentials: "include"})
        const response = await fetch("/store/addToCart", {method: "POST", credentials: "include", body: JSON.stringify({productId: productIndex})})
     }

    return(
        <>
            <SearchContent>
                {products.map((product, productIndex) => 
                    <SearchProduct key={productIndex} href={`/store/product/${product?.id}`} onClick={(event) => {event.stopPropagation()}}>
                        <AddToCartButton onClick={(event) => {event.preventDefault(); addToCart(productIndex)}}>
                            <AddToCartSVG/>
                        </AddToCartButton>
                        <SearchProductImage src={product?.logo && `https://forgotten-god.onrender.com/image/${product?.logo}`}/>
                        <SearchProductInfo>
                            <SearchProductTitle>{product?.title}</SearchProductTitle>
                            <SearchProductPrice>{product?.price} ₽</SearchProductPrice>
                        </SearchProductInfo>
                    </SearchProduct>
                )}
                    
            </SearchContent>
                    
            {products.length === 0 && <SearchNoSuchProductsFound>По вашему запросу ничего не найдено</SearchNoSuchProductsFound>}
        </>
    )
}

export default SearchProducts