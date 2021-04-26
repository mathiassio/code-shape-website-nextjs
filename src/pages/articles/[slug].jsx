import Head from "next/head";
import HeaderBackground from "../../components/backgrounds/HeaderBackground";
import Image from "next/image";
import dynamic from "next/dynamic";
import styled from "styled-components";
import RichTextPageContentStyles from "../../components/RichTextPageContent/Styles/RichTextPageContent.module.css";
import TypographyStyles from "../../components/RichTextPageContent/Styles/Typography.module.css";
import { formatDate } from "../../../utils/functions";
import { getArticles, getArticle } from "../../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Utterances from "../../../utils/utterances";

const Wrapper = styled.div``;

const Content = styled.div``;

const Author = styled.div``;

const ImageWrapper = styled.div``;

export async function getStaticPaths() {
  const data = await getArticles();

  return {
    paths: data.articleCollection.items.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getArticle(context.params.slug);

  return {
    props: { article: data.articleCollection.items[0] },
  };
}

function slugifyString(string) {
  return string
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    .toLowerCase();
}

const DynamicCodeBlock = dynamic(() =>
  import("../../components/RichTextPageContent/CodeBlock/index")
);

const DynamicVideoEmbed = dynamic(() =>
  import("../../components/RichTextPageContent/VideoEmbed")
);

export function getRichTextRenderOptions(links, options) {
  const { renderH2Links, renderNativeImg } = options;

  const assetBlockMap = new Map(
    links?.assets?.block?.map((asset) => [asset.sys.id, asset])
  );

  const entryBlockMap = new Map(
    links?.entries?.block?.map((entry) => [entry.sys.id, entry])
  );

  return {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <b
          className={`${TypographyStyles.bodyCopy} ${TypographyStyles.bodyCopy__bold}`}
        >
          {text}
        </b>
      ),
      [MARKS.CODE]: (text) => (
        <code className={TypographyStyles.inlineCode}>{text}</code>
      ),
    },

    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          className={TypographyStyles.inlineLink}
          href={node.data.uri}
          target="_blank"
          rel="nofollow noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.HR]: (text) => (
        <hr className={RichTextPageContentStyles.page__hr} />
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={TypographyStyles.heading__h1}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => {
        if (renderH2Links) {
          return (
            <div
              className={RichTextPageContentStyles.page__linkedHeaderContainer}
            >
              <h2
                id={`${slugifyString(children[0])}`}
                className={TypographyStyles.heading__h2}
              >
                {children}
              </h2>
              <a
                className={`${RichTextPageContentStyles.page__headerLink} ${TypographyStyles.inlineLink}`}
                href={`#${slugifyString(children[0])}`}
                aria-label={children}
              >
                <LinkIcon />
              </a>
            </div>
          );
        } else {
          <h2 className={TypographyStyles.heading__h2}>{children}</h2>;
        }
      },
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className={TypographyStyles.heading__h3}>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className={TypographyStyles.heading__h4}>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className={TypographyStyles.heading__h5}>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className={TypographyStyles.heading__h6}>{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={TypographyStyles.bodyCopy}>{children}</p>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className={TypographyStyles.blockquote}>
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={RichTextPageContentStyles.page__ul}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className={RichTextPageContentStyles.page__ol}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li
          className={`${TypographyStyles.bodyCopy} ${RichTextPageContentStyles.page__li}`}
        >
          {children}
        </li>
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryBlockMap.get(node.data.target.sys.id);
        const { __typename } = entry;

        switch (__typename) {
          case "VideoEmbed":
            const { embedUrl, title } = entry;
            return <DynamicVideoEmbed embedUrl={embedUrl} title={title} />;
          case "CodeBlock":
            const { language, code } = entry;

            return <DynamicCodeBlock language={language} code={code} />;
          default:
            return null;
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const { title, url, height, width, description } = assetBlockMap.get(
          node.data.target.sys.id
        );
        if (renderNativeImg) {
          return (
            <div className={RichTextPageContentStyles.page__imgContainer}>
              <img src={url} alt={description} height={height} width={width} />
            </div>
          );
        } else {
          return (
            <div className={RichTextPageContentStyles.page__imgContainer}>
              <Image
                src={url}
                alt={description}
                height={height}
                width={width}
                layout="responsive"
              />
            </div>
          );
        }
      },
    },
  };
}

export default function ArticlePost({ article, renderH2Links }) {
  article = formatDate(article);

  return (
    <Wrapper className="mt-40">
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob06.svg" />
      <Content className="relative py-16 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                {article.date}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">
                {article.title}
              </span>
            </h1>
            <Author className="mt-6 grid grid-flow-col auto-cols-max justify-center content-center">
              <div className="flex-shrink-0">
                <a href={article.author.slug}>
                  <span className="sr-only">{article.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={article.author.photo.url}
                    alt={article.author.name}
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-indigo-600">
                  <a href={article.author.slug} className="hover:underline">
                    {article.author.name}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <div>{article.author.title}</div>
                </div>
              </div>
            </Author>
            <ImageWrapper className="mt-8">
              <img
                src={article.featuredImage.url}
                alt={article.featuredImage.fileName}
                className="rounded-md"
              />
            </ImageWrapper>
          </div>

          <div className="mt-6 prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark mx-auto">
            {documentToReactComponents(
              article.content.json,
              getRichTextRenderOptions(
                article.content.links,
                (renderH2Links = "true")
              )
            )}
          </div>
        </div>
      </Content>
      <Utterances />
    </Wrapper>
  );
}
