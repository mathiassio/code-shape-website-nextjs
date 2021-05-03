import styled from "styled-components";
import DropShape03 from "../additionals/DropShape03";
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


export default function HomeDevelopSection() {
  return (
    <Wrapper className="max-w-6xl m-auto grid justify-center items-center">
        <DropShape03
            title="Develop"
            titleColor="linear-gradient(90deg, #47BED1 -10%, #2E7BC0 110%)"
            icon="/images/icons/smartphone_dm_v002.svg"
        />
        <Title>
            Develop your next App
        </Title>
        <IntroText>
            <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
        </IntroText>
        <ContentWrapper>
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
