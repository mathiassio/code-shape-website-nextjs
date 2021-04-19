import Head from "next/head"
import styled from "styled-components"
import HeaderBackground from "../components/backgrounds/HeaderBackground"
import GlassGradientIntro from "../components/intros/GlassGradientIntro"

const Wrapper = styled.div`
  padding-top: 6rem;
`

export default function Updates() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Updates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob01.svg" />
      <GlassGradientIntro
        title="Follow the Journey with us"
        description="We want to bring you the most incredible tools and learning experiences no matter where in the world you are. Let us do this together!"
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
    </Wrapper>
  );
}
