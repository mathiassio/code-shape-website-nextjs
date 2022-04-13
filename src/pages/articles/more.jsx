import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getArticles } from "../../utils/contentful";
import PageIntro from "../../components/intros/PageIntro";
import { formatDates } from "../../utils/functions";

const Wrapper = styled.div``;

const ArticleWrapper = styled.div``;

export async function getStaticProps() {
  const articles = await getArticles();

  return {
    props: {
      articles: articles.articleCollection.items,
    },
  };
}

export default function ArticlesPage({ articles }) {
  articles = formatDates(articles);

  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title="All Articles"
        description="Reading is one of the most effective ways of learning, and we want to bring the learning experience to you."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />

      <ArticleWrapper className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {articles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`}>
                <div
                  key={article.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-0.5 transform transition"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={article.featuredImage.url}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-darker  p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {article.contentfulMetadata.tags.map((tag) => {
                          return <a href={tag.name}>{tag.name}</a>;
                        })}
                      </p>
                      <a href={article.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {article.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-200">
                          {article.excerpt}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
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
                      {article.author ? (
                        <div className="ml-3">
                          <p className="text-sm font-medium text-indigo-600">
                            <a
                              href={article.author.slug}
                              className="hover:underline"
                            >
                              {article.author.name}
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={article.datetime}>
                              {article.date}
                            </time>
                            {/* <span aria-hidden="true">&middot;</span> */}
                            {/* <span>{article.readingTime} read</span> */}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ArticleWrapper>
    </Wrapper>
  );
}
