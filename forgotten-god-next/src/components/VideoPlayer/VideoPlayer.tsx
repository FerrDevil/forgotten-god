"use client"
import useDeferedEffect from "@/hooks/useDeferedEffect"
import  {VideoContainer, Video, VideoControls, VideoPlayButton, VideoPauseButton, VideoRestartButton, VideoVolumeWrapper, VideoVolumeUpButton, VideoVolumeOffButton, VideoVolumeRangeWrapper, VideoVolumeRange, VideoTimelineRangeWrapper, VideoTimelineRange, VideoTimer, VideoTimerText, VideoTimelineRangeProgress, VideoControlsSideContainer, VideoFullscreenButton, VideoFullscreenEnterSVG, VideoFullscreenExitSVG} from "./styles"
import { useState, memo, useRef, useEffect } from "react"
import useLocalStorage from "@/hooks/useLocalStorage"
import type { TStoredVideoOptions, TTime, TVideoPlayerProps } from "./types"



const VideoPlayer = ({src, autoPlay=true} : TVideoPlayerProps) => {
    const video = useRef(null)
    const videoContainer = useRef(null)

    const [storedVideoOptions, setStoredVideoOptions] = useLocalStorage<TStoredVideoOptions>("videoSavedOptions", {
        volume: 20,
        isMuted: true,
    })
    const [videoStatus, setVideoStatus] = useState({
        isPlaying: true,
        isFullScreen: false,
    })

    

    const [currentTime, setCurrentTime] = useState(0)
    
    const time: TTime = {
        currentTime: Math.floor(video.current?.currentTime) || 0,
        duration: Math.floor(video.current?.duration) || 0
    }
    

    
    const switchVideoVolume = () => {  
        setStoredVideoOptions(prev => ({...prev, isMuted : !prev.isMuted }))
    }

    const onChangeVideoVolume = (event : React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(event.target.value)

        setStoredVideoOptions(prev => ({...prev,
            volume : newVolume === 0 ? 20: newVolume,
            isMuted: newVolume === 0 
        }))
    }

    const onChangeVideoTime = (event) => {
        if (time.currentTime === time.duration){
            setVideoStatus(prev => ({...prev, isPlaying : true}))
        }
        const newValue = Math.floor(parseInt(event.target.value))
        video.current.currentTime = newValue
        setCurrentTime(newValue)
    }



    const onVideoTimeUpdate = (event) => {
        
        if (parseInt(event.target.currentTime) === currentTime) return
        setCurrentTime(parseInt(event.target.currentTime))
    }


    useDeferedEffect(() => {
        videoStatus.isPlaying ? video.current.play() : video.current.pause()
    }, [videoStatus.isPlaying])

    useEffect(() => {
        video.current.volume = !storedVideoOptions.isMuted? storedVideoOptions.volume / 100 :  0
    }, [storedVideoOptions.volume, storedVideoOptions.isMuted])

    useEffect(() => {
        videoStatus.isFullScreen ? 
            videoContainer.current.requestFullscreen({navigationUI: "hide"}) :
            document.fullscreenElement && document.exitFullscreen() 
    }, [videoStatus.isFullScreen])


    return (
        <VideoContainer ref={videoContainer}>
            <Video
                ref={video}
                
                onPlay={() => { setVideoStatus(prev => ({...prev, isPlaying : true}))}}
                onEnded={() => { setVideoStatus(prev => ({...prev, isPlaying : false}))}}
                onTimeUpdate={onVideoTimeUpdate}
                onClick={() => { setVideoStatus(prev => ({...prev, isPlaying : !prev.isPlaying}))}}
                autoPlay={autoPlay} 
                playsInline 
                src={src}
                muted={storedVideoOptions.isMuted}
            />
            <VideoControls $isPaused={!videoStatus.isPlaying}>
                <VideoControlsSideContainer>
                    <VideoTimelineRangeWrapper >
                        <VideoTimelineRange onChange={onChangeVideoTime} type='range' min={0} max={time.duration} step={"any"} value={time.currentTime}/>
                        <VideoTimelineRangeProgress $time={time} />
                    </VideoTimelineRangeWrapper>
                    {time.currentTime === time.duration ?
                        <VideoRestartButton onClick={() => { setVideoStatus(prev => ({...prev, isPlaying : true}))}}/> :
                        videoStatus.isPlaying ?
                            <VideoPauseButton onClick={() => { setVideoStatus(prev => ({...prev, isPlaying : false}))}}/> :
                            <VideoPlayButton onClick={() => { setVideoStatus(prev => ({...prev, isPlaying : true}))}}/>
                    }
                    <VideoVolumeWrapper>
                        { storedVideoOptions.isMuted ?
                            <VideoVolumeOffButton onClick={switchVideoVolume}/> :
                            <VideoVolumeUpButton onClick={switchVideoVolume}/>
                        }
                        
                        <VideoVolumeRangeWrapper $volume={!storedVideoOptions.isMuted ? storedVideoOptions.volume : 0}>
                            <VideoVolumeRange onChange={onChangeVideoVolume}  value={ !storedVideoOptions.isMuted ? storedVideoOptions.volume : 0}/>
                        </VideoVolumeRangeWrapper>
                    </VideoVolumeWrapper>
                    <VideoTimerWrapper time={time}/>
                </VideoControlsSideContainer>
                <VideoControlsSideContainer>
                    <VideoFullscreenButton onClick={() => { setVideoStatus(prev => ({...prev, isFullScreen : !prev.isFullScreen}))}}>
                        {
                            videoStatus.isFullScreen ? 
                            <VideoFullscreenExitSVG/> :
                            <VideoFullscreenEnterSVG/>
                        }
                        
                    </VideoFullscreenButton>
                </VideoControlsSideContainer>
                
            </VideoControls>
        </VideoContainer>
    )
}

const VideoTimerWrapper = ({time}) => {
    const leadingZeroFormatter = Intl.NumberFormat(undefined, {minimumIntegerDigits: 2})
    const currentTime = time.currentTime
    const duration = time.duration
    const currentTimeHours = Math.floor(currentTime / 3600 )
    const currentTimeMinutes = Math.floor(currentTime % 3600 / 60)
    const currentTimeSeconds = Math.floor(currentTime % 3600 % 60)
    const durationTimeHours = Math.floor(duration / 3600 )
    const durationTimeMinutes = Math.floor(duration % 3600 / 60)
    const durationTimeSeconds = Math.floor(duration % 3600 % 60)
    
    return(
        <VideoTimer>
            <VideoTimerText>{`${currentTimeHours > 0 ? currentTimeHours + ':' : ''}${leadingZeroFormatter.format(currentTimeMinutes)}:${leadingZeroFormatter.format(currentTimeSeconds)}`}</VideoTimerText>
            <VideoTimerText>/</VideoTimerText>
            <VideoTimerText>{`${durationTimeHours > 0 ? durationTimeHours + ':' : ''}${leadingZeroFormatter.format(durationTimeMinutes)}:${leadingZeroFormatter.format(durationTimeSeconds)}`}</VideoTimerText>
        </VideoTimer>
    )
}

export default memo(VideoPlayer)