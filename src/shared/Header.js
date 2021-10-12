import React from 'react';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            🎵
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            _onClick={() => {
              console.log('작성');
            }}
          >
            작성
          </Button>
          <Button
            _onClick={() => {
              console.log('로그인');
            }}
          >
            로그인
          </Button>
          <Button
            _onClick={() => {
              console.log('회원가입');
            }}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
