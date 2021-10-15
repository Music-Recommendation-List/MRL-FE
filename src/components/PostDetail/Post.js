import React from "react";
import { Text, Input, Image, Grid, Button, Upload } from "../../elements";
import { history } from "../../redux/configureStore";
import { actionCreators as postActions } from "../../redux/modules/post";
import { useDispatch } from "react-redux";

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
      <Grid width="50vw" margin="50px auto 20px">
        <Text margin="20px 0px" size="36px" bold center>
          상세페이지
        </Text>

        <Grid is_flex>
          <Grid>
            <iframe
              width="100%"
              height="360px" 
              src={`https://www.youtube.com/embed/${
                props._post.url.split("=")[1]
              }`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid
            height="350px"
            border
            margin="0px 0px 0px 20px"
            padding="10px 15px"
            overflow
          >
            <Text margin="0 0 15px 0px" size="16px" bold right>
              작성자 : {userId}{" "}
            </Text>
            <Text margin="10px 0 20px 0px" bold>
              가수이름 : {singer}{" "}
            </Text>
            <Text margin="10px 0 20px 0px" bold>
              곡 이름: {songName}{" "}
            </Text>
            <Text margin="0 0 20px 0px" bold>
              곡 설명 : {desc}{" "}
            </Text>
            <Text margin="0 0 20px 0px" bold>
              {" "}
              유튜브 링크 : {" "}
              <a href={url} target="_blank">
                {url}{" "}
              </a>
            </Text>
            <Text margin="0 0 20px 0px" bold>
              #{category1} #{category2} #{category3}
            </Text>
            <Text margin="0 0 20px 0px"></Text>
            <Text margin="0 0 20px 0px"></Text>
          </Grid>
        </Grid>

        <Grid end_flex margin="10px 0px 0px 0px">
          <Button
            width="auto"
            padding="20px"
            margin="10px 30px 0px 0px"
            _onClick={() => {
              history.push("/detail/" + postId + "/edit");
            }}
          >
            수정
          </Button>
          <Button
            width="auto"
            padding="20px"
            margin="10px 30px 0px 0px"
            _onClick={() => {
              delete_post();
            }}
          >
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
