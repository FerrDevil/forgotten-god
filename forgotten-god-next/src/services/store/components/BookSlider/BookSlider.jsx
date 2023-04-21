import { useState } from "react"
import { SliderWrapper, SliderTitle, SliderPage, SliderContainer, SliderContent, SliderImage, SliderItem, SliderItemImage, SliderItemInfo, SliderItemName, SliderItemPrice, SliderRightArrow, SliderLeftArrow } from "./bookSlider"


const BookSlider = ({title='', elements=[]}) => {
    const sliderItems = elements.map((element, elementIndex) => (
        <SliderItem $isBackItem={elementIndex % 2 !== 0} to={`/store/product/${element.id}`} key={elementIndex}>
                <SliderItemImage src={element.image} alt={element.name}/>
                <SliderItemInfo>
                    <SliderItemName>{element.name}</SliderItemName>
                    <SliderItemPrice>{element.price}</SliderItemPrice>
                </SliderItemInfo>
            </SliderItem>
    ))




    const [turnedPageIndex, setTurnedPageIndex] = useState(-1)


    const turnPageLeft = () => {
        if(turnedPageIndex - 1 <= -2) return
        setTurnedPageIndex(prev => prev-1)
    }

    const turnPageRight = () => {
        if(turnedPageIndex + 1 >= Math.floor(elements.length/2)) return
        setTurnedPageIndex(prev => prev+1)
    }

    let pages = []
    for (let pageIndex = 0; pageIndex < sliderItems.length; pageIndex+=2){
        pages = [...pages,
            <SliderPage key={pageIndex / 2} $shouldTurn={pageIndex / 2 <= turnedPageIndex} zIndex={pageIndex / 2}>
                {sliderItems[pageIndex]} {sliderItems[pageIndex+1]}
            </SliderPage>
        ]
    }

    return(
        <SliderWrapper>
           {title !== '' && <SliderTitle>{title}</SliderTitle>}
           <SliderContainer>
                <SliderLeftArrow onClick={turnPageLeft}/>
                <SliderContent>
                    <SliderImage/>
                    {pages}
                </SliderContent>
                <SliderRightArrow onClick={turnPageRight}/>
           </SliderContainer>
            
        </SliderWrapper>
    )
}

export default BookSlider