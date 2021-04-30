import React from "react";
import { H1, BodyIntro } from "../styles/TextStyles";
import styled from "styled-components";
import ChatFlowContent from "../animations/ChatFlowContent";
import ButtonWithAnimation from "../buttons/ButtonWithAnimation";
import { motion } from "framer-motion";
import Link from "next/link";

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  max-width: 77rem;
  padding: 5rem 1.875rem;
  margin: 0 auto;
`;

const TextWrapper = styled(motion.div)`
  max-width: 31.8rem;
  display: grid;
  gap: 1.875rem;
  z-index: -1;
`;

const Title = styled(H1)`
  span {
    position: absolute;
    animation: wordswap 9s ease infinite;
    opacity: 0;
  }

  @keyframes wordswap {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    2% {
      opacity: 1;
      transform: translateY(0px);
    }
    18% {
      opacity: 1;
      transform: translateY(0px);
    }
    20% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 0;
      transform: translateY(50px);
    }
  }

  .apps {
    color: #f89b29;
    animation-delay: 0s;
  }

  .websites {
    color: #f51d7e;
    animation-delay: 3s;
  }

  .games {
    color: #ad4bde;
    animation-delay: 6s;
  }
`;

const Description = styled(BodyIntro)`
  padding-top: 3rem;
`;

const Blob = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

const Navigation = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr));
  gap: 0.5rem;
`;

const Community = styled.div`
  margin: auto;
`;

export default function HeroSection() {
  return (
    <Wrapper>
      <Blob src="/images/blobs/HeroSectionBlob.svg"></Blob>
      <ContentWrapper>
        <TextWrapper
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="title has-text-weight-bold is-1 is-size-2-mobile
            is-spaced"
          layoutId="title"
        >
          <Title>
            Learn how to create great <br />
            <span className="apps">apps</span>
            <span className="websites">websites</span>
            <span className="games">games</span>
          </Title>
          <Description>
            We bring people forward through technology, and learning is the best
            way to introduce insanely cool new things.
          </Description>
          <Navigation>
            <ButtonWithAnimation
              icon="/images/icons/learner02_dm.svg"
              link="/learn"
              backgroundColor="linear-gradient(200.44deg, #4F1EC0 13.57%, #AD4BDE 98.38%)"
              marginLeft="8px"
              marginTop="0px"
            />
            <ButtonWithAnimation
              title="Join now"
              subtitle="Collaborate"
              link="/community"
              icon="images/icons/community_light.svg"
              backgroundColor="linear-gradient(200.44deg, #F51D7E 13.57%, #F89B29 98.38%)"
              className="button"
              target="_blank"
              marginLeft="8px"
              marginTop="-5px"
            />
            <Community></Community>
          </Navigation>
        </TextWrapper>
        <ChatFlowContent />
      </ContentWrapper>
    </Wrapper>
  );
}
