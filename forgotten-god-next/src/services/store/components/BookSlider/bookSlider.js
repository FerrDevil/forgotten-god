import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LeftArrowSVG } from "../../public/left-arrow.svg";
import { ReactComponent as RightArrowSVG } from "../../public/right-arrow.svg";


export const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    width: 100%;
    padding: 20px;
    
`

export const SliderTitle = styled.h2`
    font-size: clamp(18px, 9px + 2vw, 24px);
    color: #ccc;
    margin-left: 40px;
    @media (max-width: 600px) {
        margin-left: 20px;
    }
`
export const SliderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    
    column-gap: clamp(30px, 15px + 2vw, 40px);
    
`

export const SliderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    width: 100%;
    height: max-content;
    
    
`

export const SliderPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    max-width: 50%;
    transform-origin: left;
    transform-style: preserve-3d;
    transform: rotateY(${props => props.$shouldTurn? -180: 0}deg);
    transition: transform 1s cubic-bezier(0.95, 0.46, 0.45, 0.94);
    z-index: ${props => props.shouldTurn? -100: -props.zIndex};
`

export const SliderImage = styled.img.attrs(() => ({
    src: "/images/deck.png"
}))`
   width : 100%;
   z-index: -1000;
   object-fit: cover;
`


export const SliderItem = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-height: 100%;
    row-gap: 20px;
    transform: ${props => props.$isBackItem ? "rotateY(180deg) " : "none"};
    position: ${props => props.$isBackItem ? "absolute" : "static"};
    top: 0;
    /* background-color: var(--main-color-black); */
    backface-visibility: hidden;
    padding: 12%;
    margin-left: -20%;

    
`

export const SliderItemImage = styled.img`
    max-width: 100%;
    object-fit: cover;
    color: #fff;
    border-radius: 10px;
    background: linear-gradient(to bottom, rgb(43, 43, 43), rgb(32, 32, 32));;
    
`

export const SliderItemInfo = styled.div`
    display: none;
    flex-direction: column;
    align-items: left;
    row-gap: 12px;
    width: 100%;
    padding: 0 10px;
    
`

export const SliderItemName = styled.span`
    font-size: 16px;
    color: #ccc;
`

export const SliderItemPrice = styled.span`
    font-size: 16px;
    color: #ccc;

`

export const SliderLeftArrow = styled(LeftArrowSVG)`
    width: 40px;
    height: 40px;
    fill: #ccc;
    object-fit: contain;
    transition: fill 0.3s ease-in-out;
    cursor: pointer;
    &:hover, &:focus{
        fill: #780c0c;
    }
    
`

export const SliderRightArrow = styled(RightArrowSVG)`
    width: 40px;
    height: 40px;
    
    fill: #ccc;
    object-fit: contain;
    transition: fill 0.3s ease-in-out;
    cursor: pointer;
    &:hover, &:focus{
        fill: #780c0c;
    }
    
`