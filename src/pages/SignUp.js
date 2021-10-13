import React from "react";
import styled from "styled-components";
import { Grid, Text, Input, Button } from "../elements";
import MRL from "../MRL.png";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  let history = useHistory();

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
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={() => {
              console.log("!!");
            }}
          />
        </Grid>

        <Button text="회원가입하기"></Button>
        <Button
          text="취소"
          _onClick={() => {
            history.push("/");
          }}
        ></Button>
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
