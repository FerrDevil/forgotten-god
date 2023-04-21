import BasePage from "../../../pages/BasePage";
import { useEffect, useState } from "react";
import { PostWrapper, CommentSection } from "../styles/post";
import FeedPost from "../components/FeedPost/FeedPost";
import useTitle from "../../../hooks/useTitle";


const PostPage = () => {

    const [post, setPost] = useState(
        {
          id: 1,
          userId: 1,
          userPicture: "../../images/thumbnail.jpg",
          username: "CD Projekt",
          timeline: "21.02.2022",
          header: "Header",
          text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, itaque quod corrupti quis delectus, facilis consectetur saepe voluptatibus nemo quas sit unde? Odit obcaecati aperiam, autem beatae illo, sunt voluptates possimus aliquam iusto nesciunt blanditiis recusandae aspernatur dolorum error quod.",
          media: {
            type: "image",
            image: "../../images/thumbnail.jpg",
          },
          
          likes: 21,
          comments: [
            {
              id: 1,
              text: "da"
            },
            {
              id: 2,
              text: "da"
            }
          ]
        }
    )

    useTitle("Новости")
  
    
    return (
      <BasePage>
        <PostWrapper>
          <FeedPost postInfo={post}/>
          <CommentSection>

          </CommentSection>
        </PostWrapper>
      </BasePage>
    );
  };

export default PostPage;