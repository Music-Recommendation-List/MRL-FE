import React from 'react';

import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';
import Button from '../elements/Button';

import Header from '../shared/Header';

const Main = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Grid padding="16px" is_flex>
        <Button
          _onClick={() => {
            console.log('#슬픔');
          }}
        >
          {props.user_menu.feeling}
        </Button>
        <Button
          _onClick={() => {
            console.log('#가을');
          }}
        >
          {props.user_menu.season}
        </Button>
        <Button
          _onClick={() => {
            console.log('#발라드');
          }}
        >
          {props.user_menu.kinds}
        </Button>
      </Grid>
      <Grid padding="16px">
        <Text>전체음악</Text>
      </Grid>
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
        </Grid>
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
        </Grid>
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
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Main.defaultProps = {
  user_info: {
    user_id: 'seunghwan12',
  },
  user_menu: {
    feeling: '기분',
    season: '계절',
    kinds: '종류',
  },
  src: 'http://img.youtube.com/vi/6-Q36XoHlEI/0.jpg',
  hashtag: {
    sad: '#슬픔',
    ballad: '#발라드',
    season: '#겨울',
  },
};

export default Main;
