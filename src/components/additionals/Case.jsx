import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { BodyMain, H3 } from "../styles/TextStyles";

const Wrapper = styled.div`
margin: 0 auto;
position: absolute;
left: ${props => props.pushLeft || "0px"};

`;

const SiteView = styled.div`
opacity: .5;
background: ${props => props.pageImage || "images/screenshots/codeshape_homepage.jpg"};
background-size: cover;
z-index: -2;
`;

const ClientProfile = styled.div`
display: grid;
grid-template-columns: 7rem auto;
align-items: center; 

.clientImage {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        z-index: 2;
        background: #fff;
        border: 1px solid #fff;
    }
`;

const Title = styled(H3)`
color: ${props => props.titleColor || "white"};
background: rgba(255,255,255,.15);
width: ${props => props.titleWidth || "20rem"};
border-radius: 10px;
padding: 1rem;
text-align: center;
margin-left: -2rem;
backdrop-filter: blur(5px);
`;



export default function Case(props) {
  const { pageImage, clientImage, title, titleColor, titleWidth, pushLeft } = props
    return (
    <Wrapper pushLeft={pushLeft}>
        <SiteView pageImage={pageImage}>
        </SiteView>
        <ClientProfile>
            <img src={clientImage || "/images/logos/logo.png"} className="clientImage" />
            <Title titleColor={titleColor} titleWidth={titleWidth}>{title || "codeshape"}</Title>
        </ClientProfile>
    </Wrapper>
  );
}
