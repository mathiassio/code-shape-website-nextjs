import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

const Wrapper = styled.div`
  max-width: 240px;
  min-height: 50px;
  padding: 12px;
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-content: center;
  gap: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

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

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Title = styled(Caption2)``;

const Subtitle = styled(SmallText)`
  opacity: 0.7;
`;

const Icon = styled.img`
  width: 29px;
  height: 29px;
`;
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;

  @media only screen and (min-width: 600px) {
    ${Wrapper}:hover & {
      transform: rotate(30deg) scale(1.2) translate(1px, 1px);
    }
  }
`;

const IconWrapper = styled.div`
  width: 45px;
  min-height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  @media only screen and (min-width: 600px) {
    ${Wrapper}:hover & {
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
  }
`;

export default function ButtonWithAnimation(props) {
  const { title, subtitle, link, icon } = props;
  return (
    <Link href={link || "/"} key={props}>
      <Wrapper>
        <IconWrapper>
          <Icon src={icon || "/images/icons/image.svg"} className="icon" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Started"}</Title>
          <Subtitle>{subtitle || "Be Creative"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}
