import Head from "next/head";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";
import { H1 } from "../components/styles/TextStyles";

const Wrapper = styled.div`
  margin-top: 10rem;
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8205013.js"
        ></script>
      </Head>
      <HeroSection />
    </Wrapper>
  );
}
