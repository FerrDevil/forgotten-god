"use client"
import Image from "next/image"
import styled from "styled-components"

import CartSVG from "@/services/store/public/cart.svg";
import ImagePlaceholderSVG from "@/app/admin/createProduct/public/image-placeholder.svg";

export const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 40px;

    width: 100%;
    height: 100%;
`

export const ProductFormHeader = styled.h2`
    color: #ccc;
    font-size: 30px;
    font-weight: 700;
`

export const ProductFormContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
`

export const ProductFormMainInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 40px;
    width: 100%;
    padding-inline: 10px;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        align-items: center;
        row-gap: 50px;
    }
`


export const ProductFormMainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: clamp(15px, 2vw, 40px);
    
    @media (max-width: 1000px) {
        order: 2;
        width: 100%;
        margin-bottom: 20px;
    }
`

export const ProductFormMainInfoSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    top: 70px;
    margin-right: 50px;
    row-gap: clamp(15px, 2vw, 40px);
    flex-basis: 40%;
    @media (max-width: 1000px) {
        position: static;
        width: 100%;
        margin-right: auto;
    }
`

export const ProductFormBriefGameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    width: 100%;
    
`




export const ProductFormGameLogoWrapper = styled.label`
    display: grid;
    grid-template-rows: 1fr;
    position: relative;
    color: #ccc;
    aspect-ratio: 16/9;
    isolation: isolate;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #333;
    
    @media (max-width: 600px) {
        margin-bottom: 20px;
        
    }

    &:hover > div, &:focus-visible > div, &:active > div{
        opacity: 1;
    }
`

export const ProductFormGameLogoFileInputWrapper = styled.div<{$notLogoSet: boolean}>`
    inset: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: ${props => props.$notLogoSet ? 1 : 0};
    display: flex;
    flex-direction: column;
    margin: auto;
    place-items: center;
    background-color: #333;
    transition: opacity 0.3s;
`

export const ProductFormGameLogoFileInput = styled.input.attrs({type: "file"})`
    position: absolute;
    appearance: none;
    visibility: hidden;
    width: 100%;
    height: 100%;
`

export const ProductFormGameLogoFileInputDescriptionWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const ProductFormGameLogoFileInputDescription = styled.span`
    font-size: clamp(14px, 7px + 1vw, 20px);
    color: #ccc;
    align-self: flex-end;
  
`

export const ProductImagePlaceholderSVG = styled(ImagePlaceholderSVG)`
    width: 50px;
    height: 50px;
    object-fit: cover;
    fill: #ccc;
`




export const ProductFormGameLogo = styled(Image).attrs(
    {
        width: 0,
        height: 0,
        alt: "gameLogo",
        sizes: "100vw"
    }
)`
    background-color: #333;
    width: 100%;
    height: 100%;
    
    object-fit: cover; 
`


export const ProductFormGamePrice = styled.p`
    font-size: clamp(25px, 3vw,40px);
    color: #ccc;
    align-self: flex-end;
    
`



export const ProductFormOrderButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: clamp(40px, 5vw, 50px);
    gap: 3px;
    width: 100%;
`

export const ProductFormOrderButton = styled.div`
    display: grid;
    place-items: center;
    font-size: clamp(16px, 2vw, 20px);
    color: #ccc;
    border: 1px solid transparent;
    border-radius: 3px 0 0 3px;
    
    width: 100%;
    
    text-align: center;
    text-transform: uppercase;
    background-color: #780c0c;
    
    
    transition: border-color, color, background-color 0.3s ease-in-out ;
    


`


export const ProductFormCartSVG = styled(CartSVG)`
    display: block;
    object-fit: cover;
    width: 30px;
    height: 30px;
    
    transition: fill 0.3s ease-in-out ;
`

export const ProductFormCartButton = styled.div`
    display: grid;
    place-items: center;
    border-radius: 0 3px 3px 0;
    height: 100%;
    padding: 5px;
    
    background-color: #780c0c;
    border: 1px solid transparent;
    transition: fill, border-color, color, background-color 0.3s ease-in-out ;

