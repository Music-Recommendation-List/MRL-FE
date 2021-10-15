import React from 'react';
import Grid from '../../elements/Grid';
import Image from '../../elements/Image';
import Text from '../../elements/Text';
import { history } from '../../redux/configureStore';

const Mainpost = (props) => {
  console.log(props);

  const {
    category1,
    category2,
    category3,
    date,
    desc,
    likeUser,
    singer,
    songName,
    url,
    userId,
  } = props;

  return (
    <Grid padding="16px" is_flex wrap>
      <Grid
        _onClick={() => {
          history.push('/detail');
        }}
        width="auto"
        border="1px solid black"
        padding="10px"
      >
        <Grid width="auto">
          <Image shape="rectangle" src={url} />

          <Text size="10px">{songName}</Text>
          <Text size="10px">{singer}</Text>
          <Text size="10px">{userId}</Text>
          <Text size="15px" bold>
            {category1}
            {category2}
            {category3}
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

Mainpost.defaultProps = {};

export default Mainpost;
