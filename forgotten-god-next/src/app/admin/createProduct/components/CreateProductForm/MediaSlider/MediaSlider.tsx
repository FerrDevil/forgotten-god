"use client"
import { MediaWrapper, MediaContainer, MediaImage, SliderWrapper, SliderLeftArrow, SliderContentWrapper, SliderContent, SliderRightArrow, SliderVideoMark, SliderArrowButton, ProductFormMediaWrapper, ProductFormMediaFileInputWrapper, ProductFormMediaFileInput, ProductFormMediaFileInputDescriptionWrapper, ProductFormMediaFileInputDescription, ProductFormMediaPlaceholderSVG, ProductFormMedia } from "./mediaStyles"
import { Dispatch, SetStateAction, memo, useEffect, useMemo, useRef, useState } from "react"
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer"
import { IProductInfo } from "../CreateProductForm"
import MediaSliderCanvas from "./MediaSliderCanvas"
import { ImageSliderProps, ISliderParams } from "./types"

const MediaSlider = memo(({ mediaElements=[], setProductInfo } : {mediaElements: File[], setProductInfo : Dispatch<SetStateAction<IProductInfo>>}) => {

    const [sliderParams, setSliderParams] = useState<ISliderParams>({
        pageIndex: 0,
        selectedMediaIndex: 0
    })

    const [elements, setElements] = useState<File[]>([])

    return(
        <MediaWrapper>
            <MediaContainer>
            { 
                elements.length !== 0 && (
                    elements[sliderParams.selectedMediaIndex]?.type.startsWith('video')  ?
                        <VideoPlayer src={URL.createObjectURL(elements[sliderParams.selectedMediaIndex])}/> :
                        <MediaImage src={URL.createObjectURL(elements[sliderParams.selectedMediaIndex])} alt="sliderImage"/>
                    )
            }
            </MediaContainer>
            <ImageSlider elements={elements} setElements={setElements} sliderParams={sliderParams} setSliderParams={setSliderParams} setProductInfo={setProductInfo}/>
        </MediaWrapper>
    )
})


const ImageSlider = memo(({elements=[], setElements, sliderParams, setSliderParams, setProductInfo}: ImageSliderProps) => {

    
    const getPagesLength = useMemo(() => Math.ceil((elements.length + 1 )/ 4), [elements] )

    const movePageLeft = (event) => {
        event.preventDefault()
        setSliderParams(prev => ({...prev, pageIndex: prev.pageIndex > 0 ? prev.pageIndex - 1 : getPagesLength-1}))
    }

    const movePageRight = (event) => {
        event.preventDefault()
        setSliderParams(prev => ( {...prev, pageIndex: prev.pageIndex !== getPagesLength - 1 ? prev.pageIndex + 1 : 0}))
    }

    const selectMedia = (index: number) => {
        setSliderParams(prev =>  ({...prev, selectedMediaIndex: index }))
    }

    const inputRef = useRef(null)

    useEffect(() => {
        const dataTransfer = new DataTransfer()
        for (let file of elements){
            dataTransfer.items.add(file)
        }
        console.log(dataTransfer.files)
        inputRef?.current && (inputRef.current.files = dataTransfer.files )
    }, [elements])

    

    return (
        <SliderWrapper>
                <SliderArrowButton onClick={movePageLeft}>
                    <SliderLeftArrow/>
                </SliderArrowButton>
                
                <SliderContentWrapper>
                    <ProductFormMediaFileInput accept="image/*, video/*" name="media" ref={inputRef} multiple/>
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
                                                <ProductFormMedia src={`${URL.createObjectURL(element)}`} alt="sliderImage"/> 
                                            }
                                        <ProductFormMediaFileInputWrapper $notMediaSet={false}>
                                            <ProductFormMediaFileInput accept="image/*, video/*" onChange={
                                                (event: React.ChangeEvent<HTMLInputElement>) => {
                                                    setElements(prev => (
                                                        prev.map((el, index) => index === elementIndex ? event.target.files[0] : el)
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
                                            setElements(prev => [...prev, event.target.files[0]])
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
})


/* (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo(prev => (
        {...prev, media : [...prev.media, event.target.files[0]]}
    ))
} */



export default memo(MediaSlider)