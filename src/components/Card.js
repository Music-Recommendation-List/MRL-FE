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
  console.log("리덕스 초기값", props);
  const { singer, songName, desc, url, musicGenre, feeling, season } = props;

  return (
    <React.Fragment>

      <Grid padding="16px" is_flex wrap>

        <Grid
          _onClick={() => {
            console.log("상세페이지");
          }}
          width="auto"
          border="1px solid black"
          padding="10px"
        >
          <Image shape="rectangle" src={props.src} />
          <Text size="15px" bold>
            {feeling}
            {musicGenre}
            {season}
          </Text>
          <Text>0개</Text>
        </Grid>

      </Grid>
    </React.Fragment>
  );
};

export default Card;
