import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size, children, radius } = props;
  const styles = {
    src: src,
    size: size,
    radius: radius,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === "main") {
    return <MainInner {...styles}>{children}</MainInner>;
  }
  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://newsimg.sedaily.com/2017/05/17/1OFYJ2OVJT_1.jpg",
  size: 3.6,
  radius: "",
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  border-radius:${(props) => props.radius}
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 25rem;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;

  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  ${(props) => (props.radius ? `border-radius: 0.5rem;` : "")}
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 0.4rem;
`;

const MainBackground = styled.div`
  width: 100%;
  min-width: 25rem;
`;

const MainInner = styled.div`
  width: 100%;
  min-width: 25rem;
  position: relative;
  padding-top: 45%;
  /* overflow: hidden; */
  background-image: url("${(props) => props.src}");
  /* background-position: center; */
  background-size: cover;
`;

export default Image;
