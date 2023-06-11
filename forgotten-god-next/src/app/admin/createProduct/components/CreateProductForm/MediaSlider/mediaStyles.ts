import styled from "styled-components";
import Image from "next/image";

import LeftArrowSVG from "@/app/admin/createProduct/public/left-arrow.svg"
import RightArrowSVG from "@/app/admin/createProduct/public/right-arrow.svg"
import ImagePlaceholderSVG from "@/app/admin/createProduct/public/image-placeholder.svg";

export const MediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: clamp(10px, 2vw, 24px);
    width: 100%;
    
`

export const MediaContainer = styled.div`
    width: 100%; 
    aspect-ratio: 16/9;
    margin-inline: auto;
    background-color: #2e2e2e;
    border-radius: 10px;
    
    overflow: hidden;
    position: relative;
    @media (max-width: 600px) {
        width: 100%;
    }
`


export const MediaImage = styled(Image).attrs(
    {
        width: 0,
        height: 0,
        alt: "mediaImage",
        sizes: "100vw"
    }
)`
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-inline: auto;
`

export const SliderWrapper = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    place-items: center;
    position: relative;
    padding: 15px clamp(5px, 2vw, 15px) ;
    column-gap: clamp(10px, 2vw, 25px);
    width: 100%;
    
    
`

export const SliderContentWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
`


export const SliderContent = styled.div<{$currentGroupIndex : number}>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    transition: transform 0.35s ease-in-out;
    --_gap: 20px;
    gap: var(--_gap);
    --_one-element: calc((100% - (var(--_gap) * 3)) / 4 );

    transform: translateX(calc( -100 * ${props => props.$currentGroupIndex}% - var(--_gap) * ${props => props.$currentGroupIndex }));
    transition: transform 0.8s;
    & > * {
        flex: 0 0 var(--_one-element);
    }
`



export const ProductFormMediaWrapper = styled.label<{$isSelected : boolean}>`
    position: relative;
    border-radius: 5px;
    
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
    cursor: pointer;
    border: 1px solid ${props => props.$isSelected ? '#fff': 'transparent'};
    

    &:hover > div, &:focus-visible > div, &:active > div{
        opacity: 1;
    }
`

export const ProductFormMediaFileInputWrapper = styled.div<{$notMediaSet: boolean}>`
    inset: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${props => props.$notMediaSet ? 1 : 0};
    display: flex;
    flex-direction: column;
    margin: auto;
    place-items: center;
    background-color: #333;
    transition: opacity 0.3s;
`

export const ProductFormMediaFileInput = styled.input.attrs({type: "file"})`
    position: absolute;
    appearance: none;
    visibility: hidden;
    width: 100%;
    height: 100%;
`

export const ProductFormMediaFileInputDescriptionWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: clamp(0px, 1vw, 10px);
`

export const ProductFormMediaFileInputDescription = styled.span`
    font-size: clamp(8px, 1vw, 14px);
    color: #ccc;
    align-self: flex-end;
    white-space: nowrap;
`

export const ProductFormMediaPlaceholderSVG = styled(ImagePlaceholderSVG)`
    width: clamp(10px, 5px + 1vw, 30px);
    height: clamp(10px, 5px + 1vw, 30px);
    object-fit: cover;
    fill: #ccc;
`

export const ProductFormMedia = styled(Image).attrs(
    {
        width: 0,
        height: 0,
        alt: "sliderImage",
        sizes: "100vw"
    }
)`
    display: block;
    background-color: #333;
    width: 100%;
    height: 100%;
    
    object-fit: cover; 
`




export const SliderVideoMark = styled.img`
    position: absolute;
    width: clamp(30px, 4vw, 50px);
    height: clamp(30px, 4vw, 50px);
    
    padding: 3%;
    border-radius: 50%;
    background-color: #780c0ce1;
    object-fit: cover;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    user-select: none;
`


export const SliderArrowButton = styled.button`
    width: clamp(20px, 4vw, 40px);
    aspect-ratio: 1;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    
    transition: fill 0.2s ease-in-out;

    &:hover{
        fill: #780c0c;
    }
`

export const SliderLeftArrow = styled(LeftArrowSVG)`
    width: clamp(20px, 4vw, 40px);
    height: clamp(20px, 4vw, 40px);
    object-fit: contain;
    cursor: pointer;
    display: block;
    
    transition: fill 0.2s ease-in-out;

    &:hover{
        fill: #780c0c;
    }
`

export const SliderRightArrow = styled(RightArrowSVG)`
    width: clamp(20px, 4vw, 40px);
    height: clamp(20px, 4vw, 40px);
    object-fit: contain;
    display: block;
    cursor: pointer;
    
    transition: fill 0.2s ease-in-out;

    &:hover{
        fill: #780c0c;
    }
`


export const SliderCanvas = styled.canvas`
    display: block;
    background-color: #333;
    width: 100%;
    height: 100%;
    
    object-fit: cover; 
`
export const SliderCanvasVideo = styled.video`
    position: absolute;
    inset: 0;
    display: block;
    visibility: hidden;
`


