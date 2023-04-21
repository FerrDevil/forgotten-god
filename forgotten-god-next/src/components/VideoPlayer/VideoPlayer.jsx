import  {VideoContainer, Video, VideoControls, VideoPlayButton, VideoPauseButton, VideoRestartButton, VideoVolumeWrapper, VideoVolumeUpButton, VideoVolumeOffButton, VideoVolumeRangeWrapper, VideoVolumeRange, VideoTimelineRangeWrapper, VideoTimelineRange, VideoTimer, VideoTimerText} from "./video.js"
import { useState, memo, useRef, useEffect } from "react"



const VideoPlayer = ({src}) => {
    const video = useRef(null)
    const [videoStatus, setVideoStatus] = useState({
        isPlaying: true,
        volume: 0,
        previousVolume: 100
    })

    const [currentTime, setCurrentTime] = useState(0)
    
    const time = {
        currentTime: Math.floor(video.current?.currentTime) || 0,
        duration: Math.floor(video.current?.duration) || 1
    }
    

    const switchVideoStatus = () => {
        videoStatus.isPlaying ? video.current.pause() : video.current.play()
        setVideoStatus(prev => ({...prev, isPlaying : !prev.isPlaying}))
    }

    const switchVideoVolume = () => {  
        video.volume = videoStatus.volume === 0 ? Math.round(videoStatus.previousVolume/100, 1): 0
        setVideoStatus(prev => ({...prev, volume : prev.volume === 0 ? videoStatus.previousVolume: 0}))
    }

    const onChangeVideoVolume = (event) => {
       
        const newValue = parseInt(event.target.value)
        video.volume = Math.round(newValue / 100, 1)
        setVideoStatus(prev => ({...prev,
            volume : newValue,
            previousVolume: newValue === 0? prev.previousVolume: newValue
        }))
    }

    const onChangeVideoTime = (event) => {
        if (time.currentTime === time.duration){
            switchVideoStatus()
        }
        const newValue = Math.floor(parseInt(event.target.value))
        video.current.currentTime = newValue
        setCurrentTime(newValue)
    }


    const onVideoTimeUpdate = (event) => {
        
        if (parseInt(event.target.currentTime) === currentTime) return
        setCurrentTime(parseInt(event.target.currentTime))
    }
    
    

    return (
        <VideoContainer>
            <Video ref={video} onEnded={switchVideoStatus} onTimeUpdate={onVideoTimeUpdate}  onClick={switchVideoStatus}  autoPlay={true} muted playsInline src={src}/>
            <VideoControls isPaused={!videoStatus.isPlaying}>
                <VideoTimelineRangeWrapper time={time}>
                    <VideoTimelineRange onChange={onChangeVideoTime} type='range' min={0} max={time.duration} step={"any"} value={time.currentTime}/>
                </VideoTimelineRangeWrapper>
                {time.currentTime === time.duration ?
                    <VideoRestartButton onClick={switchVideoStatus}/> :
                    videoStatus.isPlaying ?
                        <VideoPauseButton onClick={switchVideoStatus}/> :
                        <VideoPlayButton onClick={switchVideoStatus}/>
                }
                <VideoVolumeWrapper>
                    { videoStatus.volume === 0 ?
                        <VideoVolumeOffButton onClick={switchVideoVolume}/> :
                        <VideoVolumeUpButton onClick={switchVideoVolume}/>
                    }
                    
                    <VideoVolumeRangeWrapper volume={videoStatus.volume}>
                        <VideoVolumeRange onChange={onChangeVideoVolume} type='range' min={0} max={100} step={"any"} value={videoStatus.volume}/>
                    </VideoVolumeRangeWrapper>
                </VideoVolumeWrapper>
                <VideoTimerWrapper time={time}/>
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

export default VideoPlayer