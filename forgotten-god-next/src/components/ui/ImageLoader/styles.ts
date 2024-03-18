import Image from "next/image"
import styled from "styled-components"

export const ImageLoaderImageWrapper = styled.div`
    display: grid;
    position: relative;
    
`

export const SearchProductLoader = styled.div`
    aspect-ratio: 16/9;
    background-color: #2e2e2e;
    border-radius: 5px;
   
    
   
`

export const ImageLoaderImagePlaceholder = styled.div<{$width: number | undefined, $height: number | undefined}>`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: #2e2e2e;
    animation: pulse 2s infinite ease-in-out;
    ${props => props.$width && props.$height && `aspect-ratio: ${props.$width} / ${props.$height};`}

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

export const ImageLoaderImage = styled(Image)<{$isLoading: boolean}>`
    display: ${props => !props.$isLoading? "block": "none"};;
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    
    
`