import React from "react";
import styled from "styled-components";
import PageIntro from "../components/intros/PageIntro";
import IntroMinimal from "../components/intros/IntroMinimal";
import ButtonWithAnimation from "../components/buttons/ButtonWithAnimation";
import Image from "next/image";

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
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
      <PageIntro
        title="It is all about People"
        description="We believe that we can create better products together. Join our community and make an impact on learning and sharing every day."
        gradientColor="-webkit-linear-gradient(left, #F50686, #8725C2)"
      />
      <ContentWrapper className="mt-8">
        <IntroMinimal
          intro="Join us on Element!"
          title="Great things come from team work"
          description="Be a part of a community that cares about each other and how they reach their software development goals and design goals. Are you ready?"
        />
        <ImageWrapper>
          <Image
            src="/images/screenshots/element_community.png"
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
          link="https://matrix.to/#/!DIarrAEFsXOjVqLlUI:matrix.org?via=matrix.org"
          icon="images/icons/community_light.svg"
          backgroundColor="linear-gradient(200.44deg, #F50686 13.57%, #8725C2 98.38%)"
          className="button"
          target="_blank"
          marginLeft="8px"
          marginTop="-5px"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
