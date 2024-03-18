export type TVideoPlayerProps = {
    src: string,
    autoPlay?: boolean
}

export type TStoredVideoOptions = {
    volume: number,
    isMuted: boolean
}

export type TTime = {
    currentTime: number
    duration: number
}