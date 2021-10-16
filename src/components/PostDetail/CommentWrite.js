import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Text, Input, Image, Grid,  Upload } from "../../elements";
import { actionCreators as commentAction} from "../../redux/modules/comment";
import Button from '@mui/material/Button';

const CommentWrite = (props) => {

  

  const id = useParams().id
  console.log(id)
  


  const dispatch = useDispatch();
  
  // usestate
  const [comment, setComment] = React.useState("");
  console.log(comment)
  // 코멘트 삽입
  const changeComment = (e) => {
   setComment(e.target.value)
  };
 

  const save = () => {
      dispatch(commentAction.addCommentDB(id,comment))
  };

  return (
    <React.Fragment>
      <Grid width="50vw" margin="0px auto">
        <Text size="16px" margin="10px 0px">
          댓글 (총 0개)
        </Text>
        <Grid is_flex>
          <Input
          placeholder="댓글을 입력해주세요:)"
          value={comment}
          _onChange={changeComment}
          >
          </Input>

          <Button 
          width="65px" 
          padding="18px"
           margin="0px 0px 0px 15px"
           onClick={save}>
            작성
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
