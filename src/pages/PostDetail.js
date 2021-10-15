import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/PostDetail/Post";
import CommentWrite from "../components/PostDetail/CommentWrite";
import CommentList from "../components/PostDetail/CommentList";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
const PostDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector((state) => state.post.list);
  // console.log(data);

  React.useEffect(() => {
    dispatch(postActions.getPostDetailDB(id));
  }, []);

  return (
    <React.Fragment>
      <Post data={data} />
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
