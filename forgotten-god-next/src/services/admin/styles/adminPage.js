import Link from "next/link";
import styled from "styled-components";

export const AdminWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    width: 100%;
    height: 100%;
    padding: 10px 30px;
`

export const AdminOptions = styled.div`
    display: flex;
    flex-direction: column;

    padding: 5px 20px;
    position: sticky;
    top: 0;
    max-height: 100%;
`

export const AdminOption = styled(Link)`
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

export const AdminOptionImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    
`
export const AdminOptionText = styled.div`
    font-size: 20px;
    color: #ccc;
    user-select: none;
    pointer-events: none;
    white-space: nowrap;
    
`
export const AdminPanel = styled.div`

    min-height: 100%;
    height: 1px;
    display: flex;


`
