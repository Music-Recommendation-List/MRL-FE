import React from "react";
import { actionCreators as userActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";

import {
  Text,
  Input,
  Image,
  Grid,
  Button,
  Upload,
  DropDown,
  DropDown2
} from "../elements";

const PostAdd = (props) => {
  const dispatch = useDispatch();

  //useState
  const [singer, setSinger] = React.useState("");
  const [songName, setSongName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [category1, setCategory1] = React.useState([]);
  const [category2, setCategory2] = React.useState([]);
  const [category3, setCategory3] = React.useState([]);

  // change함수
  const changeSinger = (e) => {
    setSinger(e.target.value);
  };

  const changeSongName = (e) => {
    setSongName(e.target.value);
  };
  const changeDesc = (e) => {
    setDesc(e.target.value);
  };
  const changeUrl = (e) => {
    setUrl(e.target.value);
  };

  const selectGenre = (event) => {
    const {
      target: { value },
    } = event;
    setCategory1(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const selectFeeling = (event) => {
    const {
      target: { value },
    } = event;
    setCategory2(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const selectSeason = (event) => {
    const {
      target: { value },
    } = event;
    setCategory3(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const data = {
    singer: singer,
    songName: songName,
    desc: desc,
    url: url,
    category1: "category1",
    category2: "category2",
    category3: "category3",
  };

  // 리덕스 전송
  const save = () => {
    dispatch(userActions.addPostDB(data));
  };

  return (
    <React.Fragment>
      <Grid>
        <Grid width="30vw" margin="90px auto" border minWidth="600px">
          <Grid width="570px" padding="20px 30px">
            <Grid margin="0px 0px 20px 0px">
              <Text margin="0px" size="36px" bold center>
                포스트 생성
              </Text>
            </Grid>

            <Grid is_flex>
              <Text size="20px" width="140px">
                가수이름
              </Text>
              <Input
                _onChange={changeSinger}
                placeholder="가수 이름을 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid is_flex>
              <Text size="20px" width="140px">
                곡 이름
              </Text>
              <Input
                _onChange={changeSongName}
                placeholder="곡 이름을 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid is_flex>
              <Text size="20px" width="140px">
                곡 설명
              </Text>
              <Input
                _onChange={changeDesc}
                placeholder="곡 설명을 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid is_flex>
              <Text size="20px" width="140px" margin="6px 0px">
                유튜브링크
              </Text>
              <Input
                _onChange={changeUrl}
                placeholder="유튜브 링크를 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid margin="20px 0px">
              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 32px 0px 0px">
                  장르
                </Text>
                <DropDown
                  _onChange={selectGenre}
                  value={category1}
                  list={["댄스", "발라드", "팝"]}
                  label="장르를 선택해주세요!"
                />
              </Grid>

              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 32px 0px 0px">
                  기분
                </Text>
                <DropDown
                  _onChange={selectFeeling}
                  value={category2}
                  list={["기쁜", "슬픈", "우울"]}
                  label="어울리는 기분을 선택해주세요!"
                />
              </Grid>

              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 32px 0px 0px">
                  계절
                </Text>
                <DropDown
                  _onChange={selectSeason}
                  value={category3}
                  list={["봄", "여름", "가을", "겨울"]}
                  label="어울리는 계절을 선택해주세요!"
                />
              </Grid>
            </Grid>

            <Grid end_flex margin="0px 0px 10px 0px">
              <Button
                width="80px"
                padding="20px"
                margin="10px 0px 0px 30px"
                _onClick={save}
              >
                저장
              </Button>
              <Button width="80px" padding="20px" margin="10px 10px 0px 10px">
                취소
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostAdd;
