import React from "react";
import { actionCreators as userActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import Button from '@mui/material/Button';
import {
  Text,
  Input,
  Image,
  Grid,
  
  Upload,
  DropDown,
  DropDown2,
} from "../elements";
const PostEdit = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  console.log(useParams());
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);
  let _post = post_list.find((p) => p.postId == id); // 상세페이지 데이터
  console.log(_post);
  //useState
  const [singer, setSinger] = React.useState(_post ? _post.singer : "");
  const [songName, setSongName] = React.useState(_post ? _post.songName : "");
  const [desc, setDesc] = React.useState(_post ? _post.desc : "");
  const [url, setUrl] = React.useState(_post ? _post.url : "");
  const [category1, setCategory1] = React.useState(
    _post ? _post.category1 : ""
  );
  const [category2, setCategory2] = React.useState(
    _post ? _post.category2 : ""
  );
  const [category3, setCategory3] = React.useState(
    _post ? _post.category3 : ""
  );
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
  // 입력받은 값
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
  const re_save = () => {
    dispatch(userActions.editPostDetailDB(id, data));
  };
  return (
    <React.Fragment>
      <Grid>
        <Grid width="30vw" margin="90px auto" border minWidth="600px">
          <Grid width="570px" padding="20px 30px">
            <Grid margin="0px 0px 20px 0px">
              <Text margin="0px" size="36px" bold center>
                포스트 수정
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
              <Text size="20px" width="140px">
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
                  list1="발라드"
                  list2="댄스"
                  list3="랩/힙합"
                  list4="트로트"
                  list5="인디음악"
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
                  list1="신나는"
                  list2="슬픈/우울한"
                  list3="기분전환"
                  list4="설레는"
                  list5="스트레스 풀 때"
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
               onClick={re_save}
              >
                저장
              </Button>
              <Button
                width="80px"
                padding="20px"
                margin="10px 10px 0px 10px"
                onClick={() => {
                  history.push("/");
                }}
              >
                취소
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default PostEdit;