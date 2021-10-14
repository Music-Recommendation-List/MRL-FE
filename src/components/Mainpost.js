import React from 'react';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';

const Mainpost = (props) => {
  return (
    <Grid padding="16px" is_flex wrap>
      <Grid
        _onClick={() => {
          console.log('상세페이지');
        }}
        width="auto"
        border="1px solid black"
        padding="10px"
      >
        <Image shape="rectangle" src={props.src} />
        <Text size="15px" bold>
          {props.hashtag.sad}
          {props.hashtag.ballad}
          {props.hashtag.season}
        </Text>
        <Text>{props.like.length}개</Text>
      </Grid>
    </Grid>
  );
};

Mainpost.defaultProps = {
  src: 'http://img.youtube.com/vi/6-Q36XoHlEI/0.jpg',
  hashtag: {
    sad: '#슬픔',
    ballad: '#발라드',
    season: '#겨울',
  },
  like: ['dkdkf77'],
};

export default Mainpost;
