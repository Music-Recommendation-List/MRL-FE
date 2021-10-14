import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import axios from 'axios';
import { firestore } from '../../shared/firebase';

//액션타입 - 데이터의 타입
const GET_POST = 'GET_POST';
const PLUS_POST = 'PLUS_POST';

//액션생성함수 - 크리에이터 , 핸들 액션즈  데이터를 받아옴
const getPosts = createAction(GET_POST, (post_list) => ({ post_list }));
const plusPosts = createAction(PLUS_POST, (post) => ({ post }));

// addPost()에 넣을떄 뒤에 형태로 넣어야함

//초기값 - 가수이름, 곡 이름, 곡 설명, 유튜브 링크, 장르, 기분, 계절
const initialState = {
  list: [],
};

const initialMainPost = {
  singer: '김윤아',
  songName: '봄날은 간다',
  desc: '아련함',
  url: 'https://youtu.be/8w1P4qKHJgg',
  musicGenre: '#발라드',
  feeling: '#슬픔',
  season: '#가을',
};

//미들웨어
const getPostsDB = () => {
  return function (dispatch, getState, { history }) {
    const headers = {
      // 'Content-Type': 'multipart/form-data',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    console.log('함수 진입');
    axios
      .post('http://3.34.44.44/api/posts', {}, { headers: headers })
      .then((res) => {
        console.log('axios 연결', res);
        console.log('데이터의 정확한 위치', res.data.result);
        dispatch(getPosts(res.data.result));

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

// 리덕스 안에서 엑시오스 데이터 전송 , 안에서 히스토리를 사용 하려고
// 미들웨어
// const getPosts = () => {
//   return function (dispatch, getState, { history }) {
//     const headers = {
//       //   "Content-Type": "multipart/form-data",
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     };
//     axios
//       .post('http://3.34.44.44/api/posts', {}, { headers: headers })
//       .then((res) => {
//         console.log(res);
//         // dispatch();
//         // setUser({
//         //   user_name: username,
//         // });
//       })

//       .catch((err) => {
//         console.log(err);
//       });
// const data = {
//   singer,musicName, desc, link, musicGenre, feeling, season
// }
// instance
// .post('/api/posts/write', )
// //requset랑
// .then((res) => {
//   // alert(res.data.message)
//   // history.push("/");
// })
// .catch((error) => {
//   console.error(error.response.data.message);
// });
//   };
// };

//리듀서
export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        console.log(draft.list);
      }),
    [PLUS_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//export
const actionCreators = {
  getPosts,
  plusPosts,
  getPostsDB,
};

export { actionCreators };
