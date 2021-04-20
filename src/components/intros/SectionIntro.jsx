import React from "react";
import styled from "styled-components";
import { H2, BodyMain } from "../styles/TextStyles";

const Wrapper = styled.div`
  padding: 3rem 1.875rem 1rem 1.875rem;
`;

const ContentWrapper = styled.div`
  max-width: 37.5rem;
  display: grid;
  grid-gap: 1.875rem;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const Title = styled(H2)`
  background: ${(props) =>
    props.gradientColor ||
    "-webkit-linear-gradient(left, #f89b29, #ff489a, #a255ff, #3a13b8)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(BodyMain)`
  margin: 0 auto;
`;

export default function GradientIntro(props) {
  const { title, description, gradientColor } = props;
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title gradientColor={gradientColor}>
            {title || "Section Intro Text"}
          </Title>
          <Description>
            {description ||
              "People worldwide come here to learn more about how to create amazing things that change the way we interact with each other. We look forward to seeing what you can make!"}
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
