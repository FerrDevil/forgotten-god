"use client"
import { useEffect, useRef, useState } from "react"
import { Carousel, CarouselTitle, CarouselWrapper, CarouselContent, CarouselBlock, CarouselImage, CarouselArrowWrapper, CarouselLeftArrow, CarouselRightArrow, CarouselBottomButtons, CarouselBottomButton } from "./styles"
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader"


interface IRecommendedCarousel{
    products: {
        id: number,
        image: string
    }[]
}

const RecommendationCarousel = ({products} : IRecommendedCarousel) => {

    const endlessSliderProducts = [products[products.length-2], products[products.length-1], ...products, products[0], products[1]]

    const [currentImageIndex, setCurrentImageIndex] = useState(1)

    const carouselContentRef = useRef<HTMLDivElement | null>(null)
    const carouselToggleButtonsRef = useRef<HTMLDivElement | null>(null)

    const moveForward = () => {
        carouselContentRef?.current && (carouselContentRef.current.style.transitionDuration = "0.3s")
        if (currentImageIndex  < endlessSliderProducts.length-3 ){
            setCurrentImageIndex(prev => prev + 1)
        }
    }

    const moveBack = () => {
        carouselContentRef?.current && (carouselContentRef.current.style.transitionDuration = "0.3s")
        if (currentImageIndex > 0 ){
            setCurrentImageIndex(prev => prev - 1)
        }
    }

    useEffect(() => {

        const handleTransition = () => {
            if (currentImageIndex === 0 ){
                carouselContentRef?.current && (carouselContentRef.current.style.transitionDuration = "0s")
                setCurrentImageIndex(endlessSliderProducts.length-4)
            }
            else if (currentImageIndex + 3 === endlessSliderProducts.length ){
                carouselContentRef?.current && (carouselContentRef.current.style.transitionDuration = "0s")
                setCurrentImageIndex(1)
            }
        }
        carouselContentRef?.current  && carouselContentRef?.current?.addEventListener("transitionend", handleTransition)

        return () => {
            carouselContentRef?.current  && carouselContentRef?.current?.removeEventListener("transitionend", handleTransition)
        }
    }, [currentImageIndex])

    return (
        <Carousel>
            <CarouselTitle>Рекомендуемое</CarouselTitle>
            <CarouselWrapper>
                <CarouselArrowWrapper onClick={moveBack} $direction="left">
                    <CarouselLeftArrow/>
                </CarouselArrowWrapper>
                <CarouselContent ref={carouselContentRef} $index={currentImageIndex}>
                    {endlessSliderProducts.map((product, productIndex) => (
                        <CarouselBlock key={productIndex} href={`/store/product/${product.id}`}>
                            <ImageLoader src={`${product.image}`}  width={920} height={517} alt="carouselImage" sizes="100vw" priority={true}/>
                        </CarouselBlock>
                    ))}
                </CarouselContent>
                <CarouselArrowWrapper onClick={moveForward} $direction="right">
                    <CarouselRightArrow/>
                </CarouselArrowWrapper>
                <CarouselBottomButtons>
                    {
                        products.map((product, productIndex) => (
                            <CarouselBottomButton key={product.id} $isActive={currentImageIndex-1 === productIndex} onClick={() => {setCurrentImageIndex(productIndex+1)}}/>
                        ))
                    }
                    
                </CarouselBottomButtons>
            </CarouselWrapper>
            
        </Carousel>
        
    )
}

export default RecommendationCarousel