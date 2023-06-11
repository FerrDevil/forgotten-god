import { PostWrapper, CommentSection } from "@/services/news/styles/post";
import FeedPost from "@/services/news/components/FeedPost/FeedPost";

async function getPost(){
    const post = {
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
    return post
}

const PostPage = async () => {

  const post = await getPost()

    return (
      <>
        <PostWrapper>
          <FeedPost postInfo={post}/>
          <CommentSection>

          </CommentSection>
        </PostWrapper>
      </>
    );
  };

export default PostPage;