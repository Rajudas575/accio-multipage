import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === Number(id))
  );

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>Details Page</h1>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>
        <strong>User Id:</strong> {post.userId}
      </p>
      <p>
        <strong>Title:</strong> {post.title}
      </p>
      <p>
        <strong>Body:</strong> {post.body}
      </p>
    </div>
  );
};

export default DetailPage;
