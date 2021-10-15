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
  const { id, singer, songName, desc, url, category1, category2, category3 } = props;

  
  return (
    <React.Fragment>

      <Grid padding="20px" margin="10px 40px" width="auto"  >
        <Grid
          _onClick={() => {
            history.push('/detail/' + id)
          }}
          width="auto"
          border="1px solid black"
          padding="0px"
        >
          <Image shape="rectangle" src={props.src} />
          <Text margin="30px 0px 0px 0px" is_main> Singer - {singer}</Text>
          <Text is_main> title - {songName}</Text>
          <Text size="20px" bold center>
            #{category1}
            #{category2}
            #{category3}
          </Text>
          <Text>0개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Card;
