import Head from "next/head";
import styled from "styled-components";
import { BodyMain, H1 } from "../../components/styles/TextStyles";
import { getArticles, getArticle } from "../../../utils/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Utterances from "../../../utils/utterances";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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

const richTextDocument = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Hello",
          data: {},
          marks: [{ type: "bold" }],
        },
        {
          nodeType: "text",
          value: " world!",
          data: {},
          marks: [{ type: "italic" }],
        },
      ],
    },
  ],
};

const Bold = ({ children }) => <span className="bold">{children}</span>;

const Italic = ({ children }) => <span className="italic">{children}</span>;

const Underline = ({ children }) => (
  <span className="underline">{children}</span>
);

const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.length === 1 &&
        node.content[0].marks.find((x) => x.type === "code")
      ) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: (text) => <Bold>{text}</Bold>,
    [MARKS.UNDERLINE]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (text) => {
      return (
        <SyntaxHighlighter
          language="jsx"
          style={obsidian}
          showLineNumbers
          lineProps={{
            style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
          }}
          wrapLines={true}
        >
          {text}
        </SyntaxHighlighter>
      );
    },
  },
};

export default function ArticlesPost({ listing }) {
  console.log(listing);
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
      <Content>
        {documentToReactComponents(listing.content.json, options)}
      </Content>
      <Utterances />
    </Wrapper>
  );
}
