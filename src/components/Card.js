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
  const { id, singer, songName, desc, src: url, musicGenre, feeling, season } = props;

  return (
    <React.Fragment>

      <Grid padding="16px" is_flex wrap>

        <Grid
          _onClick={() => {
            history.push('/detail/' + id)
          }}
          width="auto"
          border="1px solid black"
          padding="10px"
        >
          <Image shape="rectangle" src={url} />
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
