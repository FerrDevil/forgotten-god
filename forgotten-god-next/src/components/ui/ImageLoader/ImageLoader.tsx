"use client"
import { TImageLoaderProps } from "./types";

import { useState } from "react";
import { ImageLoaderImage, ImageLoaderImagePlaceholder } from "./styles";


export default function ImageLoader({src, width, height, fill=undefined, sizes="100vw", alt="image", priority=false}: TImageLoaderProps){
    const [isLoading, setLoading] = useState(true)
    const onLoadingComplete = () => {
        setLoading(false)
    }
    return (
        <>  
            {isLoading && <ImageLoaderImagePlaceholder $width={width} $height={height}/> }
            {
                !!(width && height) ?
                <ImageLoaderImage
                    $isLoading={isLoading}
                    width={width}
                    height={height}
                    src={`${src}`}
                    sizes={sizes}
                    alt={alt}
                    priority={priority}
                    onLoad={onLoadingComplete}
                /> 
                :
                
                fill && <ImageLoaderImage
                    $isLoading={isLoading}
                    
                    fill={fill}
                    src={`${src}`}
                    sizes={sizes}
                    alt={alt}
                    priority={priority}
                    onLoad={onLoadingComplete}
                    
                /> 
            }
            
        </>
    )
}