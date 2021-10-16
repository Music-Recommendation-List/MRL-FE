import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/PostDetail/Post";
import CommentWrite from "../components/PostDetail/CommentWrite";
import CommentList from "../components/PostDetail/CommentList";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as commentActions } from "../redux/modules/comment";
const PostDetail = (props) => {
  const dispatch = useDispatch()
  const { id:postId }  = useParams();
  // console.log(postId)

  const post_list = useSelector((state) => state.post.list);
  const comment_list = useSelector((state) => state.comment.list);
    
  console.log(comment_list);

  // id를 이용해서 상세 값 받아오기
  let _post = post_list.find((p) =>  {
    // console.log(p.postId);
    // console.log(postId);
     return p.postId == postId})
    // console.log(_post)


  React.useEffect(() => {
    console.log('코멘트가져왔나?')
     dispatch(commentActions.getCommentDB(postId))
  }, [])


  return (
    <React.Fragment>
      <Post _post={_post} />  
      <CommentWrite />
      <CommentList comment_list={comment_list}/>
    </React.Fragment>
  );
};

export default PostDetail;