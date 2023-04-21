import { SliderWrapper, SliderContentWrapper, SliderContent, SliderLeftArrow, SliderRightArrow, SliderImageWrapper, SliderVideoMark, SliderImage } from "./slider"
import { useMemo } from "react"

const Slider = ({sliderState=[], elements=[]}) => {
    const [sliderParams, setSliderParams] = sliderState

    const getPagesLength = useMemo(() => Math.ceil(elements.length / 4), [elements] )

    const sliderImages = elements.map((element, elementIndex ) => {
        if (element.type === 'video'){
            //console.log(URL.createObjectURL(`localhost:3000/${element.src}`))
            return(
                <SliderImageWrapper onClick={() => {selectMedia(elementIndex)}} isSelected={sliderParams.selectedMediaIndex === elementIndex} key={elementIndex}>
                    <SliderImage src={`/images/thumbnail.jpg`} alt={element.src}/>
                    <SliderVideoMark src="/images/video-mark.svg" alt="video-mark"/>
                </SliderImageWrapper>
            )
        }
        else if (element.type === 'image'){
            return(
                <SliderImageWrapper onClick={() => {selectMedia(elementIndex)}} isSelected={sliderParams.selectedMediaIndex === elementIndex} key={elementIndex}>
                    <SliderImage src={element?.src && `/${element.src}`} alt={element.src}/>
                </SliderImageWrapper>
            )
        }
        else{
            return(<></>)
        }
    })

    const movePageLeft = () => {
        setSliderParams(prev => {
            return{...prev, pageIndex: prev.pageIndex > 0 ? prev.pageIndex - 1 : getPagesLength-1}
        })
    }

    const movePageRight = () => {
        setSliderParams(prev => {
            return {...prev, pageIndex: prev.pageIndex < getPagesLength-1 ? prev.pageIndex + 1 : 0}
        })
    }

    const selectMedia = (index) => {
        setSliderParams(prev => {
            return {...prev, selectedMediaIndex: index }
        })
    }

    return (
        <SliderWrapper>
            <SliderLeftArrow onClick={movePageLeft} alt="left-arrow" />
            <SliderContentWrapper>
                <SliderContent pageIndex={sliderParams.pageIndex}>
                    {sliderImages}
                </SliderContent>
            </SliderContentWrapper>
            
            <SliderRightArrow onClick={movePageRight} alt="left-arrow" />
        </SliderWrapper>
    )
}

export default Slider