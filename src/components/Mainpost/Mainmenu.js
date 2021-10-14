import React from 'react';
import { Grid } from '../../elements';
import Button from '@material-ui/core/Button';

const Mainmenu = (props) => {
  return (
    <React.Fragment>
      <Grid>
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
      </Grid>
    </React.Fragment>
  );
};

Mainmenu.defaultProps = {
  user_info: {
    user_id: 'seunghwan12',
  },
  user_menu: {
    feeling: '기분',
    season: '계절',
    kinds: '종류',
  },
};

export default Mainmenu;
