"use client"
import { SearchingProduct } from "./types"
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader"
import { AddToCartButton, AddToCartSVG, SearchProductImageWrapper, SearchProductInfo, SearchProductPrice, SearchProductTitle, SearchProductWrapper } from "./styles"

const SearchProduct = ({product} : {product: SearchingProduct}) => {

    const addToCart = async (productIndex : number) => {
        
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