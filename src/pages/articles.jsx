import Head from "next/head";
import styled from "styled-components";
import { getListings } from "../../utils/contentful";
import Link from "next/link";
import Image from "next/image";
import { H2, MediumText } from "../components/styles/TextStyles";
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import CategorySection from "../components/sections/CategorySection";

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
`;

const Main = styled.main`
  padding: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-content: center;
`;

const Card = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;
  top: 0;
  overflow: hidden;
  border-radius: 1.2rem;
  @media (prefers-color-scheme: dark) {
    background: #151515;
    color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(23, 23, 23, 0.2),
      inset 0px 0px 0px 0.5px rgba(23, 23, 23, 0.5);
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(24, 0, 102, 0.3),
        inset 0px 0px 0px 0.5px rgba(63, 63, 63, 0.5);
      transform: translateY(-3px);
    }
  }
  @media (prefers-color-scheme: light) {
    background: #ffffff;
    color: black;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(23, 23, 23, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(255, 255, 255, 0.3),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
`;

const FeaturedImage = styled.a``;

const Content = styled.div`
  display: grid;
`;

const TextWrapper = styled(H2)`
  display: grid;
  grid-gap: 1.875rem;
  padding: 1.5rem;
`;

const Title = styled(H2)`
  display: grid;
  grid-gap: 1.875rem;
`;

const Excerpt = styled(MediumText)`
  display: grid;
  grid-gap: 1.875rem;
  color: #fff;
`;

export async function getStaticProps() {
  const data = await getListings();

  return {
    props: { listings: data.articlePostCollection.items },
  };
}

export default function Articles({ listings }) {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob02.svg" />
      <GlassGradientIntro
        title="Reading is making Meaning"
        description="We believe we can create amazing things together by keeping our knowledge up to date. Therefore we will do our best to deliver that to you every week."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <CategorySection />
      <Main>
        {listings.map((listing) => (
          <Card key={listing.slug}>
            <Link key={listing.slug} href={`/articles/${listing.slug}`}>
              <Content>
                <FeaturedImage>
                  <Image
                    src={listing.featuredImage.url}
                    alt={listing.featuredImage.title}
                    width="400"
                    height="200"
                    layout="responsive"
                  />
                </FeaturedImage>
                <TextWrapper>
                  <Title>{listing.title}</Title>
                  <Excerpt>{listing.excerpt}</Excerpt>
                </TextWrapper>
              </Content>
            </Link>
          </Card>
        ))}
      </Main>
    </Wrapper>
  );
}
