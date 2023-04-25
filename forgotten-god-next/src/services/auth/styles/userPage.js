import styled from "styled-components";
import Link from "next/link";

export const UserPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    width: 100%;
    height: 100%;
    padding: 10px 30px;
`

export const UserOptions = styled.div`
    display: flex;
    flex-direction: column;

    padding: 5px 20px;
    position: sticky;
    top: 0;
    max-height: 100%;
`

export const UserOption = styled(Link)`
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    padding: 5px 20px;
    column-gap: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover, &:focus{
        background-color: #323232;
        outline: none;
    }
    
`

export const UserOptionImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    
`
export const UserOptionText = styled.div`
    font-size: 20px;
    color: #ccc;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    
`
export const UserPanel = styled.div`

    min-height: 100%;
    height: 1px;
    display: flex;


`
