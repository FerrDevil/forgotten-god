"use client"
import styled from "styled-components";

import ExpandSVG from "../../public/expand_more.svg";
import ExpandLessSVG from "../../public/expand_less.svg";

export const UserTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`
export const UserTableNavigation = styled.nav`
    display: flex;
    
`
export const UserTableContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`

interface IIsHeader{
    $isHeader: boolean
}
export const UserTableRow = styled.div<IIsHeader>`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    background-color: ${props => props.$isHeader? "#333" : "#242424"};
    
`
export const UserTableElement = styled.span`
    text-align: center;
    padding: 5px 10px;
    font-size: 18px;
    color: #ccc;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
`

export const UserRoleWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    & > ${UserTableElement} {
        width: 100%;
    }
`

interface IIsShown{
    $isShown: boolean
}

export const UserPromote = styled.div<IIsShown>`
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: ${props => props.$isShown? 1: 0};
    pointer-events: ${props => props.$isShown? "all": "none"};
    user-select: ${props => props.$isShown? "all": "none"};
    transition: opacity 0.2s ease-in-out;
`

export const UserPromoteExpandSVG = styled(ExpandSVG)`
    position: absolute;
    right: 0;
    fill: #ccc;
    width: 30px;
    height: 30px;
    object-fit: contain;
    cursor: pointer;
`

export const UserPromoteExpandLessSVG = styled(ExpandLessSVG)`
    position: absolute;
    right: 0;
    fill: #ccc;
    width: 30px;
    height: 30px;
    object-fit: contain;
    cursor: pointer;
`

export const UserPromoteOption = styled.button`
    border: none;
    background-color: #242424;
    text-align: center;
    padding: 5px 10px;
    font-size: 18px;
    color: #ccc;
    cursor: pointer;
    
`



