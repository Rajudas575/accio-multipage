import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.find((p) => p.id === parseInt(id))
  );

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="post-details">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
