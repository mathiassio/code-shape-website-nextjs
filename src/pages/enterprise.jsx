import Head from "next/head";
import styled from "styled-components";
import EnterpriseIntro from "../components/intros/EnterpriseIntro";
import PageIntro from "../components/intros/PageIntro";
import CasesSection from "../components/sections/CasesSection";
import ProductSection from "../components/sections/ProductSection";

const Wrapper = styled.div``;

export default function EnterprisePage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Enterprise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title="When time is of the essence"
        description="We believe that we can create better products for people to enjoy if people come first. To create an excellent experience for you, simplicity and good communication are our top priorities."
        gradientColor="-webkit-linear-gradient(left, #037de8, #0fd9d9)"
      />
      <EnterpriseIntro />
      <CasesSection />
      <ProductSection />
    </Wrapper>
  );
}
