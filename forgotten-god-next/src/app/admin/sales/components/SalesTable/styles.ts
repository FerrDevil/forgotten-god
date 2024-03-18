"use client"
import styled from "styled-components";

export const UserTableWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
export const UserTableNavigation = styled.nav`
    display: flex;
    
`
export const UserTableContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`

export const UserTableRow = styled.div<{$isHeader: boolean}>`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    
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