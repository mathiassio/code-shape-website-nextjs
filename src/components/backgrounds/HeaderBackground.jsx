import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Image = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

export default function HeaderBackground(props) {
  const { image } = props;
  return (
    <Wrapper>
      <Image src={image || "../images/logo/logo.svg"} />
    </Wrapper>
  );
}
