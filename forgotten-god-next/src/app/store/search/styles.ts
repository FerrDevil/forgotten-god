"use client"
import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`

export const SearchContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const SearchContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    width: 100%;
    gap: 10px 20px;
    padding: 5px 40px;

`

export const SearchNoSuchProductsFound = styled.span`
    font-size: clamp(14px, 7px + 1vw, 20px);
    padding: 20px;
    color: #ccc;
    width: 100%;
    user-select: none;
    pointer-events: none;
    text-align: center;
`


export const SearchProductLoader = styled.div`
    aspect-ratio: 16/9;
    background-color: #2e2e2e;
    border-radius: 5px;
    animation: pulse 2s infinite ease-in-out;
    
    @keyframes pulse {
        from{
            filter: brightness(90%);
        }
        50%{
            filter: brightness(70%)
        }

        to {
            filter: brightness(90%);
        }
    }
`

