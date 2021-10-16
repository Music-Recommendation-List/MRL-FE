import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../../redux/modules/comment";

import { Text, Input, Image, Grid, Upload } from "../../elements";
import Button from '@mui/material/Button';
const CommentItem = (props) => {

  const dispatch = useDispatch();
  const { commentId, contents, id, postId, userId } = props;

  const [thisState, setThisState] = React.useState('ready');

  const handleClick = (str, e) => {
    setThisState(str)
  }

  const submitUpdate = () => {
    console.log('update');
  }

  const submitDelete = () => {
      dispatch(commentActions.deletedCommentDB(commentId))
  }

  const renderSwitch = (state) => {
    switch (state) {
      default:
      case 'ready':
        return (
          <Grid column_flex width="auto" margin="0px 0px 0px 15px">
            <Button width="65px" padding="8px" onClick={(e) => handleClick('delete', e)}>
              삭제
            </Button>
          </Grid>
        )
      case 'delete':
        return (
          <Grid column_flex width="auto" margin="0px 0px 0px 5px">
            <Button 
            width="50px"
             padding="5px" 
             onClick={submitDelete}
             
             >
              확인
            </Button>
            <Button width="50px" padding="5px" onClick={(e) => handleClick('ready', e)}>
              취소
            </Button>
          </Grid>
        )
    }
  }


  return (
    <React.Fragment>
      <Grid is_flex margin="0px 0px 20px 0px" >
        <Grid width="auto" margin="0px 8px 0px 0px">
          <Text bold>{userId}</Text>
        </Grid>
        <Grid border>
          <Text>{contents}</Text>
        </Grid>
        {renderSwitch(thisState)}
      </Grid>
    </React.Fragment>
  );
};




export default CommentItem;