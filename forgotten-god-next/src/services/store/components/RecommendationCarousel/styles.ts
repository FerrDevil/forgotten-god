import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import LeftArrowSVG from "../../public/left-arrow.svg";
import RightArrowSVG from "../../public/right-arrow.svg";

export const Carousel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    user-select: none;
`

export const CarouselTitle = styled.h2`
    font-size: clamp(20px, 10px + 2vw, 30px);
    color: #ccc;
    margin-left: 50px;
    @media (max-width: 600px) {
        
        margin-left: 30px;
    }
`

export const CarouselContent = styled.div<{$index: number}>`
    display: grid;
    flex-direction: row;
    grid-auto-flow: column;
    grid-auto-columns: 50%;
    align-items: center;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${props => -50 * props.$index - 25 + "%"  });

    @media (max-width: 650px) {
        grid-auto-columns: 100%;
        transform: translateX(${props => -100 * (props.$index + 1) + "%"  });
    }
    
`

export const CarouselBlock = styled(Link)`
    padding: 0 5px;
    flex: 0 0 50%; 
    width: 100%;
    height: 100%;
    user-select: all;
`



export const CarouselImage = styled(Image).attrs(
    {
       width: 920,
       height: 517,
       alt: "carouselImage",
    }
)`
    display: inline-block;
    width: 100%;
    max-width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
`

export const CarouselLeftArrow = styled(LeftArrowSVG)`
    width: 40px;
    height: 40px;
    fill: #ccc;
    object-fit: contain;
    transition: fill 0.3s ease-in-out;
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
    }
`

export const CarouselRightArrow = styled(RightArrowSVG)`
    width: 40px;
    height: 40px;
    fill: #ccc;
    object-fit: contain;
    transition: fill 0.3s ease-in-out;
    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
    }
    padding: 0;
`

export const CarouselArrowWrapper = styled.div<{$direction: string}>`
    position: absolute;
    ${props => props.$direction + ": 0;"}
    background: linear-gradient(${props => props.$direction === "left" ? "" : "-"}90deg, #000000dd, transparent);
    width: 10%;
    padding: 20px;
    height: 100%;
    display: grid;
    place-items: center;
    z-index: 100;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;

    &:hover ${CarouselLeftArrow}, &:hover ${CarouselRightArrow} {
        fill: #780c0c;
    }
    @media (max-width: 600px) {
        min-width: 40px;
        opacity: 1;
        padding: 0;
    }
`


export const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
    color: #ccc;
    &:hover ${CarouselArrowWrapper}{
        opacity: 1;
        
    }
`

export const CarouselBottomButtons = styled.div`
    position: absolute;
    left: 50%;
    bottom: clamp(5px, 1vw, 10px);
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: clamp(5px, 5px + 1%, 20px);
    
`

export const CarouselBottomButton = styled.button<{$isActive: boolean}>`
    width: min(10px, 2vh);
    height: min(10px, 2vh);
    
    background-color: ${props => props.$isActive? "#780c0c": "#ccc"};
    border-radius: 100vh;
    border: 1px solid #000;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
`