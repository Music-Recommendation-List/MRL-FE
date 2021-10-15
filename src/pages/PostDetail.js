import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/PostDetail/Post";
import CommentWrite from "../components/PostDetail/CommentWrite";
import CommentList from "../components/PostDetail/CommentList";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
const PostDetail = (props) => {
  const {id } = useParams();

  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  // id를 이용해서 상세 값 받아오기
  let _post = post_list.find((p) => p.id === id)
  console.log(_post)

  return (
    <React.Fragment>
      <Post _post={_post} />
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
