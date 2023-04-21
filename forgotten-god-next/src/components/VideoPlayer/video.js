import styled from "styled-components"
import PlaySVG from "../../public/play.svg"
import PauseSVG from "../../public/pause.svg"
import RestartSVG from "../../public/restart.svg"
import VolumeUpSVG from "../../public/volume-up.svg"
import VolumeOffSVG from "../../public/volume-off.svg"

export const Video = styled.video`
    width: 100%;
    object-fit: cover;
    cursor: pointer;
`

export const VideoControls = styled.div`
    position: absolute;
    z-index: 2;
    bottom: 0;
    width: 100%;
    opacity: ${props => props.isPaused? 1 : 0};
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    padding: clamp(5px, 3px + 2vw, 10px) clamp(10px, 5px + 2vw, 20px);
    
    background-color: rgba(0 0 0 / 0.15);
    transition: opacity 0.3s ease-in-out;
`

export const VideoContainer = styled.div`
    max-width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    margin-inline: auto;
    &:hover ${VideoControls}{
        opacity: 1;
    }
`

export const VideoPlayButton = styled(PlaySVG)`
   width: clamp(20px, 10px + 2vw, 30px);
   height: clamp(20px, 10px + 2vw, 30px);
   fill: #ccc;
   object-fit: contain;
   border-radius: 4px;
   cursor: pointer;
`

export const VideoPauseButton = styled(PauseSVG)`
   width: clamp(20px, 10px + 2vw, 30px);
   height: clamp(20px, 10px + 2vw, 30px);
   fill: #ccc;
   object-fit: contain;
   border-radius: 4px;
   cursor: pointer;
`

export const VideoRestartButton = styled(RestartSVG)`
   width: clamp(20px, 10px + 2vw, 30px);
   height: clamp(20px, 10px + 2vw, 30px);
   fill: #ccc;
   object-fit: contain;
   border-radius: 4px;
   cursor: pointer;
`

export const VideoVolumeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    column-gap: 10px;
    overflow-x: hidden;
`

export const VideoVolumeUpButton = styled(VolumeUpSVG)`
   width: clamp(20px, 10px + 2vw, 30px);
   height: clamp(20px, 10px + 2vw, 30px);
   object-fit: cover;
   cursor: pointer;
   fill: #ccc;
   margin: 5px;
`
export const VideoVolumeOffButton = styled(VolumeOffSVG)`
   width: clamp(20px, 10px + 2vw, 30px);
   height: clamp(20px, 10px + 2vw, 30px);
   object-fit: cover;
   fill: #ccc;
   cursor: pointer;
   margin: 5px;
`

export const VideoVolumeRangeWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 0;
    transition: width 0.2s ease-in-out;

    ${VideoVolumeWrapper}:hover &{
        width: 100px;
    }

    &::before{
        content: '';
        pointer-events: none;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        border-radius: 2px;
        background: #c52929;
        width: ${props => props.volume}%;
    }
`

export const VideoVolumeRange = styled.input`
    background-color: #4e4e4e;
    border-radius: 2px;
    width: 100px;
    height: 3px;
    appearance: none;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.6);
    

    &::-webkit-slider-runnable-track{
        cursor: pointer;
        width: 100%;
        height: 3px;
        box-shadow: none;
        border: none;
        
    }
    &::-webkit-slider-thumb{
        background-color: #c52929;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        appearance: none;
        margin-top: -6px;
    }

    
    
`

export const VideoTimelineRangeWrapper = styled.div`
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 2px;
    width: 98%;
    transform: translate(-50%, 0);
    display: flex;
    flex-direction: row;
    align-items: center;

    &::before{
        content: '';
        pointer-events: none;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 5px;
        border-radius: 2px;
        background: #780c0c;
        width: ${props => props.time?.currentTime / props.time?.duration * 100}%;
    }
`

export const VideoTimelineRange = styled.input`
    background-color: #4e4e4e;
    border-radius: 2px;
    width: 100%;
    height: 5px;
    appearance: none;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.6);

    &::-webkit-slider-runnable-track{
        cursor: pointer;
        width: 100%;
        height: 5px;
        box-shadow: none;
        border: none;
        
    }
    &::-webkit-slider-thumb{
        background-color: #780c0c;
        width: 15px;
        height: 5px;
        appearance: none;
        
        
        transition: height 0.1s linear, margin 0.1s linear, border-radius 0.1s linear;
    }
    &:hover::-webkit-slider-thumb{
        height: 15px;
        border-radius: 50%;
        margin-top: -5px;
    }
    
`

export const VideoTimer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 4px;
`

export const VideoTimerText = styled.span`
    font-size: clamp(6px, 3px + 2vw, 12px);
    color: #ccc;
    
`

