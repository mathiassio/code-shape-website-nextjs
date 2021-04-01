import React from "react";
import styled from "styled-components";
import { footerMenuData } from "../../data/menuData";
import FooterMenuButton from "../buttons/FooterMenuButton";
import { MediumText } from "../styles/TextStyles";

const Wrapper = styled.div`
  overflow: hidden;
  background-image: url("/images/waves/FooterWave.svg");
  height: 669px;
  background-size: cover;
  background-repeat: repeat;
  display: grid;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin-top: 200px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 30px;
  justify-self: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
    justify-self: center;
    align-items: center;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  max-width: 360px;
  gap: 30px;
  grid-template-columns: repeat(2, auto);
  justify-self: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  justify-self: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    margin-left: 50px;
  }
`;

const Description = styled(MediumText)`
  color: white;
`;

const Copyright = styled(MediumText)`
  color: white;
`;

const PrivacyPolicy = styled.a`
  color: white;
`;

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <MenuWrapper count={footerMenuData.length}>
          {footerMenuData.map((item, index) => (
            <FooterMenuButton key={index} item={item} />
          ))}
        </MenuWrapper>
        <TextWrapper>
          <Description>
            This site is created using React, NextJS, Contentful and deployed
            with Netlify.
          </Description>
          <Copyright>
            Copyright © {new Date().getFullYear()} Code Shape. All rights
            reserved.
          </Copyright>
          <PrivacyPolicy href="/privacy-policy">Privacy Policy</PrivacyPolicy>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
