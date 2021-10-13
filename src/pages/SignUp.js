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
    if (id === "" || pwd === "") {
      window.alert("아이디, 패스워드을 모두 입력해주세요!");
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    dispatch(userActions.signupFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Image src={MRL} />
        <Text size="32px" bold>
          회원가입
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
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
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
          height="50px"
          _onClick={() => {
            signup();
          }}
        >
          회원가입하기
        </Button>
        <Button height="50px" _onClick={() => {}}>
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
  width: 30%;
  height: 30%;
`;

Signup.defaultProps = {};

export default Signup;
