import React from "react";
import styled from "styled-components";
import Image from "next/image";
import IntroText from "../intros/IntroText";
import GlassButton from "../buttons/GlassButton";

const Wrapper = styled.div`
  margin-top: 4rem;
`;

const ContentWrapper = styled.div`
  max-width: 70rem;
  padding: 3.125rem auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22.5rem, 1fr));
  grid-gap: 1.875rem;
`;

const ImageWrapper = styled.div`
  display: grid;
  align-content: center;
  position: absolute;
  right: -300px;
  top: 100px;
  z-index: -1;

  @media screen and (max-width: 1300px) {
    position: relative;
    right: 0px;
    top: 0px;
  }
`;

const ButtonWrapper = styled.div`
  padding: 3rem;
  display: grid;
  justify-content: center;
  align-items: center;
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
          <Image
            src="/images/screenshots/mac_iphone_discord.png"
            alt="Discord App"
            width={1200}
            height={600}
          />
        </ImageWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <GlassButton
          title="Join Now"
          link="https://discord.gg/rUV9mYWV8K"
          titleColor="#F89B29"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
