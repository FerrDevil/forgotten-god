"use client"

import styled from "styled-components"

import EditSVG from "@/app/admin/createProduct/public/edit.svg"
import SaveSVG from "@/app/admin/createProduct/public/save.svg"

export const TitleFieldWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    align-self: flex-start;
    gap: 10px;
`

export const TitleFieldInputWrapper = styled.div<{$isInputShown: boolean}>`
    display: flex;
    align-items: center;
    position: relative;
    gap: 10px;

    & > textarea {
        opacity: ${props => props.$isInputShown? 1 : 0} ;
        pointer-events: ${props => props.$isInputShown? "all" : "none"} ;
        user-select: ${props => props.$isInputShown? "all" : "none"} ;
    }
    & > p {
        opacity: ${props => props.$isInputShown? 0 : 1} ;
        pointer-events: ${props => props.$isInputShown? "none" : "all"} ;
        user-select: ${props => props.$isInputShown? "none" : "all"} ;
    }
    
`

export const ProductFormGameSynopsisParagraph = styled.p`
    display: block;
    max-width: 40ch;
    min-height: calc(clamp(15px, 2vw, 20px) + 10px);
    font-size: clamp(15px, 2vw, 20px);
    font-weight: 400;
    line-height: 110%;
    color: #ccc;
    padding: 5px 10px;
    word-break: break-all;
    white-space: normal;
    
`

export const TitleFieldInput = styled.textarea`
    resize: none;
    display: block;
    position: absolute;
    padding: 5px;
    border-radius: 8px;
    line-height: 110%;
    background-color: #333;
    font-weight: 400;
    inset: 0;
    font-size: clamp(15px, 2vw, 20px);
    color: #ccc;
    overflow: hidden;
    border: 1px solid transparent;
    transition: opacity 0.1s;

    &:focus-visible{
        outline: 1px solid transparent;
    }
`

export const TitleFieldEditButton = styled.button`
    border: 1px solid transparent;
    background-color: transparent;
    width: 30px;
    aspect-ratio: 1;
    cursor: pointer;
    &:hover > svg, &:focus-visible > svg, &:active > svg{
        fill: #780c0c;
    }
`

export const TitleFieldEditButtonSVG = styled(EditSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    fill: #ccc;
`

export const TitleFieldSaveButtonSVG = styled(SaveSVG)`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    fill: #ccc;
`




