import React from "react";
import styled from "styled-components";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import CommunityIntro from "../components/intros/CommunityIntro";
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import ButtonWithAnimation from  "../components/buttons/ButtonWithAnimation"

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
`;

const ButtonWrapper = styled.div`
margin-top: 3rem;
`;

export default function CommunityPage() {
  return (
    <Wrapper>
      <HeaderBackground image="../images/blobs/HeaderBlob03.svg" />
      <GlassGradientIntro
        title="People at it's core"
        description="We believe that we can create better products together. Join our community and make an impact on learning and sharing everyday."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <CommunityIntro />
      <ButtonWrapper>
      <ButtonWithAnimation
      title="Join now"
      subtitle=""
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
