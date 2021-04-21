import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

const Wrapper = styled.div`
margin: 0 auto;  
width: 150px;
padding-top: 5px;
  height: 50px;
  border-radius: 15px;
  align-content: center;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  background: linear-gradient(#fff 10%, #6058FC 200%);
`;

const TextWrapper = styled.div`
display: grid;
grid-template-rows: 20px 20px;
align-items: center;
`;

const Title = styled(Caption2)`
color: #000;
text-align: center;
`;

const Subtitle = styled(SmallText)`
  opacity: 0.7;
  color: #000;
  text-align: center;
`;

export default function BasicButton(props) {
  const { title, subtitle, link } = props;
  return (
    <Link href={link || "/"} key={props}>
      <Wrapper>
        <TextWrapper>
          <Title>{title || "Get Started"}</Title>
          <Subtitle>{subtitle || "Be Creative"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  );
}
