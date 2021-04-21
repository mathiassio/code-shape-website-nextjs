import React from "react";
import { H1, BodyIntro } from "../styles/TextStyles";
import styled from "styled-components";
import ChatFlowContent from "../animations/ChatFlowContent";
import ButtonWithAnimation from "../buttons/ButtonWithAnimation";
import { motion } from "framer-motion";

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  max-width: 77rem;
  padding: 5rem 1.875rem;
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  max-width: 22.5rem;
  display: grid;
  gap: 1.875rem;
  z-index: -1;
`;
const Title = styled(H1)`
span {
  position: absolute;
  margin-left: 20px;
  // animation: wordswap 9s ease infinite;
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
    transform: translateY(50px)
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}

.apps{
  color: #F89B29;
  animation-delay: 0s;
}

.websites{
  color: #F51D7E;
  animation-delay: 3s;
}

.games{
  color: #AD4BDE;
  animation-delay: 6s;
}
`;

const Description = styled(BodyIntro)``;

const Blob = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

export default function HeroSection() {
  return (
    <Wrapper>
      <Blob src="/images/blobs/HeroSectionBlob.svg"></Blob>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced"
              layoutId="title"
            >
              Learn how to create great <span className="apps">apps</span><span className="websites">websites</span><span className="games">games</span>
            </motion.h1>
          </Title>
          <Description>
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced"
              layoutId="title"
            >
              We bring people forward through technology, and learning is the
              best way to introduce insanely cool new things.
            </motion.h1>
          </Description>
          <ButtonWithAnimation
            icon="/images/icons/learner02_dm.svg"
            link="/learn"
            backgroundColor="linear-gradient(200.44deg, #4F1EC0 13.57%, #AD4BDE 98.38%)"
            marginLeft="8px"
            marginTop="0px"
          />
        </TextWrapper>
        <ChatFlowContent />
      </ContentWrapper>
    </Wrapper>
  );
}
