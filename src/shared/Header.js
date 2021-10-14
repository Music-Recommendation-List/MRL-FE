import React from 'react';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import { getCookie, deleteCookie } from './Cookie';
import { useSelector, useDispatch } from 'react-redux';
import user, { actionCreators as userActions } from '../redux/modules/user';
import { history } from '../redux/configureStore';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
    return (
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            🎵
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            _onClick={() => {
              history.push('/postWrite');
            }}
          >
            작성
          </Button>
          <Button
            _onClick={() => {
              history.push('/');
            }}
          >
            알림
          </Button>
          <Button
            _onClick={() => {
              dispatch(userActions.logOut({ user }));
              history.replace('/');
            }}
          >
            로그아웃
          </Button>
        </Grid>
      </Grid>
    );
  }

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
