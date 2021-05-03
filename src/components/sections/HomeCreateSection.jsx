import styled from "styled-components";
import DropShape02 from "../additionals/DropShape02";
import { H1, H3, BodyMain } from "../styles/TextStyles";
import Image from "next/image";

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 5rem;
`;

const Title = styled(H1)`
  margin-top: 3rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const IntroText = styled.div`
  display: grid;
  align-content: items;
  justify-items: center;
  grid-gap: 1rem;
  margin-bottom: 3rem;
`;

const Text = styled(BodyMain)`
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-content: items;
  justify-items: center;
  grid-gap: 2rem;
`;

const ContentText = styled.div``;

const ContentTitle = styled(H3)`
  margin-bottom: 1rem;
`;

const BodyText = styled(BodyMain)`
  margin-bottom: 2rem;
`;

export default function HomeCreateSection() {
  return (
    <Wrapper className="max-w-6xl m-auto grid justify-center items-center">
      <DropShape02 
        title="Create"
        titleColor="linear-gradient(90deg, #F51D7E -10%, #AD4BDE 110%)"
        icon="/images/icons/graphics_dm_v003.svg"
      <Title>Create useful apps</Title>
      <IntroText>
        <Text>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </IntroText>
      <ContentWrapper>
        <ContentText>
          <ContentTitle>Create real life applications</ContentTitle>
          <BodyText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </BodyText>
          <ContentTitle>Practice what you have learned</ContentTitle>
          <BodyText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </BodyText>
          <ContentTitle>Share with the community</ContentTitle>
          <BodyText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </BodyText>
        </ContentText>
        <Image
          src="/images/screenshots/web_app_enterprise.svg"
          width="1200"
          height="800"
          className="image"
        />
      </ContentWrapper>
    </Wrapper>
  );
}
