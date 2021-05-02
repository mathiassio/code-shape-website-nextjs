import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
import RichTextPageContentStyles from "../components/RichTextPageContent/Styles/RichTextPageContent.module.css";
import TypographyStyles from "../components/RichTextPageContent/Styles/Typography.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { getUpdates } from "../utils/contentful";
import IntroSimple from "../components/intros/IntroSimple";
import { formatDates } from "../utils/functions";

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export async function getStaticProps() {
  const updates = await getUpdates();

  return {
    props: {
      updates: updates.updateCollection.items,
    },
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
  import("../components/RichTextPageContent/CodeBlock")
);

const DynamicVideoEmbed = dynamic(() =>
  import("../components/RichTextPageContent/VideoEmbed")
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

export default function UpdatesPage({ updates, renderH2Links }) {
  updates = formatDates(updates);
  return (
    <Wrapper className="m-4 my-6">
      <Head>
        <title>Code Shape - Updates</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSimple
        title="Updates"
        description="We’re constantly improving Code Shape. Discover the latest features and improvements."
      />
      {updates.map((update) => (
        <div className="mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-12 lg:py-20 border-b border-gray-200 dark:border-gray-darkest">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 ">
            <div className="space-y-5 sm:space-y-4 ">
              <Link key={update.url} href={update.url}>
                <div className="hover:text-indigo-600">
                  <h3 className="text-3xl font-extrabold tracking-tight sm:text-2xl">
                    {update.title}
                  </h3>
                  <p className="text-xl text-gray-500">{update.date}</p>
                </div>
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="pb-5">
                <img
                  src={update.featuredImage.url}
                  alt={update.featuredImage.fileName}
                  className="rounded-md"
                />
              </div>
              <div className="text-xl text-gray-500 ">
                {documentToReactComponents(
                  update.content.json,
                  getRichTextRenderOptions(
                    update.content.links,
                    (renderH2Links = "true")
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
}
