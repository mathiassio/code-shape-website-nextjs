import React from "react";
import styled from "styled-components";
import { H2, BodyMain } from "../styles/TextStyles";

const Wrapper = styled.div``;

const ContentWrapper = styled.div``;

const TextWrapper = styled.div``;

const Title = styled(H2)`
  background: ${(props) =>
    props.gradientColor ||
    "-webkit-linear-gradient(left, #f89b29, #ff489a, #a255ff, #3a13b8)"};
  background-clip: text;
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
      <ContentWrapper className="text-center m-auto max-w-md lg:max-w-xl lg:text-left lg:m-0">
        <TextWrapper className="grid gap-5">
          <Title gradientColor={gradientColor}>
            {title || "Section Intro Text"}
          </Title>
          <Description className="mt-4 text-1.5xl leading-normal md:text-2xl text-gray-500">
            {description ||
              "People worldwide come here to learn more about how to create amazing things that change the way we interact with each other. We look forward to seeing what you can make!"}
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
