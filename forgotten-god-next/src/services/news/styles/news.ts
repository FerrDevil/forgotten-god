import Link from "next/link";
import styled from "styled-components";




export const NewsNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 30px;
    width: 100%;
    background-color: #111;
    padding: 25px;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 2;
`

export const NewsNavigationOption = styled.span`
    color: #ccc;
    cursor: pointer;
    background-color: #313131;
    padding: 5px 20px;
    border-radius: 15px;
    &:hover{
        color: #fff;
        background-color: #444;
    }
`
export const NewsMainContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
`
export const NewsFeedSidebar = styled.aside`
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: fixed;
    left: 10px;
    top: 70px;
    padding: 10px 20px;
    margin: 10px 0;
    height: 90%;
    z-index: 3;

    &::-webkit-scrollbar{
        appearance: none;
        border-radius: 10px;
        width: 0;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb{
        appearance: none;
        background-color: #313131;
        border-radius: 10px;
    }
    &:hover::-webkit-scrollbar{
        width: 10px;
    }
    
`

export const UserFavourites = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`
export const UserFavouritesHeader = styled.h2`
    color: #ccc;
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
`


export const UserFavouritesWrapper = styled.div<{$isExpanded: boolean}>`
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    height:  400px;
    transition: height 0.3s ease-in-out;
    & > *{
        flex-basis: ${props => props.$isExpanded ? 100 : 12.5}%;
    }
`

export const UserFavourite = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    column-gap: 20px;
    height: 50px;
    padding: 10px 10px;
    border-radius: 5px;
    &:hover{
        background-color: #313131;
    }
    &:focus{
        outline: none;
        background-color: #313131;
    }
`

export const UserFavouriteImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`
export const UserFavouriteName = styled.span`
display: block;
    color: #ccc;
    font-size: 18px;
    max-width: 14ch;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`

export const UserFavouritesExpand = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    cursor: pointer;
`
export const UserFavouritesExpandImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
`
export const UserFavouritesExpandText = styled.span`
    color: #ccc;
    font-size: 18px;
`

export const NewsFeed = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    row-gap: 30px;
`


