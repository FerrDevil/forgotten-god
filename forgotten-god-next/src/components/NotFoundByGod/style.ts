import Image from "next/image"
import styled from "styled-components"


export const NotFoundByGodWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 3fr 2fr;
    padding: 70px;
    place-items: center;
    height: 100%;
    max-height: 100vh;
    gap: 20px;

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

export const NotFoundByGodTextMessage = styled.span`
    display: block;
    font-size: clamp(16px, 8px + 1vw, 20px);
    color: #ccc;
    text-align: center;
    opacity: 0;
    animation: text-move-in 1200ms 1200ms forwards;
    text-wrap: balance;
    
    @keyframes text-move-in {
        from{
            transform: translateY(-200%);
            opacity: 0;
        }
        
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
`

export const NotFoundByGodReturnButton = styled.button`
    position: absolute;
    right: 20%;
    bottom: 40%;
    padding: 10px 20px;
    border: 1px solid transparent;
    background-color: #222;
    display: block;
    border-radius: 20px;
    font-size: clamp(16px, 8px + 1vw, 20px);
    cursor: pointer;
    animation: button-move-in 3.6s;


    @keyframes button-move-in {
        from{
            transform: translateY(200%);
            opacity: 0;
        }
        33%{
            transform: translateY(200%);
            opacity: 0;
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
`
