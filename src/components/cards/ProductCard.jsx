import React from "react";
import styled from "styled-components";
import { H3, BodyMain } from "../styles/TextStyles";

const Wrapper = styled.div`
@media only screen and (min-width: 1281px) {
  -webkit-perspective: 600px;
}
`;

const ContentWrapper = styled.div`
display: grid;
  align-items: center;
  gap: 20px;
  padding: 12px;
  width: 20rem;
  height: 25rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid white;
  -webkit-transform: ${props => props.transform || "rotateY(0deg)"};

  background: rgba(255,255,255,.15);
  @media (prefers-color-scheme: dark) {
    background: rgba(255,255,255,.15);
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
`

const TextWrapper = styled.div`
  display: grid;
  text-align: center;
  align-self: center;
  grid-gap: 4px;
`;

const Title = styled(H3)`
  color: #F89B29;
`;

const Subtitle = styled(BodyMain)`
  color: #000;

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
`;

const IconWrapper = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(200.44deg, #4F1EC0 13.57%, #AD4BDE 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  border: none;

  @media only screen and (min-width: 600px) {
    ${Wrapper}:hover & {
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
  }
`;

export default function ProductCard(props) {
  const {
    title,
    subtitle,
    icon,
    transform,
  } = props;
  return (
      <Wrapper>
        <ContentWrapper transform={transform}>
        <IconWrapper>
          <Icon
            src={icon || "/images/icons/image.svg"}
            className="icon"
          />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Started"}</Title>
          <Subtitle>{subtitle || "Be Creative"}</Subtitle>
        </TextWrapper>
        </ContentWrapper>
      </Wrapper>
  );
}
