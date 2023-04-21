import { MediaWrapper, MediaContainer, MediaImage, MediaFiller} from "./media"
import { useState} from "react"
import VideoPlayer from "../../../../components/VideoPlayer/VideoPlayer.jsx"
import Slider from "./Slider.jsx"

const Media = ({mediaElements=[]}) => {

    const [sliderParams, setSliderParams] = useState({
        pageIndex: 0,
        selectedMediaIndex: 0
    })

    return(
        <MediaWrapper>
            <MediaContainer>

                {mediaElements[sliderParams.selectedMediaIndex]?.type === 'video' ?
                    <VideoPlayer src="../../videos/video.mkv"/> :
                    <MediaImage src={`../../${mediaElements[sliderParams.selectedMediaIndex]?.src}`}/>
                }
            </MediaContainer>
            <Slider sliderState={[sliderParams, setSliderParams]} elements={mediaElements}/>
        </MediaWrapper>
    )
}




export default Media