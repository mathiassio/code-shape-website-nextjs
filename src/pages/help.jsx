import Head from "next/head";
import styled from "styled-components";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";

const Wrapper = styled.div`
  padding-top: 3.5rem;
`;

export default function HelpPage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlassGradientIntro
        title="We are here to help"
        description="As part of the learning process, it's natural to get stuck, but don't worry, we are here to help you getting unstock to make you create amazing things."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
    </Wrapper>
  );
}
