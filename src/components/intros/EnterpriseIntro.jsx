import React from "react";
import styled from "styled-components";
import { H3, BodyMain } from "../styles/TextStyles";

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const TextWrapper = styled.div`
margin: 0 auto;
width: 23rem;
line-height: 3em;
`;

const Title = styled(H3)`
font-weight: normal;

.time {
    color: #F89B29;
}

.yourself {
    color: #F51D7E;
}
`;

const Text = styled(BodyMain)``;

export default function EnterpriseIntro() {
  return (
    <Wrapper>
        <TextWrapper>
        <Title>
        No <span className="time">time</span> to learn?<br></br>
No time to do it <span className="yourself">yourself</span>?
        </Title>
        <Text>
        Be a part of a community that cares 
about each other and how they reach
their software development goals and 
design goals. Are you ready?
        </Text>
        </TextWrapper>
    </Wrapper>
  );
}
