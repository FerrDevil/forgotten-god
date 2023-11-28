"use client"
import { MediaWrapper, MediaContainer, SliderWrapper, SliderLeftArrow, SliderContentWrapper, SliderContent, SliderRightArrow, SliderImageWrapper, SliderVideoMark, SliderArrowButton } from "./mediaStyles"
import { useMemo, useState } from "react"
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer"
import ImageLoader from "@/components/ui/ImageLoader/ImageLoader"

const MediaSlider = ({ mediaElements=[] }) => {

    const [sliderParams, setSliderParams] = useState({
        pageIndex: 0,
        selectedMediaIndex: 0
    })

    const elements = mediaElements


    const pagesLength = useMemo(() => Math.ceil(elements.length / 4), [elements] )


    const movePageLeft = () => {
        setSliderParams(prev => {
            return{...prev, pageIndex: prev.pageIndex > 0 ? prev.pageIndex - 1 : pagesLength-1}
        })
    }

    const movePageRight = () => {
        setSliderParams(prev => {
            return {...prev, pageIndex: prev.pageIndex < pagesLength-1 ? prev.pageIndex + 1 : 0}
        })
    }

    const selectMedia = (index: number) => {
        setSliderParams(prev => {
            return {...prev, selectedMediaIndex: index }
        })
    }

    return(
        <MediaWrapper>
            <MediaContainer>

                {mediaElements[sliderParams.selectedMediaIndex]?.type === 'video' ?
                    <VideoPlayer src={`${process.env.NEXT_PUBLIC_HOST_DOMAIN}/image/${mediaElements[sliderParams.selectedMediaIndex]?.src}`}/> :
                    <ImageLoader width={1600} height={900} sizes="100vw" alt="sliderImage" priority={true} src={`${mediaElements[sliderParams.selectedMediaIndex]?.src}`} />
                }
            </MediaContainer>
            <SliderWrapper>
            {
                pagesLength > 1 &&
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
                                            <ImageLoader width={1600} height={900} sizes="100vw" alt="sliderImage" priority={true} src={`${element.src}`} />
                                        }
                                        
                                    </SliderImageWrapper>
                                )
                            )
                        }
                    </SliderContent>
                </SliderContentWrapper>
                
                {
                    pagesLength > 1 &&
                    <SliderArrowButton onClick={movePageRight}>
                        <SliderRightArrow />
                    </SliderArrowButton>
                }
                
                
            </SliderWrapper>
        </MediaWrapper>
    )
}




export default MediaSlider