import Head from "next/head";
import styled from "styled-components";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";

const Wrapper = styled.div`
  padding-top: 3.5rem;
`;

export default function LearnPage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Learn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlassGradientIntro
        title="Learning is part of life"
        description="Keep practice every day, and you will be able to accomplish amazing things in life. It's never too late to start learning a new skill."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
    </Wrapper>
  );
}
