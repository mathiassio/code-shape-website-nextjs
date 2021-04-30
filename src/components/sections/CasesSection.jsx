import React from "react";
import styled from "styled-components";
import { Example } from "../additionals/Example";
import ButtonWithAnimation from "../buttons/ButtonWithAnimation";
import { BodyMain, H1 } from "../styles/TextStyles";
import Image from "next/image";

const Wrapper = styled.div``;

const TextWrapper = styled.div``;

const Title = styled(H1)`
  text-align: center;
  margin-bottom: 1rem;
`;

const Text = styled(BodyMain)`
  text-align: center;
  max-width: 40rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CaseWrapper = styled.div`
  display: grid;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  @media only screen and (min-width: 1200px) {
    height: 50rem;
  }

  @media only screen and (max-width: 1200px) {
    height: 66vw;
  }
`;

const Imac = styled.div`
  justify-self: center;
  position: absolute;
  z-index: 3;
  overflow: hidden;
`;

const ExampleWrapper = styled.div`
  margin: 0;
  padding: 0;
  justify-self: center;
  position: relative;
  display: grid;
`;

const ButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export default function CasesSection() {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>
          Cases we <span className="text-yellow-500">worked</span> on
        </Title>
        <Text>
          We want to bring people forward through technology. Have a look at the
          projects we have worked on.
        </Text>
      </TextWrapper>
      <CaseWrapper>
        <Imac>
          <Image
            src="/images/icons/imac.svg"
            width="1200"
            height="800"
            className="imac"
          />
        </Imac>
        <ExampleWrapper>
          <Example />
        </ExampleWrapper>
      </CaseWrapper>
      <ButtonWrapper>
        <ButtonWithAnimation
          title="Showcases"
          subtitle="View More"
          link="/showcase"
          icon="images/icons/business_icon_light.svg"
          backgroundColor="linear-gradient(200.44deg, #F51D7E 13.57%, #3E16BB 98.38%)"
          className="button"
          marginLeft="8px"
          marginTop="-8px"
        />
      </ButtonWrapper>
    </Wrapper>
  );
}
