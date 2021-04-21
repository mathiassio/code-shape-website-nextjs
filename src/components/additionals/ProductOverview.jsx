import React from "react";
import styled from "styled-components";
import BasicButton from "../buttons/BasicButton";
import { BodyMain, H3 } from "../styles/TextStyles";

const Wrapper = styled.div`
`;

const ProductWrapper = styled.div`
.image01{
    width: 200px;
    height: 200px;
    z-index: 1;
}

.image01:active {
    transform: scale(1.2) rotate(5deg);
    z-index: 2;
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}

.image02{
    width: 200px;
    height: 200px;
    z-index: 1;
}

.image02:active {
    transform: scale(1.2) rotate(5deg);
    z-index: 2;
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}

.image03{
    width: 200px;
    height: 200px;
    z-index: 1;
}

.image03:active {
    transform: scale(1.2) rotate(5deg);
    z-index: 2;
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
}
`;

const Products = styled.div`
display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-items: center;

    *,
    & {
      transition: 0.1s ease-in;
    }
`;

const BackgroundWrapper = styled.div`
z-index: -1;
margin-bottom: -280px;
transform: scale(1.1);
`;

const TextWrapper = styled.div`
margin-top: 6rem;
`;

const Title01 = styled(H3)`
text-align: center;
color: #F89B29;
`;

const Title02 = styled(H3)`
text-align: center;
color: #F51D7E;
display: none;
`;

const Title03 = styled(H3)`
text-align: center;
color: #AD4BDE;
display: none;
`;

const Text01 = styled(BodyMain)`
text-align: center;
width: 40rem;
margin-bottom: 1rem;
`;

const Text02 = styled(BodyMain)`
text-align: center;
width: 40rem;
margin-bottom: 1rem;
display: none;
`;

const Text03 = styled(BodyMain)`
text-align: center;
width: 40rem;
margin-bottom: 1rem;
display: none;
`;

export default function ProductOverview(props) {
  const { image01, image02, image03 } = props
    return (
    <Wrapper>
        <ProductWrapper>
            <BackgroundWrapper>
                <img src="images/icons/iphone.svg" className="bg"/>
            </BackgroundWrapper>
            <Products>
            <img
                    src={image01 || "images/icons/help_light.svg" }
                    className="image01"
                />
                <img
                    src={image02 || "images/icons/help_light.svg" }
                    className="image02"
                />
                <img
                    src={image03 || "images/icons/help_light.svg" }
                    className="image03"
                />
            </Products>
        <TextWrapper>
            <Title01 className="Title01">
                Learners
            </Title01>
            <Title02 className="Title02">
                Supporters
            </Title02>
            <Title03 className="Title03">
                Enterprise
            </Title03>
            <Text01 className="Text01">
            It is never too late to start coding and change your career. 
Start in your own pace but be consistant. Get started with learning.
            </Text01>
            <Text02 className="Text02">
            Enhance your already existing knowledge and learn new 
features while helpings others. Get started with the community.
            </Text02>
            <Text03 className="Text03">
            Don’t have time to do it yourself? No problem we will help you 
out so you can spend the time on what matters.
            </Text03>
            <BasicButton className="button01"
                title="Get Started"
                subtitle="Be Creative"
                link="/learn"
            />
            <BasicButton className="button02"
                title="Get Started"
                subtitle="Join Discord"
                link="/community"
            />
            <BasicButton className="button03"
                title="Get Started"
                subtitle="We'll make it"
                link="/enterprise"
            />
        </TextWrapper>
        </ProductWrapper>
    </Wrapper>
  );
}
