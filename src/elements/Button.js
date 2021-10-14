import React from "react";
import styled from "styled-components";

const Button = (props) => {

  
  const {
    is_float,
    _onClick,
    children,
    margin,
    width,
    height,
    padding,
    bg,
    color,
    radius,
    shadow,
    size,
    cursor,
    text,
  } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    color: color,
    radius: radius,
    shadow: shadow,
    size: size,
    cursor: cursor,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  button_name: false,
  children: null,
  _onClick: () => {},
  margin: false,
  width: "100%",
  height: "100%",
  size: "",
  padding: false,
  bg: false,
  color: "",
  radius: "",
  shadow: false,
  cursor: "",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.size ? `font-size: ${props.size}` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  box-sizing: border-box;
  border: none;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) =>
    props.shadow ? `box-shadow: 0.5rem 0.5rem 0.5rem #dcdde1;` : ""}
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;


