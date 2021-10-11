import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { purple } from "@material-ui/core/colors";
import { Text, Grid } from ".";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: "#44bd32",
    },
  },
});

export default function DropDown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
    if (option.target.firstChild !== null) {
      let target =
        option.target.firstChild.innerHTML ||
        option.target.innerHTML ||
        option.target.firstChild.data;
      console.log(target);
    }
  };

  return (
    <div style={{ margin: "0 1rem"}}>
      <ThemeProvider theme={theme}>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="secondary"
          onClick={handleClick}
          style={{width: '13rem', margin: '0 auto', minWidth: '10rem', padding: '1rem'}}
        >
          <Grid is_flex="t">
            <Grid margin="0 1rem 0 0">
              <Text size="1.6rem" margin="0" color="#ffffff" bold="t">
                {props.menu_name}
              </Text>
            </Grid>
            {props.icon.icon}
          </Grid>
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {props.options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              <Text size="1.6rem" margin="0" padding={props.size}>
                {option}
              </Text>
            </MenuItem>
          ))}
        </StyledMenu>
      </ThemeProvider>
    </div>
  );
}

DropDown.defaultProps = {
  menu_name: "",
  options: ["수정", "삭제", "상세보기"],
  icon: {
    _name: "",
    icon: <ThemeProvider theme={theme}><ArrowDropDownIcon fontSize="large" color='primary'/></ThemeProvider>,
  },
  post_id: "0",
  size: "",
};

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
