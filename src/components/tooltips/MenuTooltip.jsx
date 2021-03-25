import React from "react";
import styled from "styled-components";
import { tooltipData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton";

export default function MenuTooltip(props) {
  const { isOpen } = props;
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton key={index} item={item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 30px;
  background: rgba(133, 133, 133, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  padding: 20px;
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  z-index: 1;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen
      ? "skewY(0) rotate(0) translateY(0)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};

  @supports (backdrop-filter: blur(40px)) or
    (-webkit-backdrop-filter: blur(40px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
  }

  @-moz-document url-prefix() {
    background-color: rgba(242, 242, 242, 0.9);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.9);
    }
  }
`;
