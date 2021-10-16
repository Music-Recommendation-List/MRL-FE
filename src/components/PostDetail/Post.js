import React from "react";
import { Text, Input, Image, Grid, Upload } from "../../elements";
import { history } from "../../redux/configureStore";
import { actionCreators as postActions } from "../../redux/modules/post";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Post = (props) => {
  const dispatch = useDispatch();
  console.log("오류냐?", props);
  const {
    category1,
    category2,
    category3,
    desc,
    singer,
    url,
    userId,
    songName,
    postId,
  } = props._post;

  const delete_post = () => {
    dispatch(postActions.deletePostlDB(postId));
  };

  return (
    <React.Fragment>
    <Grid width="50vw" margin=" auto ">
      <Text margin="0px" size="36px" bold center></Text>
      <Grid is_flex>
        <Grid>
          <iframe
            border-radius="5px"
            width="100%"
            height="360px"
            src={`https://www.youtube.com/embed/${
              props._post.url.split('=')[1]
            }`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid
          bg="#2D2D2D"
          width="450px"
          height="360px"
          border
          margin="0 0 0 20px"
          padding="10px 15px"
          overflow
        >
          <Text color="white" margin="0 0 15px 0px" size="16px" bold right>
            작성자 : {userId}{' '}
          </Text>
          <Text color="white" margin="10px 0 20px 0px" bold>
            가수이름 : {singer}{' '}
          </Text>
          <Text color="white" margin="10px 0 20px 0px" bold>
            곡 이름 : {songName}{' '}
          </Text>
          <Text color="white" size="15px" margin="0 0 20px 0px" bold>
            곡 설명 : {desc}{' '}
          </Text>
          <Text color="white" size="17px" margin="0 0 20px 0px" bold>
            {' '}
            유튜브 링크 :{' '}
            <Link alink="darkgreen" href={url} target="_blank">
              {url}{' '}
            </Link>
          </Text>
          <Text color="white" size="15px" margin="0 0 20px 0px" bold center>
            #{category1} #{category2} #{category3}
          </Text>
        </Grid>
      </Grid>

      
      <Grid bg="white" margin="30px 0 0 0" end_flex margin="auto">
        <Button

          display="block"
          width="auto"
          padding="20px"
          margin="10px 30px 0px 0px"
          onClick={() => {
            history.push('/detail/' + postId + '/edit');
          }}
        >
          수정
        </Button>
        <Button
          display="block"
          width="auto"
          padding="20px"
          margin="10px 30px 0px 0px"
          onClick={() => {
            delete_post();
          }}
        >
          삭제
        </Button>

      </Grid>
    </Grid>
  </React.Fragment>
);
};
const Link = styled.a`
text-decoration: none;
color: royalblue;
`;

// Post.defaultProps = {

//   singer: "외국인",
//   musicName: "보고싶다",
//   desc: "missing you",
//   lnik: "www.abc.com423432432423432432432432423",
//   musicGenre: "발라드",
//   feeling: "우울",
//   season: "가을",
//   user_name: "GCEE",
//   id: 0,

// };

export default Post;
