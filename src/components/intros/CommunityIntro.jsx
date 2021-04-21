import React from "react";
import styled from "styled-components";
import IntroText from "../intros/IntroText";

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const ContentWrapper = styled.div`
  max-width: 70rem;
  padding: 3.125rem auto;
  margin-left: -20rem;
`;

const ImageWrapper = styled.div`
position: absolute;  
z-index: -1;
top: -16rem;
left: 35rem;
  .discord {
    opacity: .5;
transform-origin: center;
transform: scale(.45) rotateX(7deg) rotateY(-20deg) perspective(500px);
  }

  @media screen and (max-width: 1300px) {
    position: relative;
    right: 0px;
    top: 0px;
  }
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
        <ImageWrapper>
          <img
            src="/images/screenshots/discord_community.png"
            alt="Discord App"
            className="discord"
            />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
