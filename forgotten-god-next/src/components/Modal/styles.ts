"use client"
import styled from "styled-components"

export const ModalDialog = styled.dialog<{$isOpen: boolean}>`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    margin: 0;
    padding: 0;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    background-color: transparent;
    padding: 20px;

    opacity: ${props => props.$isOpen ? 1 : 0};
    pointer-events: ${props => props.$isOpen ? "all" : "none"};
    user-select: ${props => props.$isOpen ? "all" : "none"};

    &::backdrop{
      background-color: rgba(0 0 0 / 0.25);
    }
    &:focus{
      outline: 1px solid transparent;
    }
`
export const ModalDialogContent = styled.div`
    display: grid;
    overflow: auto;
    border-radius: 5px;
`