import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import styled from "styled-components";
import {
  actionCreators,
  actionCreators as postActions,
} from "../../redux/modules/post";
import { useDispatch } from "react-redux";
export default function SelectAutoWidth() {
  const dispatch = useDispatch();
  const pick_category = () => {
    const categoryData = {};
    if (category1 !== "전체") {
      categoryData.category1 = category1;
    }
    if (category2 !== "전체") {
      categoryData.category2 = category2;
    }
    if (category3 !== "전체") {
      categoryData.category3 = category3;
    }
    console.log(categoryData);
    dispatch(postActions.getPostsDB(categoryData));
  };
  //use state
  const [category1, setCategory1] = React.useState("");
  const [category2, setCategory2] = React.useState("");
  const [category3, setCategory3] = React.useState("");
  const handleCategory1 = (event) => {
    setCategory1(event.target.value);
  };
  const handleCategory2 = (event) => {
    setCategory2(event.target.value);
  };
  const handleCategory3 = (event) => {
    setCategory3(event.target.value);
  };
  return (
    <Box>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">장르</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category1}
            onChange={handleCategory1}
            autoWidth
            label="장르"
          >
            <MenuItem value="전체">
              <em>전체</em>
            </MenuItem>
            <MenuItem value="발라드">발라드</MenuItem>
            <MenuItem value="댄스">댄스</MenuItem>
            <MenuItem value="랩/힙합">랩/힙합</MenuItem>
            <MenuItem value="트로트">트로트</MenuItem>
            <MenuItem value="인디음악">인디음악</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">감성</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category2}
            onChange={handleCategory2}
            autoWidth
            label="감성"
          >
            <MenuItem value="전체">
              <em>전체</em>
            </MenuItem>
            <MenuItem value="신나는">신나는</MenuItem>
            <MenuItem value="슬픈/우울한">슬픈/우울한</MenuItem>
            <MenuItem value="기분전환">기분전환</MenuItem>
            <MenuItem value="설레는">설레는</MenuItem>
            <MenuItem value="스트레스 풀 때">스트레스 풀 때</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">계절</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category3}
            onChange={handleCategory3}
            autoWidth
            label="계절"
          >
            <MenuItem value="전체">
              <em>전체</em>
            </MenuItem>
            <MenuItem value="봄">봄</MenuItem>
            <MenuItem value="여름">여름</MenuItem>
            <MenuItem value="가을">가을</MenuItem>
            <MenuItem value="겨울">겨울</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        onClick={pick_category}
        style={{
          color: "#FFFFFF",
          fontWeight: "800",
          backgroundColor: "black",
          fontFamily: "Cafe24SsurroundAir",
        }}
      >
        검색
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(actionCreators.getPostsDB());
          setCategory1('전체')
          setCategory2('전체')
          setCategory3('전체')
        }}
        style={{
          color: "#FFFFFF",
          fontWeight: "800",
          backgroundColor: "black",
          fontFamily: "Cafe24SsurroundAir",
        }}
      >
        초기화
      </Button>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  Button {
    margin-left: 20px;
  }
`;