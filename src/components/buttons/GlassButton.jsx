import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { BodyMain } from "../styles/TextStyles";

const Wrapper = styled.div`
  max-width: 15rem;
  min-height: 3rem;
  padding: 1rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 1.25rem;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  margin-left: 1rem;
  margin-right: 1rem;

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

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`;

const Title = styled(BodyMain)`
  font-weight: 900;
  color: ${(props) => props.titleColor || "white"};
`;

export default function GlassButton(props) {
  const { link, title, titleColor } = props;
  return (
    <Link href={link || "/"} target="_blank" key={props}>
      <Wrapper>
        <Title titleColor={titleColor}>{title || "Join Now!"}</Title>
      </Wrapper>
    </Link>
  );
}
