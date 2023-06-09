"use client"
import { MediaWrapper, MediaContainer, MediaImage, SliderWrapper, SliderLeftArrow, SliderContentWrapper, SliderContent, SliderRightArrow, SliderImageWrapper, SliderImage, SliderVideoMark, SliderArrowButton } from "./mediaStyles"
import { useMemo, useState } from "react"
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.jsx"

const MediaSlider = ({ mediaElements=[] }) => {

    const [sliderParams, setSliderParams] = useState({
        pageIndex: 0,
        selectedMediaIndex: 0
    })

    const elements = mediaElements


    const getPagesLength = useMemo(() => Math.ceil(elements.length / 4), [elements] )


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

    return(
        <MediaWrapper>
            <MediaContainer>

                {mediaElements[sliderParams.selectedMediaIndex]?.type === 'video' ?
                    <VideoPlayer src={`https://forgotten-god.onrender.com/image/${mediaElements[sliderParams.selectedMediaIndex]?.src}`}/> :
                    <MediaImage src={`https://forgotten-god.onrender.com/image/${mediaElements[sliderParams.selectedMediaIndex]?.src}`}/>
                }
            </MediaContainer>
            <SliderWrapper>
            {
                getPagesLength > 1 &&
                <SliderArrowButton onClick={movePageLeft}>
                    <SliderLeftArrow/>
                </SliderArrowButton>
            }
                
                <SliderContentWrapper>
                    <SliderContent $currentGroupIndex={sliderParams.pageIndex}>
                        {
                            elements.map((element, elementIndex ) => (
                                    <SliderImageWrapper
                                        onClick={() => {selectMedia(elementIndex)}}
                                        $isSelected={sliderParams.selectedMediaIndex === elementIndex}
                                        key={elementIndex}>
                                        
                                        {
                                            element.type === 'video' ?
                                            <SliderVideoMark src="/images/video-mark.svg" alt="video-mark"/> :
                                            <SliderImage src={`https://forgotten-god.onrender.com/image/${element.type === 'video' ? `/img1.jpg` : element.src}`}/>
                                        }
                                        
                                    </SliderImageWrapper>
                                )
                            )
                        }
                    </SliderContent>
                </SliderContentWrapper>
                
                {
                    getPagesLength > 1 &&
                    <SliderArrowButton onClick={movePageRight}>
                        <SliderRightArrow />
                    </SliderArrowButton>
                }
                
                
            </SliderWrapper>
        </MediaWrapper>
    )
}




export default MediaSlider