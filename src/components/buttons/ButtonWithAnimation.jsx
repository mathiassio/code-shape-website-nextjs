import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

const Wrapper = styled.div`
  width: 240px;
  height: 80px;
  padding: 12px;
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-content: center;
  gap: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  background: linear-gradient(#fff 10%, #6058FC 200%);
  position: relative;
  overflow: hidden;

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
  text-align: center;
  align-self: center;
  grid-gap: 4px;
`;

const Title = styled(Caption2)`
color: #000;
`;

const Subtitle = styled(SmallText)`
  opacity: 0.7;
  color: #000;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
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
  width: 100px;
  height: 100px;
  background: linear-gradient(200.44deg, #4F1EC0 13.57%, #AD4BDE 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;

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
