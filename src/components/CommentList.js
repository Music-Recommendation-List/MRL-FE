import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../elements";

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid width="50vw" margin="20px auto">
        <Grid>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { user_id, post_id, contents } = props;
  return (
    <Grid is_flex margin="0px 0px 10px 0px">

      <Grid width="auto" margin="0px 8px 0px 0px">
        <Text bold>{user_id}</Text>
      </Grid>

      <Grid border>
        <Text>{contents}</Text>
      </Grid>

      <Grid column_flex width="auto" margin="0px 0px 0px 15px">
        <Button width="65px" padding="8px">
          수정
        </Button>
        <Button width="65px" padding="8px">
          삭제
        </Button>
      </Grid>

    </Grid>
  );
};

CommentItem.defaultProps = {
  user_id: "abcd", 
  post_id: 1,
  contents: "안녕하세요옹!",
};
