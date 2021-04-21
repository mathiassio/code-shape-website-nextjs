import React from "react";
import styled from "styled-components";
import CasesOverview from "../additionals/CasesOverview";
import ButtonWithAnimation from "../buttons/ButtonWithAnimation";
import { BodyMain, H1 } from "../styles/TextStyles";

const Wrapper = styled.div`
margin-top: 15rem;
`;

const TextWrapper = styled.div``;

const Title = styled(H1)`
text-align: center;
margin-bottom: 1rem;

.worked {
    color: #F89B29;
}
`;

const Text = styled(BodyMain)`
text-align: center;
width: 40rem;
margin: 0 auto;
`;

const CaseWrapper = styled.div`
margin-top: 2rem;
margin-bottom: 21rem;
`;

export default function CasesSection(props) {
  const { image01, image02, image03 } = props
    return (
    <Wrapper>
        <TextWrapper>
            <Title>
            Cases we <span className="worked">worked</span> on
            </Title>
            <Text>
                We want to bring people forward through technology. Have a look at 
the projects we have worked on.
</Text>
        </TextWrapper>
        <CaseWrapper>
            <CasesOverview />
        </CaseWrapper>
        <ButtonWithAnimation 
        title="View all"
        subtitle=""
        link="/showcase"
        icon="images/icons/business_icon_light.svg"
        backgroundColor="linear-gradient(200.44deg, #F51D7E 13.57%, #3E16BB 98.38%)"
        className="button"
        marginLeft="8px"
        marginTop="-8px"
        />
    </Wrapper>
  );
}
