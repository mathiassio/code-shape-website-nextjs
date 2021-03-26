import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { BodyMain, MediumText } from "../styles/TextStyles";

export default function MessageNotificationReverted(props) {
  const { name, text, image, link, nameColor, borderColor } = props;
  return (
    <Link href={link || "/"} key={props}>
      <Wrapper>
        <TextWrapper>
          <Name nameColor={nameColor}>{name || "Mr. Awesome"}</Name>
          <Text>
            {text || "Can you help me learn how to engage my audience? 👋🏼"}
          </Text>
        </TextWrapper>
        <ImageWrapper>
          <Image
            borderColor={borderColor || "3px solid white"}
            src={image || "/images/profiles/mathias.svg"}
            className="icon"
          />
        </ImageWrapper>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  gap: 1.25rem;
  border-radius: 1.25rem;
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

const ImageWrapper = styled.div`
  width: 4.375rem;
  min-height: 4.375rem;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`;

const Image = styled.img`
  border: ${(props) => props.borderColor || "3px solid turquoise"};
  position: relative;
  display: inline-block;
  height: 70px;
  width: 70px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(255, 255, 255);

  @media (prefers-color-scheme: dark) {
    background-color: #202020;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 0.3rem;
  min-height: 1.25rem;
`;

const Name = styled(BodyMain)`
  font-weight: 900;
  color: ${(props) => props.nameColor || "turquoise"};
`;

const Text = styled(MediumText)`
  color: black;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;
