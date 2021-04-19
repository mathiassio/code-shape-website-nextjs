import Head from "next/head";
import styled from "styled-components";
import { H2, H3 } from "../../components/styles/TextStyles";
import { getListings, getListing } from "../../../utils/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function getStaticPaths() {
  const data = await getListings();

  return {
    paths: data.articlePostCollection.items.map((listing) => ({
      params: { slug: listing.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getListing(context.params.slug);

  return {
    props: { listing: data.articlePostCollection.items[0] },
  };
}

const Wrapper = styled.div`
  margin-top: 10rem;
`;

const Date = styled(H3)`
  text-align: center;
`;

const FeaturedImage = styled.div``;

const Title = styled(H2)`
  text-align: center;
`;

const Content = styled.div``;

export default function ArticlesPost({ listing }) {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Date>{listing.date}</Date>
      <Title>{listing.title}</Title>
      <FeaturedImage>
        <Image
          src={listing.featuredImage.url}
          alt={listing.featuredImage.title}
          width={listing.featuredImage.width}
          height={listing.featuredImage.height}
        />
      </FeaturedImage>
      <Content>{documentToReactComponents(listing.content.json)}</Content>
    </Wrapper>
  );
}
