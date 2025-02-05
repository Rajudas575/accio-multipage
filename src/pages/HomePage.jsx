import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Multi-Product App</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error fetching posts</p>}
      {status === "succeeded" && (
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <img
                src={`https://picsum.photos/200?random=${post.id}`}
                alt="Post"
              />
              <h2>{post.title.slice(0, 20)}...</h2>
              <p>{post.body.slice(0, 50)}...</p>
              <Link to={`/item/${post.id}`}>Read More</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
