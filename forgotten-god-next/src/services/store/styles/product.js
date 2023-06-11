"use client"
import styled from "styled-components";
import Image from "next/image";


export const ProductPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
`

export const MainInfoWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 40px;
    margin-top: 20px;
    width: 100%;
    padding-inline: 10px;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        align-items: center;
        row-gap: 50px;
    }
`

export const MainInfo = styled.div`
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

export const MainInfoSidebar = styled.aside`
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

export const BriefGameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    width: 100%;
`

export const GameTitle = styled.h1`
    font-size: clamp(25px, 3vw, 40px);
    color: #ccc;
    align-self: flex-start;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
`
export const GameLogoWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    position: relative;
    color: #ccc;
    max-width: 100%;
    width: 100%;
    height: 100%;
    
    @media (max-width: 600px) {
        margin-bottom: 20px;
        
    }
`

export const GameLogo = styled(Image).attrs(props => (
    {
        width: 0,
        height: 0,
        alt: "gameLogo",
        sizes: "100vw"
    }
))`
    width: 100%;
    height: auto;
    
    object-fit: cover; 
`

export const GameCost = styled.p`
    font-size: clamp(25px, 3vw,40px);
    color: #ccc;
    align-self: flex-end;
`

export const WishlistButton = styled.button`
    font-size: clamp(14px, 2vw, 18px);
    color: #ccc;
    border-radius: 3px;
    padding: 2px 30px;
    width: 100%;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    background-color: #111;
    cursor: pointer;
    border: 1px solid #ccc;
    transition: border-color, color, background-color 0.3s ease-in-out ;

    &:hover{
        border-color: #111;
        color: #111; 
        background-color: #ccc;
    }
`

export const GameDetails = styled.div`
    color: #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;
    padding-inline: 5px;
`

export const GameDetail = styled.div`
    font-size: clamp(14px, 3vw, 18px);
    color: #ccc;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 20px;
    
`

export const GameDetailName = styled.span`
    color: #ccc;
    white-space: nowrap;
    font-size: clamp(14px, 3vw, 18px);
    min-width: 11ch;
`

export const GameDetailValueWrapper = styled.span`
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

export const GameDetailValue = styled.span`
    font-size: clamp(14px, 3vw, 18px);
    color: #ccc;
`

export const GameSynopsis = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: clamp(10px, 2vw, 30px);
    width: 100%;
    padding: 20px clamp(20px, 3vw, 40px);
`
export const GameSynopsisHeader = styled.h2`
    font-size: clamp(20px, 2vw, 30px);
    color: #ccc;
    
`

export const GameSynopsisParagraph = styled.p`
    font-size: clamp(15px, 2vw, 20px);
    color: #ccc;
    
`

export const ProductFormGameTagsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
`


export const ProductFormGameTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
`

export const ReviewsBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    row-gap: 20px;
`

export const ReviewsBlockHeader = styled.h2`
    font-size: 30px;
    color: #ccc;
`
export const ReviewsBlockContent = styled.div`
    display: flex;
    flex-direction: column;
`