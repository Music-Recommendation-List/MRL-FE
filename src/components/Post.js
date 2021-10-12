import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid height="45vh" margin="30px 0px 0px 0px">
        <Grid is_flex>
          <Grid bg="yellow">
            <Image />
          </Grid>
          <Grid border margin="0px 0px 0px 20px">
            <Text margin="0px ">노래이름가수</Text>
            <Text margin="0px">노래설명</Text>
            <Text margin="0px">유튜브링크</Text>
            <Text margin="0px">버튼 호버</Text>
            <Text margin="0px">버튼 호버</Text>
            <Text margin="0px">작성자</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
