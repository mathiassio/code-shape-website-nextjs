import { getArticles, getArticle } from "../../../utils/contentful";

export async function getStaticPaths() {
  const data = await getArticles();

  return {
    paths: data.articleCollection.items.map((article) => ({
      params: { slug: article.contentfulMetadata.tags.id },
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

export default function Category({ article }) {
  return <h1>{article.contentfulMetadata.tags.name}</h1>;
}
