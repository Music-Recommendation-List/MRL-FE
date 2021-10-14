import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ color: "black", fontWeight: "800" }}
        >
          장르🔽
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>발라드</MenuItem>
          <MenuItem onClick={handleClose}>댄스</MenuItem>
          <MenuItem onClick={handleClose}>랩/힙합</MenuItem>
          <MenuItem onClick={handleClose}>트로트</MenuItem>
          <MenuItem onClick={handleClose}>인디음악</MenuItem>
        </Menu>
      </div>
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ color: "black", fontWeight: "800" }}
        >
          계절🔽
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>봄</MenuItem>
          <MenuItem onClick={handleClose}>여름</MenuItem>
          <MenuItem onClick={handleClose}>가을</MenuItem>
          <MenuItem onClick={handleClose}>겨울</MenuItem>
        </Menu>
      </div>
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ color: "black", fontWeight: "800" }}
        >
          감성🔽
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>신나는</MenuItem>
          <MenuItem onClick={handleClose}>슬픈/우울한</MenuItem>
          <MenuItem onClick={handleClose}>기분전환</MenuItem>
          <MenuItem onClick={handleClose}>설레는</MenuItem>
          <MenuItem onClick={handleClose}>스트레스 풀 때</MenuItem>
        </Menu>
      </div>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    margin: 5px 50px;
  }
`;
