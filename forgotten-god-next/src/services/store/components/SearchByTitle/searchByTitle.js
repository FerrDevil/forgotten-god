import styled from "styled-components"
import SearchSVG from "../../public/search.svg"
import Link from "next/link"
import Image from "next/image";

export const SearchInputWrapper = styled.nav`
    position: relative;
    
    @media (max-width: 600px) {
        flex: 1 1 50%;
    }
`
export const SearchInputSVG = styled(SearchSVG)`
    width: 20px;
    height: 20px;
    fill: #ccc;
    object-fit: contain;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translate(0, -50%);
    
`







export const SearchResult = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    width: 100%;
    padding: 5px 20px;
    justify-content: space-between;
`

export const SearchInput = styled.input`
    width: 100%;
    background-color: #2e2e2e;
    border-radius: 20px;
    border: none;
    font-size: clamp(11px, 5px + 2vw, 16px);
    padding: 10px 20px 10px 40px;
    color: #ccc;
    &:focus{
        outline: 1px solid transparent;
    }
    @media (max-width: 600px) {
        min-width: 100%;
        max-width: 300px;
    }
`

export const SearchResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    max-width: 100%;
    position: absolute;
    left: 0;
    top: 100%;
    background-color: #343434;
    opacity: ${props => props.$isVisible? 1: 0};
    user-select: ${props => props.$isVisible? "all": "none"};
    pointer-events: ${props => props.$isVisible? "all": "none"};

    transition: opacity 0.2s linear, border-radius 0.2s linear;

    &:has(${SearchResult}) ~ ${SearchInput}{
        border-bottom-left-radius: ${props => props.$isVisible? 0: "auto"};;
        border-bottom-right-radius: ${props => props.$isVisible? 0: "auto"};
    }
    
`

export const SearchResultBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
`

export const SearchResultTitle = styled.span`
    font-size: 20px;
    color: #ccc;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 14ch;
`

export const SearchResultImage = styled(Image).attrs(props => ({
    width: 30,
    height: 30,
    alt: "searchResultImage"
}))`
    width: 30px;
    height: 30px;
    object-fit: cover;
`

export const SearchResultPrice = styled.span`
    font-size: 20px;
    color: #ccc;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 14ch;
`