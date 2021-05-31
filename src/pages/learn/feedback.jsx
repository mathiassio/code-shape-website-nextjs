import Head from "next/head";
import styled from "styled-components";
import PageIntro from "../../components/intros/PageIntro";
import loadable from "@loadable/component";
const Feedback = loadable(() => import("feeder-react-feedback/dist/Feedback"));
import "feeder-react-feedback/dist/feeder-react-feedback.css";

const Wrapper = styled.div``;

export default function FeedbackPage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title="Feedback"
        description="We want to create the best product and learning experience possible. If we are to succeed, feedback is a vital organ and much appreciated."
      />
      <Feedback
        projectId="60b48f4d92f1880004fb29fe"
        email="true"
        primaryColor="#0395E4"
      />
    </Wrapper>
  );
}
