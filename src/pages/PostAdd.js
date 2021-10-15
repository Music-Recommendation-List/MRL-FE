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
  DropDown2,
} from "../elements";

const PostAdd = (props) => {
  const dispatch = useDispatch();

  //useState
  const [singer, setSinger] = React.useState("");
  const [songName, setSongName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [category1, setCategory1] = React.useState("");
  const [category2, setCategory2] = React.useState("");
  const [category3, setCategory3] = React.useState("");

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

  const selectGenre = (e) => {
    setCategory1(e.target.value);
  };

  const selectFeeling = (e) => {
    setCategory2(e.target.value);
  };

  const selectSeason = (e) => {
    setCategory3(e.target.value);
  };

  const data = {
    singer: singer,
    songName: songName,
    desc: desc,
    url: url,
    category1: category1,
    category2: category2,
    category3: category3,
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
                value={singer}
                _onChange={changeSinger}
                placeholder="가수 이름을 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid is_flex>
              <Text size="20px" width="140px">
                곡 이름
              </Text>
              <Input
                value={songName}
                _onChange={changeSongName}
                placeholder="곡 이름을 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid is_flex>
              <Text size="20px" width="140px">
                곡 설명
              </Text>
              <Input
                value={desc}
                _onChange={changeDesc}
                placeholder="곡 설명을 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid is_flex>
              <Text size="20px" width="140px" margin="6px 0px">
                유튜브링크
              </Text>
              <Input
                value={url}
                _onChange={changeUrl}
                placeholder="유튜브 링크를 입력해주세요:)"
              ></Input>
            </Grid>

            <Grid margin="20px 0px">
              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 32px 0px 0px">
                  장르
                </Text>
                <DropDown2
                  _onChange={selectGenre}
                  value={category1}
                  label="장르 :)"
                  help="장르를 선택해주세요!"
                  list1="가요"
                  list2="힙합"
                  list3="발라드"
                />
              </Grid>

              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 32px 0px 0px">
                  감성
                </Text>
                <DropDown2
                  _onChange={selectFeeling}
                  value={category2}
                  label="기분 :)"
                  help="어울리는 기분을 선택해주세요!"
                  list1="기쁨"
                  list2="슬픔"
                  list3="우울"
                />
              </Grid>

              <Grid flex>
                <Text center size="20px" width="70px" margin="6px 32px 0px 0px">
                  계절
                </Text>

                <DropDown2
                  _onChange={selectSeason}
                  value={category3}
                  label="계절 :)"
                  help="어울리는 계절을 선택해주세요!"
                  list1="봄"
                  list2="여름"
                  list3="가을"
                  list4="겨울"
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
