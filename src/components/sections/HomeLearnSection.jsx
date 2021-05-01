import styled from "styled-components";
import DropShape from "../additionals/DropShape";
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
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-content: items;
  justify-items: center;
  grid-gap: 1rem;
  margin-bottom: 3rem;
`;

const Text = styled(BodyMain)`
  max-width: 30rem;
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

export default function HomeLearnSection() {
  return (
    <Wrapper className="max-w-6xl m-auto grid justify-center items-center">
      <DropShape
        backgroundColor="linear-gradient(90deg, #F51D7E -10%, #F89B29 110%)"
        title="Learn"
        titleColor="linear-gradient(90deg, #F51D7E -10%, #F89B29 110%)"
        icon="/images/icons/learner02_dm.svg"
      />
      <Title>Start by learning</Title>
      <IntroText>
        <Text>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
        <Text>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </IntroText>
      <ContentWrapper>
        <Image
          src="/images/screenshots/web_app_enterprise.svg"
          width="1200"
          height="800"
          className="image"
        />
        <ContentText>
          <ContentTitle>Learn with Community</ContentTitle>
          <BodyText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </BodyText>
          <ContentTitle>Discover Courses</ContentTitle>
          <BodyText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </BodyText>
          <ContentTitle>Get familiar with the great tools</ContentTitle>
          <BodyText>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </BodyText>
        </ContentText>
      </ContentWrapper>
    </Wrapper>
  );
}
