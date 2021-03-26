import Head from "next/head";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";
import { H1 } from "../components/styles/TextStyles";

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const PageName = styled(H1)`
  text-align: center;
  padding: 1rem;
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
    </Wrapper>
  );
}
