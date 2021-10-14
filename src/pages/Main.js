import React from 'react';

import Grid from '../elements/Grid';
import Text from '../elements/Text';

import Mainmenu from '../components/Mainmenu';
import MainPostList from '../components/MainPostList';

const Main = (props) => {
  return (
    <React.Fragment>
      <Mainmenu />
      <Grid padding="16px">
        <Text>전체음악</Text>
      </Grid>
      <MainPostList />
    </React.Fragment>
  );
};

export default Main;
