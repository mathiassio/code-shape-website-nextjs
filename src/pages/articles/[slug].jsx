import Head from "next/head";
import styled from "styled-components";
import { BodyMain, H1 } from "../../components/styles/TextStyles";
import { getArticles, getArticle } from "../../../utils/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Utterances from "../../../utils/utterances";

export async function getStaticPaths() {
  const data = await getArticles();

  return {
    paths: data.articleCollection.items.map((listing) => ({
      params: { slug: listing.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getArticle(context.params.slug);

  return {
    props: { listing: data.articleCollection.items[0] },
  };
}

const Wrapper = styled.div`
  margin: 9rem auto;
  display: grid;
  grid-gap: 1.875rem;
  max-width: 77rem;
`;

const Header = styled.div`
  display: grid;
  grid-gap: 1rem;
  text-align: center;
  padding: 1.2rem;
`;

const Date = styled(BodyMain)`
  text-align: center;
  color: #757372;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const FeaturedImage = styled.div`
  .featuredImage {
    border-radius: 1.25rem;
    object-fit: cover;
  }
`;

const Title = styled(H1)`
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 auto;
  padding: 1.2rem;
`;

export default function ArticlesPost({ listing }) {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Date>{listing.date}</Date>
        <Title>{listing.title}</Title>
      </Header>
      <FeaturedImage>
        <Image
          src={listing.featuredImage.url}
          alt={listing.featuredImage.title}
          width={listing.featuredImage.width}
          height={listing.featuredImage.height}
          layout="responsive"
          className="featuredImage"
        />
      </FeaturedImage>
      <Content>{documentToReactComponents(listing.content.json)}</Content>
      <Utterances />
    </Wrapper>
  );
}
