import Head from "next/head";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";

const Wrapper = styled.div``;

export default function HomePage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="//code.tidio.co/hypd4ps4dy1riahfaqmg3edky54i80mi.js"
          async
        ></script>
      </Head>
      <HeroSection />
    </Wrapper>
  );
}
