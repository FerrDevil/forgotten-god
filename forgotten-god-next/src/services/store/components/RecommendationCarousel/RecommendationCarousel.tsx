"use client"
import { useState } from "react"
import { Carousel, CarouselTitle, CarouselWrapper, CarouselContent, CarouselBlock, CarouselImage, CarouselArrowWrapper, CarouselLeftArrow, CarouselRightArrow, CarouselBottomButtons, CarouselBottomButton } from "./styles"
import { imageLoader } from "@/imageHelper"


interface IRecommendedCarousel{
    products: {
        id: number,
        image: string
    }[]
}

const RecommendationCarousel = ({products} : IRecommendedCarousel) => {

    const endlessSliderProducts = [products[products.length-1], ...products, products[0]]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const moveForward = () => {
        if (currentImageIndex + 4 > endlessSliderProducts.length) setCurrentImageIndex(prev => 0)
        else setCurrentImageIndex(prev => prev + 1)
    }

    const moveBack = () => {
        if (currentImageIndex - 1 < 0) setCurrentImageIndex(prev => endlessSliderProducts.length - 3)
        else setCurrentImageIndex(prev => prev - 1)
    }

    return (
        <Carousel>
            <CarouselTitle>Рекомендуемое</CarouselTitle>
            <CarouselWrapper>
                <CarouselArrowWrapper onClick={moveBack} $direction="left">
                    <CarouselLeftArrow/>
                </CarouselArrowWrapper>
                <CarouselContent $index={currentImageIndex}>
                    {endlessSliderProducts.map((product, productIndex) => (
                        <CarouselBlock key={productIndex} href={`/store/product/${product.id}`}>
                            
                            <CarouselImage loader={imageLoader} src={`${product.image}`}/>
                        </CarouselBlock>
                    ))}
                </CarouselContent>
                <CarouselArrowWrapper onClick={moveForward} $direction="right">
                    <CarouselRightArrow/>
                </CarouselArrowWrapper>
                <CarouselBottomButtons>
                    {
                        products.map((product, productIndex) => (
                            <CarouselBottomButton key={product.id} $isActive={currentImageIndex === productIndex} onClick={() => {setCurrentImageIndex(productIndex)}}/>
                        ))
                    }
                    
                </CarouselBottomButtons>
            </CarouselWrapper>
            
        </Carousel>
        
    )
}

export default RecommendationCarousel