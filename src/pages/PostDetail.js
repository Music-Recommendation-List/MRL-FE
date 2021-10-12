import React from "react";
import { Text, Input, Image, Grid, Button } from "../elements";

import Post from "../components/Post"

const PostDetail = (props) => {
  return (
    <React.Fragment>
        <p>상세페이지</p>
      <Grid padding="20px" margin="40px 0px">
          
        <Post/>
        <Grid end_flex>
          <Button width="auto" padding="20px" margin="10px 30px 0px 0px">
            수정
          </Button>
          <Button width="auto" padding="20px" margin="10px 30px 0px 30px">
            삭제
          </Button>
          <Button width="auto" padding="20px" margin="10px 60px 0px 30px">
            취소
          </Button>
        </Grid>

        <Grid>
          <Text size="16px" margin="10px 0px">
            댓글 (총 0개)
          </Text>
        </Grid>
        <Grid is_flex>
          <Input />
          <Button width="60px" padding="10px" maring="0px 30px">
            댓글등록
          </Button>
        </Grid>

        <Grid is_flex>
          <Grid is_flex width="auto">
            <Text bold>id</Text>
          </Grid>
          <Grid is_flex margin="0px 0px">
            <Input></Input>
            <Grid column_flex width="auto">
              <Button width="60px" padding="5px" maring="0px 30px">
                수정
              </Button>
              <Button width="60px" padding="5px" maring="0px 30px">
                삭제
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

export default PostDetail;
