import React from "react";
import styled from "styled-components";
import IntroText from "../intros/IntroText";

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  max-width: 70rem;
  padding: 3.125rem auto;
`;

export default function CommunityWithImage() {
  return (
    <Wrapper>
      <ContentWrapper>
        <IntroText
          intro="Join us on Discord!"
          title="Great things come from team work"
          description="Be a part of a community that cares about each other and how they reach their software development goals and design goals. Are you ready?"
        />
      </ContentWrapper>
    </Wrapper>
  );
}
