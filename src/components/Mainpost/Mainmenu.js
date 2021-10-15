import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import styled from "styled-components";
export default function SelectAutoWidth() {
  const [category1, setCategory1] = React.useState("");
  const [category2, setCategory2] = React.useState("");
  const [category3, setCategory3] = React.useState("");
  const handleCategory1 = (event) => {
    setCategory1(event.target.value);
    console.log(event.target.value);
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>발라드</MenuItem>
            <MenuItem value={2}>댄스</MenuItem>
            <MenuItem value={3}>랩/힙합</MenuItem>
            <MenuItem value={4}>트로트</MenuItem>
            <MenuItem value={5}>인디음악</MenuItem>
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={6}>신나는</MenuItem>
            <MenuItem value={7}>슬픈/우울한</MenuItem>
            <MenuItem value={8}>기분전환</MenuItem>
            <MenuItem value={9}>설레는</MenuItem>
            <MenuItem value={10}>스트레스 풀 때</MenuItem>
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={11}>봄</MenuItem>
            <MenuItem value={12}>여름</MenuItem>
            <MenuItem value={13}>가을</MenuItem>
            <MenuItem value={14}>겨울</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        style={{
          color: "#FFFFFF",
          fontWeight: "800",
          backgroundColor: "black",
        }}
      >
        검색
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
