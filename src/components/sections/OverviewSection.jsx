import React from "react";
import { H1, H2, BodyIntro, BodyMain } from "../styles/TextStyles";
import styled from "styled-components";
import ProductOverview from "../additionals/ProductOverview";

const Wrapper = styled.div`
  margin-top: 25rem;
`;

const TitleWrapper = styled(H1)`
  background: linear-gradient(
    90deg,
    #f89b29 0%,
    #f51d7e 33%,
    #ad4bde 66%,
    #3e16bb 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 20rem;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 3rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-items: center;
  margin-top: 5rem;
`;

const TextWrapper = styled.div`
  text-align: right;
  width: 40rem;
`;

const Text = styled(BodyMain)``;

const Subtext = styled(BodyMain)`
  opacity: 0.5;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const SubTitle = styled(H1)``;

export default function OverviewSection() {
  return (
    <Wrapper>
      <TitleWrapper>Create with Code</TitleWrapper>
      <ContentWrapper>
        <ProductOverview
          image01="images/icons/learnerCircle.svg"
          image02="images/icons/SupportersCircle.svg"
          image03="images/icons/enterpriseCircle.svg"
          titleColor="#F89B29"
          title="Learners"
          text="It is never too late to start coding and change your career. 
            Start in your own pace but be consistant. Get started with learning."
        />
        <TextWrapper>
          <Text>
            People worldwide come here to learn more about how to create amazing
            things that change the way we interact with each other. We look
            forward to seeing what you can make!
          </Text>
          <Subtext>Do you have the time right now?</Subtext>
          <SubTitle>Focus on what matters the most</SubTitle>
          <Text>
            Many people start their projects thinking it might not take up their
            time, but it does that in reality. So take your time learning, and
            you will experience great things. If you don't have the time right
            now, we will be more than happy to help you with your project!
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
