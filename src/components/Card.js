import React from "react";
import {
  Text,
  Input,
  Image,
  Grid,
  Button,
  Upload,
  DropDown,
} from "../elements";
import { history } from "../redux/configureStore";

const Card = (props) => {
  console.log("리덕스 초기값", props);
  const {
    postId,
    singer,
    songName,
    desc,
    url,
    category1,
    category2,
    category3,
  } = props;

  return (
    <React.Fragment>
      <Grid padding="20px" margin="10px 40px" width="auto">
        <Grid
          _onClick={() => {
            history.push("/detail/" + postId);
          }}
          width="auto"
          border="1px solid black"
          padding="0px"
        >
          <Image
            shape="rectangle"
            src={
              "http://img.youtube.com/vi/" + props.url.split("=")[1] + "/0.jpg"
            }
          />
          <Text margin="10px 0px 0px 20px" bold>
            Singer : {singer}
          </Text>
          <Text margin="10px 0px 0px 20px" bold>
            title : {songName}
          </Text>
          <Text margin="10px 0px 20px 20px" size="20px" bold color="#868686">
            #{category1} #{category2} #{category3}
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Card;
