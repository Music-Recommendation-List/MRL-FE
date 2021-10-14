import React from "react";
import { Text, Grid, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import mini_mrl from "../../src/mini_mrl.png";
import styled from "styled-components";

import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();

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
      <Grid is_flex padding="4px 16px">
        <Image src={mini_mrl} />
        <Grid>
          <Text margin="0px" size="24px" bold>
            MRL
          </Text>
        </Grid>
        <Grid is_flex>
          <Button>작성</Button>
          <Button>알림</Button>
          <Button
            _onClick={() => {
              dispatch(userActions.logOut({}));
              history.push("/");
            }}
          >
            로그아웃
          </Button>
        </Grid>
      </Grid>
    );
    // return (
    //   <React.Fragment>
    //     <div>
    //       <button
    //         onClick={() => {
    //           dispatch(userActions.logOut({}));
    //         }}
    //       >
    //         로그아웃
    //       </button>
    //     </div>
    //   </React.Fragment>
    // );
  }
  return (
    <Grid>
      <Grid is_flex padding="4px 25px 4px 0px">
        <Image src={mini_mrl} />
        <Grid>
          <Text margin="0px" size="24px" bold>
            MRL
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            _onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </Button>
          <Button
            _onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
      <hr></hr>
    </Grid>
    // <React.Fragment>
    //   <div>
    //     <button
    //       onClick={() => {
    //         history.push("/login");
    //         console.log("버튼");
    //       }}
    //     >
    //       로그인
    //     </button>
    //   </div>
    // </React.Fragment>
  );
};

const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export default Header;
