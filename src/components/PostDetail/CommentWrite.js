import React from "react";

import { Text, Input, Image, Grid, Button, Upload } from "../../elements";

const CommentWrite = (props) => {

  const [comment, setComment] = React.useState();

  const save = () =>{
      dispatchEvent()
  }

  return (
    <React.Fragment>
      <Grid width="50vw" margin="0px auto">

        <Text size="16px" margin="10px 0px">
          댓글 (총 0개)
        </Text>
        <Grid is_flex>
          <Input placeholder="댓글 내용을 입력해주세요 :)" />
          <Button width="65px" 
          padding="18px" 
          margin="0px 0px 0px 15px"
          
          >
            작성
          </Button>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
