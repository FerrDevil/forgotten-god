import Link from "next/link";
import styled from "styled-components";

export const SupportWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 20px 0;
    width: 50%;
`

export const SupportTextInput = styled.input`
    font-size: 16px;
    color: #ccc;
    padding: 5px 10px;
    width: 300px;
    background-color: #242424;
    border: 1px solid transparent;
    border-radius: 10px;
    &:focus{
        outline: none;
    }
`

export const SupportAnswers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 1px;
`

export const SupportAnswer = styled(Link)`

    width: 100%;
    font-size: 16px;
    color: #ccc;
    background-color: #242424;
    padding: 10px 10px;
    transition: background-color 0.3s ease-in-out;
    &:hover, &:focus{
        background-color: #343434;
        outline: none;
    }
`

export const SupportContactUs = styled(Link)`
    width: 100%;
    font-size: 16px;
    color: #ccc;
    background-color: #242424;
    padding: 10px 10px;
    transition: background-color 0.3s ease-in-out;
    &:hover, &:focus{
        background-color: #343434;
        outline: none;
    }
`