import Head from "next/head";
import styled from "styled-components";
import EnterpriseIntro from "../components/intros/EnterpriseIntro";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import CasesSection from "../components/sections/CasesSection";

const Wrapper = styled.div`
  padding-top: 3.5rem;
`;

export default function EnterprisePage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Enterprise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlassGradientIntro
        title="When time is of the essence"
        description="We believe that we can create better products for people to enjoy if people come first. To create an excellent experience for you, simplicity and good communication are our top priorities."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <EnterpriseIntro />
      <CasesSection />
    </Wrapper>
  );
}
