import React from "react";
import styled from "styled-components";
import { BodyIntro, H3 } from "../styles/TextStyles";
import Image from "next/image";

const Wrapper = styled.div`
margin: 0 auto;
fill: green;
`;

const ContentWrapper = styled.div`
position: relative;
`;

const Line = styled.div`
height: 10rem;
width: 2px;
background: ${props => props.backgroundColor || "white"};
margin: 0 auto;
`;

const Circle = styled.div`
height: 7rem;
width: 7rem;
background: ${props => props.backgroundColor || "white"};
border-radius: 50%;
margin: 0 auto;
display: grid;
justify-items: center;
align-items: center;
`;

const Title = styled(H3)`
text-align: center;
margin-top: 1.5rem;
background: ${props => props.titleColor || "white"};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

const Icon = styled.div`
width: 5rem;
height: 5rem;
`;


export default function DropShape(props) {
  const { backgroundColor, title, titleColor, icon } = props
    return (
    <Wrapper>
        <ContentWrapper>
        <Line backgroundColor={backgroundColor}></Line>
        <Circle backgroundColor={backgroundColor}>
          <Icon>
          <Image
            src={icon || "/images/logos/logo_black_white.png"}
            width="1200"
            height="1200"
            className="image"
          />
          </Icon>
        </Circle>
        <Title titleColor={titleColor}>{title || "Code Shape"}</Title>
        </ContentWrapper>
    </Wrapper>
  );
}
