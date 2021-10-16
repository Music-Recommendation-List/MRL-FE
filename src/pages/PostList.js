import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import styled from "styled-components";
import { useEffect } from "react";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";
import Mainmenu from "../components/Mainpost/Mainmenu";
import MainPostList from "../components/Mainpost/MainPostList";
const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);
  React.useEffect(() => {
    console.log("실행됏나?");
    dispatch(postActions.getPostsDB());
  }, []);
  return (
    <React.Fragment>
      <Mainmenu />
      <Grid>
        {post_list.map((p, idx) => {
          return <Card key={p.postId} {...p} />;
        })}
      </Grid>
    </React.Fragment>
  );
};
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export default PostList;