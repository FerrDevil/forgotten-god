import styled from "styled-components"
import Link from "next/link"

import FavouriteEmpty from "../../public/favorite_empty.svg"
import FavouriteFilled from "../../public/favorite_filled.svg"
import Comment from "../../public/comment.svg"


export const FeedPostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 20px;
    border-radius: 10px;
    padding: 20px 30px;
    
`

export const FeedPostUpperPanel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const FeedPostUsername = styled.span`
    color: #ccc;
    font-size: 14px;
`

export const FeedPostUserPicture = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  filter: brightness(80%);
`

export const FeedPostUser = styled(Link)`
   display: flex;
   flex-direction: row;
   align-items: center;
   column-gap: 10px;
   &:hover ${FeedPostUsername}{
    color: #fff;
   }
   &:hover ${FeedPostUserPicture}{
    filter: none;
   }
`





export const FeedPostTime = styled.span`
    color: #545454;
    font-size: 14px;
`

export const FeedPostHeader = styled.h2`
    color: #ccc;
    font-size: 20px;
    font-weight: 400;
`

export const FeedPostText = styled.p`
    color: #ccc;
`

export const FeedPostImage = styled.img`
    width: 100%;
    object-fit: contain;
`


export const FeedPostLowerPanel = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 30px;
`

export const FeedPostLikeButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    
`

export const FeedPostEmptyLikeImage = styled(FavouriteEmpty)`
    fill: #aaa;
    width: 30px;
    height: 30px;
    object-fit: cover;
    cursor: pointer;
    &:hover{
        fill: #780c0c;
    }
`

export const FeedPostFilledLikeImage = styled(FavouriteFilled)`
    fill: #780c0c;
    width: 30px;
    height: 30px;
    object-fit: cover;
    animation: spring 0.5s forwards ease-in-out;
    cursor: pointer;
    &:hover{
        fill: #610000;
    }
    @keyframes spring {
        from{
            position: relative;
            top: 0px;
        }
        80%{
            top: -10px;
        }
        to{
            top: 0px;
        }
    }

`

export const FeedPostLikeButtonCount = styled.span`
    color: #ccc;

`

export const FeedPostCommentButton = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
`

export const FeedPostCommentButtonCount = styled.span`
    color: #ccc;

`

export const FeedPostCommentImage = styled(Comment)`
    fill: #aaa;
    width: 30px;
    height: 30px;
    object-fit: cover;
    cursor: pointer;
    &:hover{
        fill: #780c0c;
    }
`
