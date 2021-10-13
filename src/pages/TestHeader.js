import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

//쿠키가 있나 확인해야 하니까
import { getCookie, deleteCookie } from "../shared/Cookie";

const TestHeader = (props) => {
  const dispatch = useDispatch();

  let history = useHistory();

  //1. state로 로그인 확인 데이터 만들기(스토어 연결시 필요없는 작업)
  // const [is_login, setIsLogIn] = React.useState(false);
  const is_login = useSelector((state) => state.user.is_login);

  //3. is_login의 쿠키를 확인해서 true/false를 정해줘야한다.(useEffect Hook사용하기)(스토어 연결시 필요없는 작업)
  // React.useEffect(() => {
  //   let cookie = getCookie("userId");
  //   console.log(cookie);

  //   if (cookie) {
  //     setIsLogIn(true);
  //   } else {
  //     setIsLogIn(false);
  //   }
  // });

  //2. is_login이 true이면 로그아웃버튼을 보여줘라!!
  if (is_login) {
    return (
      <React.Fragment>
        <div>
          <button
            onClick={() => {
              dispatch(userActions.logOut({}));
            }}
          >
            로그아웃
          </button>
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div>
        <button
          onClick={() => {
            history.push("/login");
            console.log("버튼");
          }}
        >
          로그인
        </button>
      </div>
    </React.Fragment>
  );
};
export default TestHeader;
