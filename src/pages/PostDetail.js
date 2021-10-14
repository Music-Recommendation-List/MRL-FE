import React from "react";


import Post from "../components/PostDetail/Post";
import CommentWrite from "../components/PostDetail/CommentWrite";
import CommentList from "../components/PostDetail/CommentList";

const PostDetail = (props) => {




  return (
    <React.Fragment>
      <Post />
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
