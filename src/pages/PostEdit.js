import React from "react";
import { Text, Input, Image, Grid, Button } from "../elements";
import Post from "../components/Post";

const PostEdit = () => {
  return (
    <React.Fragment>
        <p>수정페이지</p>
      <Grid padding="20px" margin="40px 0px">
        <Post />
        <Grid end_flex>
          <Button width="auto" padding="20px" margin="10px 30px 0px 30px">
            확인
          </Button>
          <Button width="auto" padding="20px" margin="10px 60px 0px 30px">
            취소
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostEdit;
