import React from "react";
import styled from "styled-components";
import { BodyMain, H2, SmallText2 } from "../styles/TextStyles";

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  max-width: 77rem;
  padding: 3.125rem auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
  grid-gap: 1.875rem;
`;

const TextWrapper = styled.div`
  max-width: 22.5rem;
  display: grid;
  gap: 1.25rem;
  justify-self: center;
  align-items: center;
  padding: 1rem;
`;

const Intro = styled(SmallText2)`
  color: gray;
`;

const Title = styled(H2)``;

const Description = styled(BodyMain)``;

export default function IntroText(props) {
  const { intro, title, description } = props;
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Intro>{intro || "The wait will be over soon"}</Intro>
          <Title>{title || "Great things take time"}</Title>
          <Description>
            {description ||
              "Check in again soon to discover more content. In the meantime you are more than welcome to contact us for any questions you might have."}
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
