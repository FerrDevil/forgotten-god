import styled from "styled-components";
import Image from "next/image";
import LeftArrowSVG from "../../public/left-arrow.svg"
import RightArrowSVG from "../../public/right-arrow.svg"


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


export const SliderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    transition: transform 0.35s ease-in-out;
    transform: translateX(calc(-${props => props.pageIndex * 100}% - ${props => props.pageIndex * 20}px));
`

export const SliderImageWrapper = styled.div`
    flex: 0 0 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    position: relative;
    border-radius: 5px;
    border: 1px solid ${props => props.isSelected ? '#fff': 'transparent'};
    overflow: hidden;
    cursor: pointer;
`


export const SliderImage = styled(Image).attrs(props => (
    {
        width: 200,
        height: 200,
        alt: "sliderImage"
    }
))`
    object-fit: cover;
    aspect-ratio: 16 / 9;
    max-width: 100%;
    height: auto;
    
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
export const SliderLeftArrow = styled(LeftArrowSVG)`
    width: clamp(20px, 4vw, 40px);
    height: clamp(20px, 4vw, 40px);
    object-fit: contain;
    cursor: pointer;
    
    transition: fill 0.2s ease-in-out;

    &:hover{
        fill: #780c0c;
    }
`

export const SliderRightArrow = styled(RightArrowSVG)`
    width: clamp(20px, 4vw, 40px);
    height: clamp(20px, 4vw, 40px);
    object-fit: contain;
    cursor: pointer;
    
    transition: fill 0.2s ease-in-out;

    &:hover{
        fill: #780c0c;
    }
`
