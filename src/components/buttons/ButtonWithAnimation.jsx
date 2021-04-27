import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

const Wrapper = styled.div`
  width: 230px;
  height: 70px;
  padding: 12px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-content: center;
  gap: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  position: relative;
  overflow: hidden;

  background: linear-gradient(#fff 10%, #6058fc 200%);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(#4A4A4A 10%, #3E00FF 250%);
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
  text-align: center;
  align-self: center;
  grid-gap: 4px;
`;

const Title = styled(Caption2)`
  color: #000;

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

const Subtitle = styled(SmallText)`
  opacity: 0.7;
  color: #000;

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-top: ${(props) => props.marginTop || "0px"};
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: ${(props) => props.backgroundColor || "black"};
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  border: 1.5px solid #292929;

  @media only screen and (min-width: 600px) {
    ${Wrapper}:hover & {
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
  }
`;

export default function ButtonWithAnimation(props) {
  const {
    title,
    subtitle,
    link,
    icon,
    backgroundColor,
    target,
    marginLeft,
    marginTop,
  } = props;
  return (
    <Link href={link || "/"} target={target || "/"} key={props}>
      <Wrapper>
        <IconWrapper backgroundColor={backgroundColor}>
          <Icon
            src={icon || "/images/icons/image.svg"}
            className="icon"
            marginLeft={marginLeft}
            marginTop={marginTop}
          />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Started"}</Title>
          <Subtitle>{subtitle || "Be Creative"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}
