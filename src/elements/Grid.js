import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    start_flex,
    column_flex,
    end_flex,
    is_flex,
    flex,
    position,
    padding,
    margin,
    bg,
    children,
    center,
    _onClick,
    maxWidth,
    radius,
    border,
    borderBottom,
    minWidth,
    shadow,
    minHeight,
    top,
    left,
    right,
    width,
    height,
    maxHeight,
    wrap,
    review_flex,
  } = props;

  const styles = {
    start_flex:start_flex,
    column_flex: column_flex,
    end_flex: end_flex,
    is_flex: is_flex,
    flex: flex,
    review_flex: review_flex,
    position: position,
    padding: padding,
    margin: margin,
    bg: bg,
    center: center,
    maxWidth: maxWidth,
    radius: radius,
    borderBottom: borderBottom,
    minWidth: minWidth,
    shadow: shadow,
    minHeight: minHeight,
    top: top,
    left: left,
    right: right,
    width: width,
    height: height,
    maxHeight: maxHeight,
    wrap: wrap,
    border: border,
  };

  return (
    <React.Fragment>
      {/* styles를 GridBox의 props로 넘겨주고 있는것 */}
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  start_flex:false,
  column_flex: false,
  end_flex: false,
  is_flex: false,
  review_flex: false,
  flex: false,
  position: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  maxWidth: false,
  radius: "",
  borderBottom: false,
  minWidth: false,
  minHeight: false,
  shadow: false,
  _onClick: () => {},
  top: false,
  left: false,
  right: false,
  maxHeight: false,
  wrap: "",
  border: "",
};

const GridBox = styled.div`
  ${(props) => (props.width ? `width: ${props.width};` : "")};
  ${(props) => (props.height ? `height: ${props.height};` : "")};
  box-sizing: border-box;
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : "")}
  ${(props) => (props.minWidth ? `min-width: ${props.minWidth};` : "")}
  ${(props) => (props.minHeight ? `min-height: ${props.minHeight};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.center ? `text-align: ${props.center};` : "")}

  ${(props) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""}
  ${(props) => (props.radius ? `border-radius: 0.5rem;` : "")}
  ${(props) =>
    props.shadow ? `box-shadow: 0.3rem 0.3rem 0.3rem #dcdde1;` : ""}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ""}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
  ${(props) => (props.top ? `top: ${props.top};` : "")}
  ${(props) => (props.left ? `left: ${props.left};` : "")}
  ${(props) => (props.right ? `right: ${props.right};` : "")}
  ${(props) => (props.maxHeight ? `max-height: ${props.maxHeight};` : "")}
  ${(props) => (props.flex ? `display: flex;` : "")}
  ${(props) => (props.wrap ? `flex-wrap: wrap;` : "")}
  ${(props) =>
    props.border ? `border-radius: 0.4rem; border: 1px solid #718093;` : ""}
    ${(props) =>
    props.start_flex ? `display: flex; justify-content:flex-start;` : ""}
        ${(props) =>
    props.end_flex ? `display: flex; justify-content:flex-end;` : ""}
      ${(props) =>
    props.column_flex ? `display: flex; flex-direction:column;` : ""}

@media (min-width: 501px) {
    ${(props) =>
      props.review_flex
        ? `display: flex; align-items: center; justify-content: space-between;`
        : ""}
  }
`;

export default Grid;
