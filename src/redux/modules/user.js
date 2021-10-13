import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';

import { setCookie, getCookie, deleteCookie } from '../../shared/Cookie';

//actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//actions creators
const logIn = createAction(LOG_IN, (user) => user);
const logOut = createAction(LOG_OUT, (user) => user);
const getUser = createAction(GET_USER, (user) => user);

//initialState
const initialState = {
  user: null,
  is_login: false,
};

//middleware actions
// dispatch 필요 , us
// post.js 필요
const getPosts = () => {
  return function (dispatch, getState, { history }) {
    const headers = {
      //   "Content-Type": "multipart/form-data",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    axios
      .post('http://3.34.44.44/api/posts', {}, { headers: headers })
      .then((res) => {
        console.log(res);
        // dispatch();
        // setUser({
        //   user_name: username,
        // });
      })

      .catch((err) => {
        console.log(err);
      });
    // console.log(history);
    // dispatch(logIn(user));
    // history.push('/');
  };
};

//reduce
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export
const actionCreators = {
  logIn,
  logOut,
  getUser,
  getPosts,
};

export { actionCreators };
