import React from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements";
import MRL from "../MRL.png";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
// import { useHistory } from "react-router-dom";
import TestHeader from "./TestHeader";

//1. ation 불러다 사용하기
import { useDispatch } from "react-redux";
// 4. 디스패치 안에 넣을 액션생성함수 가져오기
import { actionCreators as userActions } from "../redux/modules/user";

const LogIn = (props) => {
  //2. 디스패치 만들기
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  //3. login함수에 디스패치 넣기 dispatch()
  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호를 입력해주세요!");
      return;
    }
    //5. 디스패치안에 액션생성함수 넣기(loginFB대신 loginAction 넣기)
    dispatch(userActions.loginFB(id, pwd));
  };

  // let history = useHistory();

  return (
    <React.Fragment>
      <TestHeader />
      <Grid padding="16px">
        <Image src={MRL} />
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Button
          height="50px"
          _onClick={() => {
            console.log("로그인했음");
            login();
          }}
        >
          로그인
        </Button>
        <Button
          height="50px"
          // _onClick={() => {
          //   history.push("/signup");
          // }}
        >
          회원가입
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 30%;
  height: 30%;
`;

export default LogIn;
