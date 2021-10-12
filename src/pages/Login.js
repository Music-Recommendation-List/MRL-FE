import React from "react";
import styled from "styled-components";
import { Text, Input, Grid, Button } from "../elements";
import MRL from "../MRL.png";

const LogIn = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Image src={MRL} />
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log("아이디 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            _onChange={() => {
              console.log("패스워드 입력했어!");
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 했어!");
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

export default LogIn;
