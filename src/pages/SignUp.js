import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements";
import MRL from "../MRL.png";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  const signup = () => {
    dispatch(userActions.signupDB(id, pwd, pwd_check));
  };

  return (
    <React.Fragment>
      <Grid padding="16px" width="50%" margin="auto">
        <Image src={MRL} />
        <Text size="25px" bold margin="0">
          회원가입
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
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="10px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
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
            signup();
          }}
        >
          회원가입하기
        </Button>
        <Button
          bg="black"
          color="#FFFFFF"
          margin="5px 0px"
          height="50px"
          radius="0.4rem"
          _onClick={() => {}}
        >
          취소
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

Signup.defaultProps = {};

export default Signup;
