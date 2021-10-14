import React from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements";
import MRL from "../MRL.png";
import { useHistory } from "react-router-dom";

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
    //5. 디스패치안에 액션생성함수 넣기
    dispatch(userActions.loginDB(id, pwd));
  };

  //나중에 리덕스사용시 제거
  let history = useHistory();

  return (
    <React.Fragment>
      <Grid padding="16px" width="50%" margin="auto">
        <Image src={MRL} />
        <Text size="25px" bold margin="0">
          로그인
        </Text>
        <Grid padding="10px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="10px 0px">
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
          bg="black"
          color="#FFFFFF"
          margin="5px 0px"
          height="50px"
          radius="0.4rem"
          _onClick={() => {
            console.log("로그인했음");
            login();
          }}
        >
          로그인
        </Button>
        <Button
          bg="black"
          color="#FFFFFF"
          margin="5px 0px"
          height="50px"
          radius="0.4rem"
          _onClick={() => {
            history.push("/signup");
          }}
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
  width: 40%;
  height: 40%;
`;

export default LogIn;