import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../common/axios";
import axios from "axios";

//액션타입
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST"
// const EDIT_POST_DETAIL = "EDIT_POST_DETAIL";

//액션생성함수
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post })); // addPost()에 넣을떄 뒤에 형태로 넣어야함
const deletePost = createAction(DELETE_POST, (id) => ({id}))
// const EditPostDetail = createAction(EDIT_POST_DETAIL, (id,data) => ({ id,data }));

//초기값
const initialState = {
  list: [
    {
      singer: "김범수",
      songName: "보고싶다",
      desc: "매우좋음",
      url: "wwww.naver.com",
      category1: "발라드",
      category2: "그리울때",
      category3: "가을",
    },
    {
      id: "1",
      singer: "닥터스트레인지",
      songName: "스트레인지",
      desc: "좋음",
      url: "wwww.daum.com",
      musicGenre: "팝",
      feeling: "기쁠때",
      season: "여름",
    },
  ],
};


//전체 포스트 가져오기
const getPostsDB = () => {
  return function (dispatch, getState, { history }) {
    const headers = {
      // 'Content-Type': 'multipart/form-data',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    // console.log("함수 진입");
    axios
      .post("http://3.34.44.44/api/posts", {}, { headers: headers })
      .then((res) => {
        // console.log("axios 연결", res);
        // console.log("데이터의 정확한 값", res.data.result);
        dispatch(setPost(res.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 포스트 추가하기
const addPostDB = (data) => {
  return function (dispatch, getState, { history }) {
    const headers = {
      //  'Content-Type': 'multipart/form-data',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    // console.log("진입", data);
    axios
      .post("http://3.34.44.44/api/posts/write", data, { headers: headers })
      //requset랑
      .then((res) => {
        // console.log(res.data.result);
        dispatch(addPost(res.data.result));
        alert(res.data.message);
        history.push("/");
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  };
};


// 포스트 디테일 수정하기
const editPostDetailDB = (id,data) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem('token')
    const headers = {
      //  'Content-Type': 'multipart/form-data',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization : `Bearer ${token}`
    };
    axios
      .put(`http://3.34.44.44/api/posts/detail/${id}/edit`, data, { headers: headers }) 
      .then((res) => {
          alert(res.data.message)
          history.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//삭제하기
const deletePostlDB = (id) => {
  return function (dispatch, getState, { history }) {
    const token = localStorage.getItem('token')
    const headers = {
      //  'Content-Type': 'multipart/form-data',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization : `Bearer ${token}`
    };
    axios
      .put(`http://3.34.44.44/api/posts/detail/${id}/edit`, {}, { headers: headers }) 
      .then((res) => {
          alert(res.data.result)
          // history.push('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


//리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.post);
      }),


  },
  initialState
);

//export
const actionCreators = {
  setPost,
  addPost,


  addPostDB,
  getPostsDB,
  editPostDetailDB,

};

export { actionCreators };
