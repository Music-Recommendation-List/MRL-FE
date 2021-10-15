import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../../elements";

const CommentItem = (props) => {
  const { user_id, post_id, contents } = props;

  const [thisState, setThisState] = React.useState('ready');

  const handleClick = (str, e) => {
    setThisState(str)
  }

  const submitUpdate = () => {
    console.log('update');
  }

  const submitDelete = () => {
    console.log('delete');
  }

  const renderSwitch = (state) => {
    switch (state) {
      default:
      case 'ready':
        return (
          <Grid column_flex width="auto" margin="0px 0px 0px 15px">
            <Button width="65px" padding="8px" _onClick={(e) => handleClick('update', e)}>
              수정
            </Button>
            <Button width="65px" padding="8px" _onClick={(e) => handleClick('delete', e)}>
              삭제
            </Button>
          </Grid>
        )
      case 'update':
        return (
          <Grid column_flex width="auto" margin="0px 0px 0px 15px">
            <Button width="65px" padding="8px" _onClick={submitUpdate}>
              수정 확인
            </Button>
            <Button width="65px" padding="8px" _onClick={(e) => handleClick('ready', e)}>
              수정 취소
            </Button>
          </Grid>
        )
      case 'delete':
        return (
          <Grid column_flex width="auto" margin="0px 0px 0px 15px">
            <Button width="65px" padding="8px" _onClick={submitDelete}>
              삭제 확인
            </Button>
            <Button width="65px" padding="8px" _onClick={(e) => handleClick('ready', e)}>
              삭제 취소
            </Button>
          </Grid>
        )
    }
  }


  return (
    <React.Fragment>
      <h1>{thisState}</h1>
      <Grid is_flex margin="0px 0px 10px 0px">
        <Grid width="auto" margin="0px 8px 0px 0px">
          <Text bold>{user_id}</Text>
        </Grid>
        <Grid border>
          <Text>{contents}</Text>
        </Grid>
        {renderSwitch(thisState)}
      </Grid>
    </React.Fragment>
  );
};

CommentItem.defaultProps = {
  user_id: "abcd",
  post_id: 1,
  contents: "안녕하세요옹!",
};


export default CommentItem;