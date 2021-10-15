import React from "react";
import { Text, Grid, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import mini_mrl from "../../src/mini_mrl.png";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);

  const is_token = window.localStorage.getItem("token") ? true : false;

  if (is_login && is_token) {
    return (
      <>
        <Grid is_flex>
          <Grid is_flex padding="4px 25px 4px 0px">
            <Image
              src={mini_mrl}
              onClick={() => {
                history.push("/");
              }}
            />
            <Grid>
              <Text
                margin="0px"
                size="24px"
                bold
                _onClick={() => {
                  history.push("/");
                }}
              >
                MRL
              </Text>
            </Grid>
            <Grid is_flex width="35%">
              <Button
                bg="black"
                color="#FFFFFF"
                margin="0px 5px"
                height="40px"
                radius="0.4rem"
                _onClick={() => {
                  history.push("/addpost");
                }}
              >
                작성
              </Button>
              <Button
                bg="black"
                color="#FFFFFF"
                margin="0px 5px"
                height="40px"
                radius="0.4rem"
              >
                알림
              </Button>
              <Button
                bg="black"
                color="#FFFFFF"
                margin="0px 5px"
                height="40px"
                radius="0.4rem"
                _onClick={() => {
                  dispatch(userActions.logOut({}));
                  history.push("/");
                }}
              >
                로그아웃
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <hr></hr>
      </>
    );
  }
  return (
    <>
      {history.push("/")}
      <Grid is_flex>
        <Grid is_flex padding="4px 25px 4px 0px">
          <Image
            src={mini_mrl}
            onClick={() => {
              history.push("/");
            }}
          />
          <Grid>
            <Text
              margin="0px"
              size="24px"
              bold
              _onClick={() => {
                history.push("/");
              }}
            >
              MRL
            </Text>
          </Grid>
        </Grid>
        <Grid is_flex width="20%" margin="0px 20px 0px 0px">
          <Button
            bg="black"
            color="#FFFFFF"
            margin="0px 5px"
            height="40px"
            radius="0.4rem"
            _onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </Button>
          <Button
            bg="black"
            color="#FFFFFF"
            margin="0px 5px"
            height="40px"
            radius="0.4rem"
            _onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입
          </Button>
        </Grid>
      </Grid>
      <hr></hr>
    </>
  );
};

const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export default Header;
