import Head from "next/head"
import styled from "styled-components"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"

const Wrapper = styled.div`
  padding-top: 6rem;
`

export default function Help() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <GlassGradientIntro
        title="We are here to help"
        description="As part of the learning process, it's natural to get stuck, but don't worry, we are here to help you getting unstock to make you create amazing things."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
    </Wrapper>
  );
}
