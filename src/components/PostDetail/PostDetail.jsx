import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetail = () => {
    const post=useLoaderData();
    const {postId}=useParams();
    console.log(postId)
    const {id,title,body}=post;
    const navigate = useNavigate();
  
    const postStyle={
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'20px'
    }
  const handleGoBack =() =>{
    navigate(-1)
  }
    return (
        <div style={postStyle}>

            <h3>Post ID :{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>

            
        </div>
    );
};

export default PostDetail;