import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../elements";

const Post = (props) => {

    const {user_name,singer,desc,youtube_url,title} = props;

  return (
    <React.Fragment>
      <Grid width="50vw" margin="50px auto 20px">

        <Text margin="20px 0px" size="36px" bold center>
          상세페이지
        </Text>

        <Grid is_flex>
          <Grid bg="yellow">
            <Image shape="rectangle" />
          </Grid>
          <Grid height="350px" border margin="0px 0px 0px 20px" padding="20px" overflow >
            <Text margin="10px 0 20px 0px">{singer}</Text>
            <Text margin="0 0 20px 0px">{desc}</Text>
            <Text margin="0 0 20px 0px">{youtube_url}</Text>
            <Text margin="0 0 20px 0px">버튼 호버</Text>
            <Text margin="0 0 20px 0px">버튼 호버</Text>
            <Text margin="0 0 20px 0px">{user_name}</Text>
          </Grid>
        </Grid>

        <Grid end_flex margin="10px 0px 0px 0px">
          <Button width="auto" padding="20px" margin="10px 30px 0px 0px">
            수정
          </Button>
          <Button width="auto" padding="20px" margin="10px 30px 0px 0px">
            삭제
          </Button>
          <Button width="auto" padding="20px" margin="10px 30px 0px 0px">
            취소
          </Button>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_name: "GC_EE",
  singer: "외국인",
  desc: "Good boy",
  youtube_url: "https://newsimg.sedaily.com/2017/05/17/1OFYJ2OVJT_1312312312312312312311.jpg",
  comment_cnt: 10,

};

export default Post;
