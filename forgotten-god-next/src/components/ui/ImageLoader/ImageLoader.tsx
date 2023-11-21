"use client"
import Image from "next/image";
import { IImageLoader } from "./types";

import { useState } from "react";
import { ImageLoaderImage, ImageLoaderImagePlaceholder } from "./styles";

export const imageLoader = ({src}) => {
    return `${process.env.NEXT_PUBLIC_HOST_DOMAIN}/image/${src}`
}

export default function ImageLoader({src, width=0, height=0, sizes="100vw", alt="image", priority=false}: IImageLoader){
    const [isLoading, setLoading] = useState(true)
    const onLoadingComplete = () => {
        setLoading(false)
    }
    return (
        <>  
            {isLoading && <ImageLoaderImagePlaceholder $aspectRatio={`${width}/${height}`}/> }
            <ImageLoaderImage
                $isLoading={isLoading}
                loader={imageLoader}
                width={width}
                height={height}
                src={`${src}`}
                sizes={sizes}
                alt={alt}
                priority={priority}
                onLoad={onLoadingComplete}
            /> 
            
        </>
    )
}