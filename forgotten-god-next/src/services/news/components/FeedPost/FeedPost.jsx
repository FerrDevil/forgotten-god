"use client"

import {
    FeedPostWrapper,
    FeedPostUpperPanel,
    FeedPostUser,
    FeedPostUserPicture,
    FeedPostUsername,
    FeedPostTime,
    FeedPostHeader,
    FeedPostText,
    FeedPostImage,
    FeedPostLowerPanel,
    FeedPostLikeButton,
  FeedPostCommentButton,
  FeedPostEmptyLikeImage,
  FeedPostFilledLikeImage,
  FeedPostLikeButtonCount,
  FeedPostCommentImage,
  FeedPostCommentButtonCount
} from "./feedPostStyles.js"
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer"
import { useState } from "react"

const FeedPost = ({postInfo}) => {
  const [isFavourite, setFavourite] = useState(true)

  return(
    <FeedPostWrapper >
      <FeedPostUpperPanel>
          <FeedPostUser href={`/devs/${postInfo.userId}`}>
            <FeedPostUserPicture src={postInfo.userPicture}/>
            <FeedPostUsername>{postInfo.username}</FeedPostUsername>
          </FeedPostUser>
          
          <FeedPostTime>{postInfo.timeline}</FeedPostTime>
      </FeedPostUpperPanel>
      <FeedPostHeader>{postInfo.header}</FeedPostHeader>
      {postInfo?.text && postInfo.text !== "" && <FeedPostText>{postInfo.text}</FeedPostText>}
      {postInfo.media.type === "image" && postInfo.media.image !== "" && <FeedPostImage src={postInfo.media.image}/>}
      {postInfo.media.type === "video" && postInfo.media.video !== "" && <div><VideoPlayer src={postInfo.media.video}/></div>}
      <FeedPostLowerPanel>
          <FeedPostLikeButton>
            {!isFavourite && <FeedPostEmptyLikeImage onClick={() => {setFavourite(prev => !prev)}} isFavourite={!isFavourite}/>}
            {isFavourite && <FeedPostFilledLikeImage onClick={() => {setFavourite(prev => !prev)}} isFavourite={isFavourite}/>}
            
            <FeedPostLikeButtonCount>{postInfo.likes}</FeedPostLikeButtonCount>
          </FeedPostLikeButton>
          <FeedPostCommentButton href={`/news/post/${postInfo.id}`}>
            <FeedPostCommentImage/>
            <FeedPostCommentButtonCount>{postInfo.comments.length}</FeedPostCommentButtonCount>
          </FeedPostCommentButton>
      </FeedPostLowerPanel>
  </FeedPostWrapper>
  )
}

export default FeedPost;