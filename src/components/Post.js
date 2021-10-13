import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../elements";

const Post = (props) => {

    const {singer,musicName,desc,lnik,musicGenre,feeling,season , user_name} = props;

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
          <Grid height="350px" border margin="0px 0px 0px 20px" padding="10px 15px" overflow >
            <Text margin="0 0 15px 0px" size="16px" bold right>작성자 : {user_name}</Text>
            <Text margin="10px 0 20px 0px" bold>가수이름 : {singer}</Text>
            <Text margin="10px 0 20px 0px" bold>곡 이름: {musicName}</Text>
            <Text margin="0 0 20px 0px" bold>곡 설명 : {desc}</Text>
            <Text margin="0 0 20px 0px" bold> 유튜브 링크 : {lnik}</Text>
            <Text margin="0 0 20px 0px" bold>{musicGenre},{feeling},{season}</Text>
            <Text margin="0 0 20px 0px"></Text>
            <Text margin="0 0 20px 0px"></Text>
            
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
  singer: "외국인",
  musicName:"보고싶다",
  desc: "missing you",
  lnik: "www.abc.com423432432423432432432432423",
  musicGenre:"발라드",
  feeling :"우울",
  season :"가을",
  user_name:"GCEE",
  id: 0,
};



export default Post;
