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

    & > input {
        opacity: ${props => props.$isInputShown? 1 : 0} ;
        pointer-events: ${props => props.$isInputShown? "all" : "none"} ;
        user-select: ${props => props.$isInputShown? "all" : "none"} ;
    }
    & > h1 {
        opacity: ${props => props.$isInputShown? 0 : 1} ;
        pointer-events: ${props => props.$isInputShown? "none" : "all"} ;
        user-select: ${props => props.$isInputShown? "none" : "all"} ;
    }
    
`

export const ProductFormGameTitle = styled.h1`
    display: block;
    font-size: clamp(25px, 3vw, 40px);
    height: calc(clamp(25px, 3vw, 40px) + 10px) ;
    font-weight: 700;
    color: #ccc;
    align-self: flex-start;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    padding: 5px 10px;
    line-height: 100%;
    transition: opacity 0.1s;
`

export const TitleFieldInput = styled.input`
    display: block;
    position: absolute;
    padding: 5px;
    border-radius: 8px;
    line-height: 100%;
    background-color: #333;
    font-weight: 700;
    inset: 0;
    font-size: clamp(25px, 3vw, 40px);
    color: #ccc;
    align-self: flex-start;
    white-space: nowrap;
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




