import Head from "next/head";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";

const Wrapper = styled.div`
  padding: 3.5rem;
`;

export default function HomePage() {
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
      {/* <HomeLearnSection />
      <HomeCreateSection />
      <HomeDevelopSection /> */}
    </Wrapper>
  );
}
