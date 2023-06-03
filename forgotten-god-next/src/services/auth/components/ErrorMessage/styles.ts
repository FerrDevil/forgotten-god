import styled from "styled-components"
import { IErrorMessageWrapper } from "./types"

export const ErrorMessageWrapper = styled.span<IErrorMessageWrapper>`
    isolation: isolate;
    font-size: 20px;
    padding: 10px 20px;
    background-color: #780c0c;
    color: #ccc;
    position: fixed;
    bottom: 10px;
    opacity: ${props => props.$isVisible? 1: 0};
    left: 70px;
    &::after{
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        transition: width ${props => props.$isVisible ? props.$delay : 0}ms;
        width: ${props => props.$isVisible? 100: 0}%;
        height: 1px;
        background-color: #ccc;
    }
`