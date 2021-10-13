//action과 reduser를 편하게 만들어 주는 것
import { createAction, handleActions } from "redux-actions";
//불변성작업을 위한 immer
import { produce } from "immer";

//백연결 후 삭제하기
import { auth } from "../../shared/firebase";

import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// Action Creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// const user_initial = {
//   userId: "test1",
//   password: "1111",
//   passwordConfirm: "1111",
// };

//middleware actions
// const loginAction = (user) => {
//   return function (dispatch, getState, { history }) {
//     console.log(history);
//     dispatch(setUser(user));
//     history.push("/");
//   };
// };

//middleware actions (현재 파이어베이스로 연결 -> axios로 변경하기)
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth
      .signInWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);
        dispatch(setUser(user));
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    //악시오스
  };
};

const signupFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    //악시오스 여기서 씀
    //악시오시에다가 사인업하는 주소를 넣는다
  };
};

//reducer
export default handleActions(
  {
    //어떤 action에 대한 것인지 작성
    //login&signup페이지 둘다에서 리덕스에 유저정보를 저장해야하기때문에 setuser로 이름을 통합하여 붙임
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success"); //is_login 대신 토큰 들어가면 됨
        draft.user = action.payload.user; //createAction을 쓰면 중간에 payload를 써주어야 값을 가져온다.
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
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
  logOut,
  getUser,
  setUser,
  //   loginAction,
  signupFB,
  loginFB,
};

export { actionCreators };
