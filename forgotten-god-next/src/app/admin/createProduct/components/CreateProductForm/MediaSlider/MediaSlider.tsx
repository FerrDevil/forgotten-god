"use client"
import { MediaWrapper, MediaContainer, MediaImage, SliderWrapper, SliderLeftArrow, SliderContentWrapper, SliderContent, SliderRightArrow, SliderVideoMark, SliderArrowButton, ProductFormMediaWrapper, ProductFormMediaFileInputWrapper, ProductFormMediaFileInput, ProductFormMediaFileInputDescriptionWrapper, ProductFormMediaFileInputDescription, ProductFormMediaPlaceholderSVG, ProductFormMedia } from "./mediaStyles"
import { Dispatch, SetStateAction, memo, useMemo, useState } from "react"
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer"
import { IProductInfo } from "../CreateProductForm"
import MediaSliderCanvas from "./MediaSliderCanvas"
import { IImageSlider, ISliderParams } from "./types"

const MediaSlider = ({ mediaElements=[], setProductInfo } : {mediaElements: File[], setProductInfo : Dispatch<SetStateAction<IProductInfo>>}) => {

    const [sliderParams, setSliderParams] = useState<ISliderParams>({
        pageIndex: 0,
        selectedMediaIndex: 0
    })

    const elements: File[] = mediaElements

    return(
        <MediaWrapper>
            <MediaContainer>
            { 
                elements.length !== 0 && (
                    elements[sliderParams.selectedMediaIndex]?.type.startsWith('video')  ?
                        <VideoPlayer src={URL.createObjectURL(mediaElements[sliderParams.selectedMediaIndex])}/> :
                        <MediaImage src={URL.createObjectURL(mediaElements[sliderParams.selectedMediaIndex])}/>
                    )
            }
            </MediaContainer>
            <ImageSlider elements={elements} sliderParams={sliderParams} setSliderParams={setSliderParams} setProductInfo={setProductInfo}/>
        </MediaWrapper>
    )
}


const ImageSlider = ({elements=[], sliderParams, setSliderParams, setProductInfo}: IImageSlider) => {
    const getPagesLength = useMemo(() => Math.ceil((elements.length + 1 )/ 4), [elements] )

    const movePageLeft = () => {
        setSliderParams(prev => ({...prev, pageIndex: prev.pageIndex > 0 ? prev.pageIndex - 1 : getPagesLength-1}))
    }

    const movePageRight = () => {
        setSliderParams(prev => ( {...prev, pageIndex: prev.pageIndex !== getPagesLength-1 ? prev.pageIndex + 1 : 0}))
    }

    const selectMedia = (index: number) => {
        setSliderParams(prev =>  ({...prev, selectedMediaIndex: index }))
    }

    return (
        <SliderWrapper>
                <SliderArrowButton onClick={movePageLeft}>
                    <SliderLeftArrow/>
                </SliderArrowButton>
                
                <SliderContentWrapper>
                    <SliderContent $currentGroupIndex={sliderParams.pageIndex}>
                        {
                            elements.map((element, elementIndex ) => (
                                    <ProductFormMediaWrapper key={elementIndex} onClick={() => {selectMedia(elementIndex)}} $isSelected={sliderParams.selectedMediaIndex === elementIndex}>
                                            {
                                                element?.type.startsWith('video') ?
                                                <>
                                                    <MediaSliderCanvas videoLink={URL.createObjectURL(element)}/>
                                                    <SliderVideoMark src="/images/video-mark.svg" alt="video-mark"/>
                                                </> :
                                                <ProductFormMedia src={`${URL.createObjectURL(element)}`}/> 
                                            }
                                        <ProductFormMediaFileInputWrapper $notMediaSet={false}>
                                            <ProductFormMediaFileInput onChange={
                                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setProductInfo(prev => (
                                                        {...prev, media : prev.media.map((el, index) => index === elementIndex ? event.target.files[0] : el)}
                                                    ))
                                                }
                                            }
                                            />
                                            <ProductFormMediaFileInputDescriptionWrapper>
                                                <ProductFormMediaFileInputDescription>Выбрать медиа</ProductFormMediaFileInputDescription>
                                                <ProductFormMediaPlaceholderSVG/>
                                            </ProductFormMediaFileInputDescriptionWrapper>
                                        </ProductFormMediaFileInputWrapper>
                                        
                                    </ProductFormMediaWrapper>
                                )
                            )
                        }

                        <ProductFormMediaWrapper $isSelected={false}>
                            
                            <ProductFormMediaFileInputWrapper $notMediaSet={true}>
                                <ProductFormMediaFileInput
                                    onChange={
                                        (event: React.ChangeEvent<HTMLInputElement>) => {
                                            setProductInfo(prev => (
                                                {...prev, media : [...prev.media, event.target.files[0]]}
                                            ))
                                        }
                                    }
                                />
                                <ProductFormMediaFileInputDescriptionWrapper>
                                    <ProductFormMediaFileInputDescription>Добавить медиа</ProductFormMediaFileInputDescription>
                                    <ProductFormMediaPlaceholderSVG/>
                                </ProductFormMediaFileInputDescriptionWrapper>
                            </ProductFormMediaFileInputWrapper>
                            
                        </ProductFormMediaWrapper>
                    </SliderContent>
                </SliderContentWrapper>
                
                <SliderArrowButton onClick={movePageRight}>
                <SliderRightArrow />
                </SliderArrowButton>
                
            </SliderWrapper>
    )
}



export default memo(MediaSlider)