"use client"

import styled from "styled-components"
import SuccessSVG from "@/public/success.svg"
import ErrorSVG from "@/public/error.svg"
import { IToastMessageWrapper } from "./types"


export const ToastWrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    
    gap: clamp(5px, 1vw, 10px);
    position: fixed;
    bottom: clamp(10px, 1vw, 20px);
    left: clamp(10px, 1vw, 20px);
    
    user-select: none;
    pointer-events: none;

    @media (max-width: 768px) {
        right: clamp(10px, 1vw, 20px);
    }
`

export const ToastMessageWrapper = styled.div<IToastMessageWrapper>`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: ${props => props.$isError? "#CE5250" : "#60BF8C"};
    border-radius: 8px;
    overflow: hidden;
    & svg{
        fill: ${props => props.$isError? "#CE5250" : "#60BF8C"};
    }

    &::after{
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        animation: timeIndicator ${props => props.$timeout}ms forwards;
        height: 3px;
        background-color: #eee;
    }
    @keyframes timeIndicator {
        from{
            width: 0;
        }
        to{
            width: 100%;
        }
    }
`

export const ToastMessageIconWrapper = styled.div`
    width: 26px;
    height: 26px;
    aspect-ratio: 1;
    border-radius: 1000vw;

`

export const ToastMessageSuccessIcon = styled(SuccessSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const ToastMessageErrorIcon = styled(ErrorSVG)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`


export const ToastMessageText = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;

    color: #FFFFFF;

`