import Head from "next/head";
import styled from "styled-components";
import { H1 } from "../components/styles/TextStyles";

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const PageName = styled(H1)`
  text-align: center;
  padding: 1rem;
`;

export default function Learn() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Learn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageName>Learn Page</PageName>
    </Wrapper>
  );
}
