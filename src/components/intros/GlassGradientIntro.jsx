import React from "react";
import styled from "styled-components";
import { H1, BodyMain } from "../styles/TextStyles";

const Wrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1.875rem;
  padding: 1.875rem;
  margin: 1.875rem;
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
    background-color: rgba(242, 242, 242, 0.9);
    @media (prefers-color-scheme: dark) {
      background-color: rgba(50, 50, 52, 0.9);
    }
  }
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 1.25rem;
  justify-self: center;
  align-items: center;
`;

const Title = styled(H1)`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  background: ${(props) =>
    props.gradientColor ||
    "-webkit-linear-gradient(left, #f89b29, #ff489a, #a255ff, #3a13b8)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(BodyMain)`
  margin: 0 auto;
  text-align: center;
`;

export default function GradientIntro(props) {
  const { title, description, gradientColor } = props;
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title gradientColor={gradientColor}>
            {title || "Create with Code"}
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
