import styled from "styled-components";
import Image from "next/image";

import LeftArrowSVG from "../../public/left-arrow.svg"
import RightArrowSVG from "../../public/right-arrow.svg"

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
    
    
`

export const SliderContentWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
    padding: 1px;
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

export const SliderImageWrapper = styled.button<{$isSelected : boolean}>`
    position: relative;
    border-radius: 5px;
    border: 1px solid ${props => props.$isSelected ? '#fff': 'transparent'};
    overflow: hidden;
    width: 100%;
    aspect-ratio: 16 / 9;
    cursor: pointer;
`


export const SliderImage = styled(Image).attrs(props => (
    {
        width: 0,
        height: 0,
        alt: "sliderImage",
        sizes: "100vw"
    }
))`
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: block;
    
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
