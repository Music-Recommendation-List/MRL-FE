import React from "react";
import { Text, Grid } from "../elements";
import styled from "styled-components";
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
      <Grid padding="10px" margin="5px 10px" width="auto">
        <Grid
          _onClick={() => {
            history.push("/detail/" + postId);
          }}
          width="auto"
          border="1px solid black"
          padding="0px"
          bg="#2D2D2D"
        >
          <Image
            src={
              "http://img.youtube.com/vi/" + props.url.split("=")[1] + "/0.jpg"
            }
          />
          <Text bold margin="15px 0 10px 20px" color="#FFFFFF">
            가수 : {singer}
          </Text>
          <Text bold margin="0 0 20px 20px" color="#FFFFFF">
            곡명 : {songName}
          </Text>
          <Text bold margin="0 0 15px 20px" size="20px" color="#7F6EE3">
            {category1 ? `#${category1} ` : ""}
            {category2 ? `#${category2} ` : ""}
            {category3 ? `#${category3} ` : ""}
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const Image = styled.img`
  border-radius: 5px;
`;
export default Card;