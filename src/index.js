import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./shared/App";

//1. 리덕스 연결
import { Provider } from "react-redux";

//4. createStore 연결
import { createStore } from "redux";

//3. createStore() 안에 state저장 / 5. 함수 안에 뱉고 싶은 정보 저장하기
let store = createStore(() => {});

ReactDOM.render(
  <React.StrictMode>
    {/* 2. Provider로 감싸기, 감싸진 애들은 props없이도 state 공유 가능 */}
    {/* 6. store={store}를 입력하면 provider로 감싸진곳에서 state를 사용가능 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// 7. 컴포넌트에서 store에 있는 state를 쓰려면 사용하려는 파일에서 function을 만들어 사용한다.
// *함수 사용법(사용하고자하는 파일에서 connect 연결하는 것 잊지말기)
// function 함수명() {}

// export default connect(함수명)(파일명);
