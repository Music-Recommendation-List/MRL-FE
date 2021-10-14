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

const Card = (props) => {
  // console.log("리덕스 초기값", props);
  const { singer, songName, desc, url, category1, category2, category3 } = props;

  return (
    <React.Fragment>
      
      <Grid padding="16px" margin="10px" width="auto"  >
        <Grid
          _onClick={() => {
            console.log("상세페이지");
          }}
          width="auto"
          border="1px solid black"
          padding="10px"
        >
          <Image shape="rectangle" src={props.src} />
          <Text>{singer}</Text>
          <Text>{songName}</Text>
          <Text size="15px" bold>
            {category1}
            {category2}
            {category3}
          </Text>
          <Text>0개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Card;
