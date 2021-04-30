import React from "react";
import styled from "styled-components";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import CommunityIntro from "../components/intros/CommunityIntro";
import ButtonWithAnimation from "../components/buttons/ButtonWithAnimation";
import Image from "next/image";

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 3.5rem;
  display: grid;
  grid-gap: 1.875rem;
`;

const ButtonWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
`;

const ImageWrapper = styled.div`
  opacity: 0.4;
  transform: scale(1.7);
  z-index: -1;
  @media (max-width: 750px) {
    transform: scale(0.8);
    opacity: 1;
  }
`;

export default function CommunityPage() {
  return (
    <Wrapper>
      <GlassGradientIntro
        title="People at its core"
        description="We believe that we can create better products together. Join our community and make an impact on learning and sharing every day."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <ContentWrapper>
        <CommunityIntro />
        <ImageWrapper>
          <Image
            src="/images/screenshots/discord_community.png"
            width="1200"
            height="800"
            className="image"
          />
        </ImageWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <ButtonWithAnimation
          title="Join now"
          subtitle="Collaborate"
          link="https://discord.com/invite/rUV9mYWV8K"
          icon="images/icons/community_light.svg"
          backgroundColor="linear-gradient(200.44deg, #F51D7E 13.57%, #F89B29 98.38%)"
          className="button"
          target="_blank"
          marginLeft="8px"
          marginTop="-5px"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
