//action과 reduser를 편하게 만들어 주는 것
import { createAction, handleActions } from "redux-actions";
//불변성작업을 위한 immer
import { produce } from "immer";
//axios
import axios from "axios";
// import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
// Actions
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
//middleware
const getUserDB = () => {
  return function (dispatch, getState, { history }) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    dispatch(getUser());
    // axios
    //   .get("http://3.34.44.44/api/users/logIn", { headers: headers })
    //   .then((res) => {
    //     // console.log(res, "res확인");
    //   })
    //   .catch((error) => {
    //     console.log(error, "에러확인");
    //   });
  };
};
const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(
        "http://3.34.44.44/api/users/logIn",
        {
          userId: id,
          password: pwd,
        },
        { headers: headers }
      )
      .then((res) => {
        // console.log(res, "res확인");
        if (res.data.ok === true) {
          dispatch(
            setUser({
              userId: res.data.result.userId,
              token: res.data.result.token,
            })
          );
          alert(res.data.message);
          history.push("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error, "에러확인");
      });
  };
};
const signupDB = (id, pwd, pwd_check) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post(
        "http://3.34.44.44/api/users/signUp",
        {
          userId: id,
          password: pwd,
          passwordConfirm: pwd_check,
        },
        { headers: headers }
      )
      .then((res) => {
        // console.log(res, "회원가입res확인");
        if (res.data.ok === true) {
          alert(res.data.message);
          history.push("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error.response, "에러에러");
        if (error.response.data.ok === false) {
          alert(error.response.data.message);
        }
      });
  };
};
//reducer
export default handleActions(
  {
    //어떤 action에 대한 것인지 작성
    //login&signup페이지 둘다에서 리덕스에 유저정보를 저장해야하기때문에 setuser로 이름을 통합하여 붙임
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // console.log("쿠키", action.payload.user.token);
        console.log("확인용!", action.payload);
        localStorage.setItem("token", action.payload.user.token);
        draft.user = action.payload.user; //createAction을 쓰면 중간에 payload를 써주어야 값을 가져온다.
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("token");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        // console.log(localStorage.getItem("token"), "이게 토큰확인");
        if (localStorage.getItem("token")) {
          console.log("토큰있음");
          draft.is_login = true;
        } else {
          console.log("토큰없음");
          draft.is_login = false;
        }
      }),
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
  signupDB,
  loginDB,
  getUserDB,
};
export { actionCreators };





