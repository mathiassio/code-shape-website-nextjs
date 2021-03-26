import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

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

const Wrapper = styled.div`
  max-width: 240px;
  min-height: 50px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  display: grid;
  grid-template-columns: 53px auto;
  align-content: center;
  gap: 20px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media only screen and (min-width: 600px) {
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(23, 0, 102, 0.5),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);

      .icon {
        transform: scale(1.2);
      }
    }
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Title = styled(Caption2)`
  color: black;
`;

const Subtitle = styled(SmallText)`
  color: black;
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
