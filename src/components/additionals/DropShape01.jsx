import React from "react";
import styled from "styled-components";
import { BodyIntro, H3 } from "../styles/TextStyles";
import Image from "next/image";

const Wrapper = styled.div`
margin: 0 auto;
`;

const ContentWrapper = styled.div`
position: relative;
`;

const DropWrapper = styled.div`
margin-bottom: -6.5rem;

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
margin: 0 auto;
`;


export default function DropShape01(props) {
  const { fillColor, title, titleColor, icon } = props
    return (
    <Wrapper>
        <ContentWrapper>
          <DropWrapper fillColor={fillColor}>
          <svg xmlns="http://www.w3.org/2000/svg" width="130" height="330" viewBox="0 0 289.697 747.501">
  <defs>
    <linearGradient id="linear-gradient01" y1="0.809" x2="1" y2="0.809" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#F51D7E"/>
      <stop offset="1" stop-color="#F89B29"/>
    </linearGradient>
  </defs>
  <path id="drop_v001" d="M294.82,628.881A144.845,144.845,0,1,1,55.05,519.531q8.985-17.19,16.39-34.36a539.693,539.693,0,0,0,25.21-71.86q4.875-17.97,8.51-35.93c2.55-11.97,4.89-23.95,7.12-35.93a1236.3,1236.3,0,0,0,18.35-143.71q1.14-17.97,1.67-35.93c.3-11.98.4-23.95.21-35.93s-.68-23.95-1.53-35.93c-.43-5.99-.95-11.98-1.62-17.96s-1.43-11.98-2.51-17.97a23.528,23.528,0,1,1,46.3,0c-1.08,5.99-1.85,11.98-2.51,17.97s-1.19,11.97-1.62,17.96q-1.275,17.97-1.53,35.93c-.19,11.98-.09,23.95.21,35.93q.51,17.97,1.67,35.93a1236.322,1236.322,0,0,0,18.35,143.71c2.23,11.98,4.57,23.96,7.12,35.93q3.645,17.97,8.51,35.93a539.7,539.7,0,0,0,25.21,71.86q7.44,17.19,16.39,34.36a144.417,144.417,0,0,1,49.87,109.35Z" transform="translate(-5.123 -26.293)" fill="url(#linear-gradient01)"/>
</svg>
       </DropWrapper>
          <Icon>
          <Image
            src={icon || "/images/logos/logo_black_white.png"}
            width="1200"
            height="1200"
            className="image"
          />
          </Icon>
        <Title titleColor={titleColor}>{title || "Code Shape"}</Title>
        </ContentWrapper>
    </Wrapper>
  );
}
