import React from "react";
import styled from "styled-components";
import { tooltipData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton";

const Wrapper = styled.div`
  background-color: rgba(242, 242, 242, 0.7);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 70px;
  right: 30px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  transition: 0.3s ease-in-out;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};

  @supports (backdrop-filter: blur(40px)) or
    (-webkit-backdrop-filter: blur(40px)) {
    opacity: 0, 5;
    background-color: transparent;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  @-moz-document url-prefix() {
    background-color: rgba(242, 242, 242, 0.7);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.7);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function MenuTooltip(props) {
  const { isOpen } = props;
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  );
}
