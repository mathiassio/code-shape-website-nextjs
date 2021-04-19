import React from "react"
import styled from "styled-components"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"
import CommunityIntro from "../components/intros/CommunityIntro"
import HeaderBackground from "../components/backgrounds/HeaderBackground"

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
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
    </Wrapper>
  );
}
