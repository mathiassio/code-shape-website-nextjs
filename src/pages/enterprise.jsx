import Head from "next/head"
import styled from "styled-components"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import GlassGradientIntro from "../components/intros/GlassGradientIntro";

const Wrapper = styled.div`
  padding-top: 6rem;
`

export default function Enterprise() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Enterprise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob04.svg" />
      <GlassGradientIntro
        title="When time is of the essence"
        description="We believe that we can create better products for people to enjoy if people come first. To create an excellent experience for you, simplicity and good communication are our top priorities."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
    </Wrapper>
  );
}
