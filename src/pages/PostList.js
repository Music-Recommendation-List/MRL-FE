import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import {
  Text,
  Input,
  Image,
  Grid,
  Button,
  Upload,
  DropDown,
} from "../elements";
import { useEffect } from "react";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/modules/post";
import Mainmenu from "../components/Mainpost/Mainmenu";
import MainPostList from "../components/Mainpost/MainPostList";

const PostList = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  // console.log(post_list);

  React.useEffect(() => {
    dispatch(postActions.getPostsDB());
  }, []);

  return (
    <React.Fragment>
      <Mainmenu />
      <Grid flex wrap width="auto" margin=" 0px 0px 0px 200px ">
        {post_list.map((p, idx) => {
          return <Card key={p._id} {...p} />;
        })}
      </Grid>
      <Button
        is_float
        text="+"
        _onClick={() => {
          history.push("/write");
        }}
      ></Button>
    </React.Fragment>
  );
};

export default PostList;
