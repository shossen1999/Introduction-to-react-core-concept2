import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
  const {id,title} = post;
const navigate=useNavigate();
  const postStyle={
    border:'2px solid yellow',
    padding:'10px',
    borderRadius:'20px'
}

const handlePostDetail =()=>{
  navigate(`/post/${id}`)
}
    return (
        <div style={postStyle}>
            <h2>ID :{id}</h2>
            <p>Post Title :{title}</p>
            <Link to={`/post/${id}`}>Show Post Detail</Link>
            <Link to={`/post/${id}`}>
             <button>Click Post</button>
            </Link>
            <button onClick={handlePostDetail}>Click Post Detail</button>
        </div>
    );
};

export default Post;