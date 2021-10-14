import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/PostDetail/Post";
import CommentWrite from "../components/PostDetail/CommentWrite";
import CommentList from "../components/PostDetail/CommentList";

const PostDetail = (props) => {

  // const comment_list = useSelector((state) => state.comment.list);

  return (
    <React.Fragment>
      <Post />
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
