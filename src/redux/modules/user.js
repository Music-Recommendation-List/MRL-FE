//action과 reduser를 편하게 만들어 주는 것
import { createAction, handleActions } from "redux-actions";
//불변성작업을 위한 immer
import { produce } from "immer";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// Action Creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

//reducer
export default handleActions(
  {
    //어떤 action에 대한 것인지 작성
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success"); //is_login 대신 토큰 들어가면 됨
        draft.user = action.payload.user; //createAction을 쓰면 중간에 payload를 써주어야 값을 가져온다.
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
/*
여기서 produce는 불변성작업을 위한 immer를 쓰는 것이다.
produce를 쓰면 원본값이 뭔지 알아야 하기때문에 처음 state를 쓰고 그 다음
원본값을 가지고 어떤 작업을 하고 싶은지 함수로 쓰면 된다.
produce(state, (draft는 immer가 원본값을 복사해서 주는 값이다.) => {어떤 작업을 해야하는지})
*/

//action creator export
const actionCreators = {
  logIn,
  logOut,
  getUser,
};

export { actionCreators };