`

export const ProductFormWishlistButton = styled.div`
    display: grid;
    place-items: center;
    font-size: clamp(14px, 2vw, 18px);
    color: #ccc;
    border-radius: 3px;
    padding: 2px 30px;
    width: 100%;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    background-color: #111;
    border: 1px solid #ccc;
    transition: border-color, color, background-color 0.3s ease-in-out ;
`

export const ProductFormGameDetails = styled.div`
    color: #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;
    padding-inline: 5px;
`

export const ProductFormGameDetail = styled.div`
    font-size: clamp(14px, 3vw, 18px);
    color: #ccc;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 20px;
    
`

export const ProductFormGameDetailName = styled.span`
    color: #ccc;
    white-space: nowrap;
    font-size: clamp(14px, 3vw, 18px);
    min-width: 11ch;
`

export const ProductFormGameDetailValueWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-inline: 5px;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #ccc;
    }
`

export const ProductFormGameDetailValue = styled.span`
    font-size: clamp(14px, 3vw, 18px);
    color: #ccc;
`
export const ProductFormGameTagsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ProductFormGameTagsHeader = styled.h2`
    font-size: clamp(14px, 3vw, 18px);
    font-weight: 400;
    color: #ccc;
`
export const ProductFormGameTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ProductFormGameSynopsis = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: clamp(10px, 2vw, 30px);
    width: 100%;
    padding: 20px clamp(20px, 3vw, 40px);
`
export const ProductFormGameSynopsisHeader = styled.h2`
    font-size: clamp(20px, 2vw, 30px);
    color: #ccc;
    
`



export const ProductTextInputLabelText = styled.span`
    position: absolute;
    color: #ccc;
    left: 20px;
    top: 50%;
    transform: translate(0, -50%);
    transition: top 0.25s cubic-bezier(0.0, 0, 0.2, 1), font-size 0.2s cubic-bezier(0.0, 0, 0.2, 1) ;
   
    
`

interface IIsInvalid{
    $isInvalid: boolean
}

export const ProductTextInputLabel = styled.label<IIsInvalid>`
    position: relative;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    padding: 25px 20px 8px 20px;
    border: none;
    outline: 1px solid ${props => ( props.$isInvalid ? '#c52929' : 'transparent')};
    
    &:has(input:focus), &:has(textarea:focus){
        outline: 1px solid #ccc;
    }
    
    &:-webkit-autofill{
        background-color: #2e2e2e;
    }
`




export const ProductTextInput = styled.input`
    font-size: 16px;
    width: 400px;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    
    border: none;
    outline: none;
    
    &:focus ~ ${ProductTextInputLabelText}, &:not(:placeholder-shown)&:not(:focus) ~ ${ProductTextInputLabelText}{
        top: 2px;
        transform: none;
        font-size: 14px;
    }
    &:-webkit-autofill{
        background-color: #2e2e2e;
    }
`

export const ProductTextarea = styled.textarea`
    font-size: 16px;
    width: 400px;
    background-color: #2e2e2e;
    border-radius: 4px;
    color: #ccc;
    border: none;
    outline: none;
    
    height: 70px;
    overflow: auto;

    &::-webkit-scrollbar{
        appearance: none;
        width: 7px;
    }

    &::-webkit-scrollbar-track{
        border-radius: 100vh;
        background-color: #212121;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 100vh;
        background-color: #3f3f3f;
    }
   
    &:focus ~ ${ProductTextInputLabelText}, &:not(:placeholder-shown)&:not(:focus) ~ ${ProductTextInputLabelText}{
        top: 2px;
        transform: none;
        font-size: 14px;
    }
    &:-webkit-autofill{
        background-color: #2e2e2e;
    }
    resize: none;
`


export const ProductButton = styled.button`
    font-size: 18px;
    color: #ccc;
    background-color: #282828;
    border: none;
    width: 400px;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: #37373a;
    }
    &:disabled{
        color: #4e4e4e;
        cursor: default;
    }
`

export const ProductImageUploadLabel = styled.label`
    display: block;
    position: relative;
    border-radius: 10px;
    width: 440px;
    height: 50px;
    padding: 10px 20px;
    background-color: #282828;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:focus, &:hover{
        background-color: #780c0c;
    }
`

export const ProductImageUploadLabelText = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    color: #ccc;
    font-size: 18px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    user-select: none;
`

export const ProductImageUploadInput = styled.input`
    display: none;
`