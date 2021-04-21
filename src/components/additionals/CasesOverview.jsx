import React from "react";
import styled from "styled-components";
import { BodyMain, H3 } from "../styles/TextStyles";
import Case from "./Case";

const Wrapper = styled.div`
margin: 0 auto;
`;

const Imac = styled.div`
display: grid;
justify-items: center;
margin-bottom: -26rem;
`;

const Navigation = styled.div`
 display: grid;
 grid-template-columns: auto auto;
 width: 90rem;
 align-self: center;
 justify-self: center;
 justify-items: center;
 align-items: center;
 margin: 0 auto;
`;

const CasesWrapper = styled.div`
position: absolute;
z-index: -1;
`;

export default function CasesOverview(props) {
  const { image01, image02, image03 } = props
    return (
    <Wrapper>
        <Imac>
        <CasesWrapper>
            <Case className="juliusCase"
            pageImage="images/cases/juliusCaseImg06.png"
            clientImage="images/cases/juliusCaseImg07.jpg"
            title="juliusmygind.dk"
            titleColor="#F89B29"
            titleWidth="20rem"
            pushLeft="-400px"
            />
            <Case className="strineCase"
            pageImage="images/cases/stineCaseImg02.png"
            clientImage="images/cases/stineCaseImg01.jpg"
            title="oym.dk"
            titleColor="#646757"
            titleWidth="12rem"
            pushLeft="500px"
            />
            <Case className="flexCase"
            pageImage="images/cases/flexCase01.jpg"
            clientImage="images/cases/flexCase02.png"
            title="flexfrisør.dk"
            titleColor="#242424"
            titleWidth="20rem"
            pushLeft="1200px"
            />
        </CasesWrapper>
            <img src="images/icons/imac.svg" />
        </Imac>
        <Navigation>
            <img src="images/icons/prev.svg" />
            <img src="images/icons/next.svg" />
        </Navigation>
    </Wrapper>
  );
}
