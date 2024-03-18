"use client"
import styled from "styled-components";

import SearchSVG from "./public/search.svg";
import FilterSVG from "./public/filter.svg";
import CloseSVG from "./public/close.svg";
import DoneSVG from "./public/done.svg";


export const SearchInputWrapper = styled.label`
    position: relative;
`
export const SearchInputImage = styled(SearchSVG)`
    width: 20px;
    height: 20px;
    object-fit: cover;
    position: absolute;
    fill: #ccc;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
`

export const SearchInput = styled.input`
    background-color: #2e2e2e;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    padding: 10px 20px 10px 40px;
    color: #ccc;
    &:focus{
        outline: none;
    }
`

export const SearchPanelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 20px;

    width: 100%;
    z-index: 1000;
    height: 70px;
   
    position: sticky;
    background-color: var(--main-color-black);
    top: 0;
    
`



export const SearchControls = styled.aside<{
    $isVisible: boolean
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: fixed;
    right: 0;
    bottom: 0;
    top: 70px;
    
    background-color: var(--main-color-black);
    max-width: 600px;
    width: 100%;
    z-index: 1000;

    pointer-events: ${props => !props.$isVisible ? "none" : "all"};
    transform: translateX(${props => !props.$isVisible ? "100%" : "0" });
    transition: transform 0.5s ease-in-out;

    @media (max-width: 768px) {
        top: 70px;
        
    }

`

export const SearchControlsHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    padding: 0 clamp(30px, 3vw, 70px);
    width: 100%;
    border-bottom: 1px solid #2c2c2c;
`
export const SearchControlsHeaderTitle = styled.h2`
    font-size: 20px;
    color: #ccc;
    pointer-events: none;
    user-select: none;
    
`

export const SearchControlsClose = styled(CloseSVG)`
    width: 20px;
    height: 20px;
    object-fit: cover;
    fill: #ccc;
    justify-self: flex-end;
    cursor: pointer;
    transition: fill 0.25s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`

export const SearchControlsContent = styled.div`
    display: flex;
    flex-direction: column;
    
    height: 100%;
    overflow-y: auto;
    padding: 20px clamp(30px, 3vw, 70px);
    width: 100%;
`
export const SearchFiltersContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    padding-right: 10px;

`

export const SearchPrices = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 15px;
    padding: 10px 0;
`

export const SearchPricesTitle = styled.h2`
    font-size: 20px;
    color: #ccc;
    user-select: none;
    pointer-events: none;
`

export const SearchPricesRangeWrapper = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`

export const SearchPricesRange = styled.input`
    align-self: center;
    appearance: none;
    background-color: #550000;
    width: max(60%, 100px);
    height: 6px;
    border-radius: 100vh;
    cursor: pointer;
    &::-webkit-slider-thumb{
        cursor: pointer;
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: #780000;
        border-radius: 50%;
    }
`

export const SearchPricesRangeHint = styled.span`
    font-size: 18px;
    color: #ccc;
`

export const SearchFilters = styled(FilterSVG)`
    width: 20px;
    height: 20px;
    object-fit: cover;
    fill: #ccc;
    cursor: pointer;
    transition: fill 0.25s ease-in-out;
    &:hover{
        fill: #780c0c;
    }
`

export const SearchTags = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 15px;
    padding: 10px 0;
`

export const SearchTagsTitle = styled.h2`
    font-size: 20px;
    color: #ccc;
    user-select: none;
    pointer-events: none;
`

export const SearchTagsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1px;
    margin-left: 10px;

`

export const SearchTagName = styled.span`
    font-size: 16px;
    color: #ccc;
`
export const SearchTagIncludeCheckboxWrapper = styled.label`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`

export const SearchTagIncludeCheckboxSVG = styled(DoneSVG)`
    object-fit: cover;
    width: 16px;
    height: 16px;
    fill: #333;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
`

export const SearchTagIncludeCheckbox = styled.input.attrs({
    type: "checkbox"
})`
    width: 16px;
    height: 16px;
    appearance: none;
    background-color: transparent;
    border: 1px solid #333;
    transition: border-color 0.2s ease-in-out;
    &:checked{
        border-color: #215211;
        background-color: #ccc;
    }
    &:checked ~ ${SearchTagIncludeCheckboxSVG}{
        fill: #215211;
    }
`



export const SearchTagExcludeCheckboxWrapper = styled.label`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`

export const SearchTagExcludeCheckboxSVG = styled(CloseSVG)`
    object-fit: cover;
    width: 16px;
    height: 16px;
    fill: #333;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
`

export const SearchTagExcludeCheckbox = styled.input.attrs({
    type: "checkbox"
})`
    width: 16px;
    height: 16px;
    appearance: none;
    background-color: transparent;
    border: 1px solid #333;
    transition: border-color 0.2s ease-in-out;
    &:checked{
        border-color: #780000;
        background-color: #ccc;
    }

    &:checked ~ ${SearchTagExcludeCheckboxSVG}{
        fill: #780000;
    }
`

export const SearchTag = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
    padding: 5px 20px;
    transition: background-color 0.2s ease-in-out;
    &:has(${SearchTagIncludeCheckbox}:checked){
        background-color: #215211;
    }

    &:has(${SearchTagExcludeCheckbox}:checked){
        background-color: #780000;
    }
`

