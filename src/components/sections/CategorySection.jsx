import React from "react";
import styled from "styled-components";
import { H3, MediumText } from "../styles/TextStyles";

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 70rem;
  padding: 1.875rem;
`;

const TextWrapper = styled.div`
  line-height: 3rem;
`;

const Title = styled(H3)``;

const Description = styled(MediumText)``;

const CategoryWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`;

const Categories = styled.div`
  border-radius: 0.8rem;
  text-align: center;
  padding: 0.4rem;
  margin: 0 auto;
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
  }
`;

export default function CategorySection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Browse by Categories</Title>
          <Description>
            Use the category tags to narrow down what you are looking for.
          </Description>
        </TextWrapper>
        <CategoryWrapper></CategoryWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
