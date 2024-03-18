"use client"
import Image from "next/image"
import styled from "styled-components"


export const VNWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 3fr 2fr;
    padding: 70px;
    place-items: center;
    height: 100%;
    max-height: 100vh;
    gap: 20px;
    width: 100%;
    cursor: pointer;
    position: relative;

`

export const GodImageWrapper = styled.div`
    display: block;
    min-width: 200px;
    animation: move-in 1.2s ease-in-out;
    @keyframes move-in {
        from{
            transform: translateY(20%);
            opacity: 0;
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const GodImage = styled(Image).attrs({
    src: "/images/logo.png",
    alt: "God Image",
    sizes: "100vw",
    width: 0,
    height: 0,
    priority: true,
})`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    
`


export const VNTextMessage = styled.span`
    display: inline;
    font-size: clamp(16px, 8px + 1vw, 20px);
    text-align: center;
    text-wrap: balance;
    background-color: transparent;
    border: none;

`

export const VNSkipButton = styled.button`
    display: inline;
    font-size: clamp(16px, 8px + 1vw, 20px);
    text-align: center;
    text-wrap: balance;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;

    cursor: pointer;

`