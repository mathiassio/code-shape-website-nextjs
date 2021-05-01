import React from "react";
import { H1, H2, BodyIntro, BodyMain } from "../styles/TextStyles";
import styled from "styled-components";
import ProductCard from "../cards/ProductCard"
import Image from "next/image";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
`;

const TitleWrapper = styled(H1)`
text-align: center;
margin-bottom: 1rem;
margin-top: 15rem;

.products {
    color: #F89B29;
}
`;

const Text = styled(BodyMain)`
text-align: center;
  width: 40rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BackgroundWrapper = styled.div`
margin-top: 5rem;
display: grid;
justify-content: center;
position: absolute;
`

const CardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
grid-gap: 2rem;
justify-items: center;
justify-self: center;
margin-bottom: 20rem;
margin-top: 10rem;
`


export default function ProductSection() {
  return (
    <Wrapper>
      <TitleWrapper><span className="products">Products</span> we offer</TitleWrapper>
        <Text>We offer you a cool way to incorporate new products into your daily 
routine, and make them seemingly work with your business.</Text>
<BackgroundWrapper>
<Image
            src="/images/screenshots/codeshape_homepage_angled.png"
            width="1429"
            height="579.5"
            className="image"
          />
</BackgroundWrapper>
<CardWrapper>
<ProductCard 
title="Mobile Apps"
subtitle="Having a mobile app will let 
you reach your audience 
while on the road."
icon="images/icons/smartphone_dm_v002.svg"
transform="rotateY(20deg)"
/>
<ProductCard 
title="Web Apps"
subtitle="Having a website is a good 
way to express yourself to 
your audience and the world."
icon="images/icons/web_dm_v002.svg"
/>
<ProductCard 
title="Games"
subtitle="Incorporating games in 
learning will enhance the 
experience overall."
icon="images/icons/controller_dm_v002.svg"
transform="rotateY(-20deg)"
/>
</CardWrapper>
    </Wrapper>
  );
}
