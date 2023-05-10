"use client"
import { useEffect, useState } from "react";
import {
  NewsNavigation,
  NewsNavigationOption,
  NewsMainContent,
  NewsFeedSidebar,
  NewsFeed,
  UserFavourites,
  UserFavouritesHeader,
  UserFavouritesWrapper,
  UserFavourite,
  UserFavouriteImage,
  UserFavouriteName,
  UserFavouritesExpand,
  UserFavouritesExpandImage,
  UserFavouritesExpandText,
  
} from "@/services/news/styles/news";
import FeedPost from "@/services/news/components/FeedPost/FeedPost";
import BasePageLayout from "@/components/Layout/BasePageLayout";

const NewsPage = () => {

  const [posts, setPosts] = useState(
    [
      {
        id: 1,
        userId: 1,
        userPicture: "images/thumbnail.jpg",
        username: "CD Projekt",
        timeline: "21.02.2022",
        header: "Header",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, itaque quod corrupti quis delectus, facilis consectetur saepe voluptatibus nemo quas sit unde? Odit obcaecati aperiam, autem beatae illo, sunt voluptates possimus aliquam iusto nesciunt blanditiis recusandae aspernatur dolorum error quod.",
        media: {
          type: "image",
          image: "images/thumbnail.jpg",
        },
        
        likes: 21,
        comments: [
          {
            text:"da"
          },
          {
            text:"da"
          }
        ]
      },
      {
        id: 2,
        userId: 1,
        userPicture: "images/thumbnail.jpg",
        username: "CD Projekt",
        timeline: "21.02.2022",
        header: "Header",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, itaque quod corrupti quis delectus, facilis consectetur saepe voluptatibus nemo quas sit unde? Odit obcaecati aperiam, autem beatae illo, sunt voluptates possimus aliquam iusto nesciunt blanditiis recusandae aspernatur dolorum error quod.",
        media: {
          type: "video",
          video: "videos/video.mkv",
        },
        
        likes: 21,
        comments: [
          {
            text:"da"
          },
          {
            text:"da"
          }
        ]
      }
    ]
  )
  return (
    <BasePageLayout title="Новости">
      <NewsNavigation>
        <NewsNavigationOption>Главная</NewsNavigationOption>
        <NewsNavigationOption>Интересное</NewsNavigationOption>
      </NewsNavigation>
      <NewsMainContent>
        <NewsFeedSidebar>
          <UserFavouritesComponent/>
        </NewsFeedSidebar>
        <NewsFeed>
          {posts.map(post => <FeedPost key={post.id} postInfo={post}/>)}
        </NewsFeed>
      </NewsMainContent>
    </BasePageLayout>
  );
};



const UserFavouritesComponent = () => {
  const userFavourites = [
    {
      id: 1,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk 111111",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
      id: 2,
      src: "images/thumbnail.jpg",
      name: "Cyberpunk",
    },
    {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
      {
        id: 2,
        src: "images/thumbnail.jpg",
        name: "Cyberpunk",
      },
  ];

  const [isFavouritesExpanded, setFavouritesExpanded] = useState(false);
  return (
    <UserFavourites>
      <UserFavouritesHeader>Подписки</UserFavouritesHeader>
      <UserFavouritesWrapper isExpanded={isFavouritesExpanded} >
        {userFavourites.map((favourite) => (
          <UserFavourite href={`/devs/${favourite.id}`} key={favourite.id}>
            <UserFavouriteImage src={favourite.src} alt={favourite.name}/>
            <UserFavouriteName>{favourite.name}</UserFavouriteName>
          </UserFavourite>
        ))}
      </UserFavouritesWrapper>
      {userFavourites.length > 8 && <UserFavouritesExpand onClick={() => {setFavouritesExpanded(prev => !prev)}}>
        <UserFavouritesExpandImage src={isFavouritesExpanded? "./images/expand_less.svg": "./images/expand_more.svg"} alt="expand_image"/>
        <UserFavouritesExpandText>{isFavouritesExpanded ? "Свернуть" : "Развернуть"}</UserFavouritesExpandText>
      </UserFavouritesExpand>}
    </UserFavourites>
  );
};

export default NewsPage;


