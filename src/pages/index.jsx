import Head from "next/head";
import styled from "styled-components";
import HeroSection from "../components/sections/HeroSection";
import OverviewSection from "../components/sections/OverviewSection";

const Wrapper = styled.div`
  margin-top: 10rem;
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
        <script
          charset="utf-8"
          type="text/javascript"
          src="//js.hsforms.net/forms/shell.js"
        ></script>
        <script>
          hbspt.forms.create(
          {
            ({ region: `${process.env.NEXT_PUBLIC_HUBSPOT_REGION}` },
            { portalId: `${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}` },
            { formId: `${process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID}` })
          }
          );
        </script>
      </Head>
      <HeroSection />
      {/* <OverviewSection /> */}
    </Wrapper>
  );
}
