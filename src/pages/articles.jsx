import Head from "next/head";
import styled from "styled-components";
import {
  getPaginatedArticles,
  getPaginatedCases,
  getArticles,
} from "../utils/contentful";
import Link from "next/link";
import PageIntro from "../components/intros/PageIntro";
import SectionIntro from "../components/intros/SectionIntro";
import { formatDates } from "../utils/functions";
import CategorySection from "../components/sections/CategorySection";

const Wrapper = styled.div``;

const ArticleWrapper = styled.div``;

const CaseWrapper = styled.div``;

export async function getStaticProps() {
  const articles = await getPaginatedArticles();
  const cases = await getPaginatedCases();
  const categories = await getArticles();

  return {
    props: {
      articles: articles.articleCollection.items,
      cases: cases.caseCollection.items,
      categories: categories.articleCollection.items,
    },
  };
}

export default function ArticlesPage({ articles, cases, categories }) {
  articles = formatDates(articles);
  cases = formatDates(cases);

  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title="Let's Read"
        description="Reading is one of the most effective ways of learning, and we want to bring the learning experience to you."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <ArticleWrapper className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <SectionIntro
            gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
            title="Discover New Content"
            description="We bring new content to you every week. If you find that you need more content, let us know what you need."
          />
          {/* <CategorySection categories={categories} /> */}
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
                  <div className="flex-1 bg-white dark:bg-gray-darkest  p-6 flex flex-col justify-between">
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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center m-auto mt-10 mb-10">
            <Link href="/articles/more">
              <a
                className="py-2 px-5 border border-transparent text-base font-medium rounded-md text-gray-500 transition-colors duration-150 border-gray-500 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white
            "
              >
                More
              </a>
            </Link>
          </div>
        </div>
      </ArticleWrapper>
      <CaseWrapper className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <SectionIntro
            title="Discover Case Studies"
            description="One of our goals is to bring people forward through technology. Read more about our customer cases and how we helped them reach their audience."
            gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
          />
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
            {cases.map((item) => (
              <Link key={item.slug} href={`/cases/${item.slug}`}>
                <div
                  key={item.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-0.5 transform transition"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={item.featuredImage.url}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-darkest  p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {item.contentfulMetadata.tags.map((tag) => {
                          return <a href={tag.name}>{tag.name}</a>;
                        })}
                      </p>
                      <a href={item.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-200">
                          {item.excerpt}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={item.author.slug}>
                          <span className="sr-only">{item.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={item.author.photo.url}
                            alt={item.author.name}
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-indigo-600">
                          <a
                            href={item.author.slug}
                            className="hover:underline"
                          >
                            {item.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={item.datetime}>{item.date}</time>
                          {/* <span aria-hidden="true">&middot;</span> */}
                          {/* <span>{item.readingTime} read</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center m-auto mt-10 mb-10">
            <Link href="/cases/more">
              <a
                className="py-2 px-5 border border-transparent text-base font-medium rounded-md text-gray-500 transition-colors duration-150 border-gray-500 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white
            "
              >
                More
              </a>
            </Link>
          </div>
        </div>
      </CaseWrapper>
    </Wrapper>
  );
}
