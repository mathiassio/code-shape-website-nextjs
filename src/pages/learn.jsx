import Head from "next/head";
import styled from "styled-components";
import PageIntro from "../components/intros/PageIntro";

const Wrapper = styled.div``;

export default function LearnPage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Learn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title="Learn Everyday"
        description="Keep practice every day, and you will be able to accomplish amazing things in life. It's never too late to start learning a new skill."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
    </Wrapper>
  );
}
