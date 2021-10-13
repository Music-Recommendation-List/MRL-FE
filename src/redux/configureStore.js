import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

//history 객체 만들기
export const history = createBrowserHistory();

//루트리듀서
const rootReducer = combineReducers({
  //리듀서 만들때마다 추가해주면 된다.
  user: User,
  router: connectRouter(history), //위에서 만든 히스토리객체와 라우터가 연결됨, 이렇게되면 스토어에 브라우저히스토리가 저장됨
});

//미들웨어 [] 배열에는 내가 사용할 미들웨어를 하나씩 다 넣으면 된다.
const middlewares = [thunk.withExtraArgument({ history: history })];

// 지금이 어느 환경인 지 알려주는 것 (개발환경인지 프로덕션(배포)환경인지)
const env = process.env.NODE_ENV;

//require는 패키지를 가져올 때 쓰는 것
//logger는 콘솔에 이전상태/이후상태 이런것들을 찍는다 즉 리덕스안에있는 데이터의 전/후를 찍어준다.
//개발할때 편하려고 쓰는 것이기 때문에 배포했을때 사용자들에게 보여지면 안된다. 그래서 if문을 사용한 것
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//devTools 사용설정(사용하면 편리하다!)
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//미들웨어 묶어주기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//미들웨어와 루트리듀서를 엮어 스토어 만들기
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
