import styled from "styled-components";
import Image from "next/image";

export const MediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: clamp(10px, 2vw, 24px);
    
`

export const MediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%; 
    margin-inline: auto;
    background-color: #2e2e2e;
    border-radius: 10px;
    
    overflow: hidden;
    position: relative;
    @media (max-width: 600px) {
        width: 100%;
    }
`

/* export const MediaFiller = styled.div`
    background-color: #ccc;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
` */


export const MediaImage = styled(Image).attrs(props => (
    {
        width: 200,
        height: 200,
        alt: "mediaImage"
    }
))`
    object-fit: cover;
    max-width: 100%;
    margin-inline: auto;
`

