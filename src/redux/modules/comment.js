import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../common/axios";
import axios from "axios";

//액션타입
const ADD_COMMENT = "ADD_COMMENT";

const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));


const initialState = {
  "postId": "asd1nRas",
  "contents": "노래 너무 좋아요!",
  "userId": "미들웨어에서 받아온id",
}

export default handleActions({
  [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
    draft = action.payload;
  }),
}, initialState)

const actionCreators = {
  addComment
}