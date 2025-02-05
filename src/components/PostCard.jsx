import { Link } from "react-router-dom";

const PostCard = ({ post }) => (
  <div className="post-card">
    <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
    <h3>{post.title.slice(0, 20)}...</h3>
    <p>{post.body.slice(0, 50)}...</p>
    <Link to={`/item/${post.id}`}>Read More</Link>
  </div>
);

export default PostCard;
