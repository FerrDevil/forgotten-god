"use client"

import { useEffect, useRef } from "react"
import { SliderCanvas, SliderCanvasVideo } from "./mediaStyles"

export default function MediaSliderCanvas({videoLink}){
    const canvas = useRef(null)
    const video = useRef(null)
    useEffect(() => {
        const context = canvas.current.getContext("2d")
        context.drawImage(video.current, 0, 0);
    }, [videoLink])

    return(
        <>
            <SliderCanvas ref={canvas}/>
            <SliderCanvasVideo ref={video} src={videoLink}/>
        </>
        
    )
}