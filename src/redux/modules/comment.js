import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../common/axios";
import axios from "axios";

//액션타입
const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENT = "GET_COMMENT";

//액션 생성함수
const getComment = createAction(GET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));


//초기값
const initialState = {
  list: [
    {
      postId: "asd1nRas",
      contents: "노래 너무 좋아요!",
      userId: "미들웨어에서 받아온id",
    },
  ],
};

// 미들웨어 코멘트가져오기
const getCommentDB = (id) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    const headers = {
      //  'Content-Type': 'multipart/form-data',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    // console.log("진입", data);
    axios
      .get(`http://3.34.44.44/api/comment/${id}`, {}, { headers: headers })
      //requset랑
      .then((res) => {
        console.log(res.data.result);
        dispatch(getComment(res.data.result));
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };
};

// 미들웨어 코멘트 추가
const addCommentDB = (id, data) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    const headers = {
      //  'Content-Type': 'multipart/form-data',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    console.log("진입", data);
    axios
      .post(
        `http://3.34.44.44/api/comment/${id}`,
        { contents: data },
        { headers: headers }
      )
      //requset랑
      .then((res) => {
        console.log(res.data.result);
        dispatch(addComment(res.data.result));
        alert(res.data.message);
        alert("메인페이지로 돌아갑니다.");
        history.push('/')

      })
      .catch((error) => {
        console.error(error.response.data.message);
        alert(error.response.data.message);
      });
  };
};

// 미들웨어 코멘트 삭제
const deletedCommentDB = (commentId) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem("token");
    const headers = {
      //  'Content-Type': 'multipart/form-data',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${token}`,
    };

    // console.log("진입", data);
    axios
      .delete(`http://3.34.44.44/api/comment/${commentId}`, {
        headers: headers,
      })
      //requset랑
      .then((res) => {
        alert(res.data.message);
        alert("메인페이지로 갑니다.");
        history.push('/');
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };
};

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment_list;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comment);
      }),

  },
  initialState
);

const actionCreators = {
  addComment,

  addCommentDB,
  getCommentDB,
  deletedCommentDB,
};

export { actionCreators };
