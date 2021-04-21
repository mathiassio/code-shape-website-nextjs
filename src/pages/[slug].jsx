import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { H1, BodyMain } from "../components/styles/TextStyles";
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import { getPages, getPage } from "../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function getStaticPaths() {
  const data = await getPages();

  return {
    paths: data.pageCollection.items.map((page) => ({
      params: { slug: page.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getPage(context.params.slug);

  return {
    props: { page: data.pageCollection.items[0] },
  };
}

const Wrapper = styled.div`
  margin: 10rem auto;
`;

const HeaderWrapper = styled.div`
  min-height: 250px;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  text-align: center;
`;

const TitleWrapper = styled(H1)`
  padding: 0.6rem;
  font-weight: 900;
  background: -webkit-linear-gradient(left, #7230ce, #3e16bb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubtitleWrapper = styled(BodyMain)``;

const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

export default function Pages({ page }) {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - {page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob06.svg" />
      <HeaderWrapper>
        <TextWrapper>
          <TitleWrapper>{page.title}</TitleWrapper>
          <SubtitleWrapper>{page.subtitle}</SubtitleWrapper>
        </TextWrapper>
      </HeaderWrapper>
      <Content>{documentToReactComponents(page.content.json)}</Content>
    </Wrapper>
  );
}
