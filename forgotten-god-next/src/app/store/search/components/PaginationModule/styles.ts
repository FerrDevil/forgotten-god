import Link from "next/link"
import styled from "styled-components"

export const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 10px;
    align-self: center;
`

export const PaginationPageLink = styled(Link)`
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: #2e2e2e;
    border: none;
    border-radius: 5px;
    color: #ccc;
    cursor: pointer;
`

export const PaginationPageLoader = styled.div`
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: #2e2e2e;
    border: none;
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