import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//액션타입
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

//액션생성함수
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

//초기값
const initialState = {
  list: [],
};

const initialPost = {
  user_info: {
    id: 0,
    user_name: "gcee",
  },

  contents1: "장르",
  contents2: "기분",
  contents3: "계절",

  singer: "김법수",
  music_name: "보고싶다",
  youtube_url: "",
};

const addPostDB = (singer,musicName,desc,lnik,musicGenre,feeling,season) => {
  return function (dispatch, getState, { history }) {
    dispatch(addPost({singer:singer,musicName:musicName, desc:desc, lnik:lnik, musicGenre, feeling, season}));
    // history.push("/");
  };
};

//리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
  
      }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.post;
    }),
  },
  initialState
);

//export
const actionCreators = {
  setPost,
  addPost,

  addPostDB,
};

export { actionCreators };
