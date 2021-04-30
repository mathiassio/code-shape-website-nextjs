import Head from "next/head";
import styled from "styled-components";
import { getArticles, getProjects } from "../../utils/contentful";
import Link from "next/link";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import SectionIntro from "../components/intros/SectionIntro";
import { formatDates } from "../../utils/functions";

const Wrapper = styled.div`
  padding-top: 3.5rem;
`;

const ArticleWrapper = styled.div``;

const ProjectWrapper = styled.div``;

export async function getStaticProps() {
  const articles = await getArticles();
  const projects = await getProjects();

  return {
    props: {
      articles: articles.articleCollection.items,
      projects: projects.projectCollection.items,
    },
  };
}

export default function ArticlesPage({ articles, projects }) {
  articles = formatDates(articles);
  projects = formatDates(projects);

  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlassGradientIntro
        title="Reading is making Meaning"
        description="We believe we can create amazing things together by keeping our knowledge up to date. Therefore we will do our best to deliver that to you every week."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <ArticleWrapper className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
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
        </div>
      </ArticleWrapper>
      <ProjectWrapper className="relative pt- 16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <SectionIntro
            title="Discover Case Studies"
            description="One of our goals is to bring people forward through technology. Read more about our customer cases and how we helped them reach their audience."
          />
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div
                  key={project.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-0.5 transform transition"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={project.featuredImage.url}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-darkest  p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-indigo-600">
                        {project.contentfulMetadata.tags.map((tag) => {
                          return <a href={tag.name}>{tag.name}</a>;
                        })}
                      </p>
                      <a href={project.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-200">
                          {project.excerpt}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={project.author.slug}>
                          <span className="sr-only">{project.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={project.author.photo.url}
                            alt={project.author.name}
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-indigo-600">
                          <a
                            href={project.author.slug}
                            className="hover:underline"
                          >
                            {project.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={project.datetime}>
                            {project.date}
                          </time>
                          {/* <span aria-hidden="true">&middot;</span> */}
                          {/* <span>{project.readingTime} read</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ProjectWrapper>
    </Wrapper>
  );
}
