import Head from "next/head";
import styled from "styled-components";

import HeroSection from "../components/sections/HeroSection";
import OverviewSection from "../components/sections/OverviewSection";

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
      {/* <OverviewSection /> */}
    </Wrapper>
  );
}
