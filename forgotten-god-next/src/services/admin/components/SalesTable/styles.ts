"use client"
import styled from "styled-components";

export const UserTableWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: 200px 1fr;
`
export const UserTableNavigation = styled.nav`
    display: flex;
    
`
export const UserTableContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`
export const UserTableRow = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    
    background-color: #242424;
    
`
export const UserTableElement = styled.span`
    text-align: center;
    padding: 5px 10px;
    font-size: 18px;
    color: #ccc;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    position: relative;
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