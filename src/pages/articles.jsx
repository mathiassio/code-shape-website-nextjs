import Head from "next/head";
import styled from "styled-components";
import { getArticles, getProjects } from "../../utils/contentful";
import Link from "next/link";
import Image from "next/image";
import { H2, MediumText } from "../components/styles/TextStyles";
import HeaderBackground from "../components/backgrounds/HeaderBackground";
import GlassGradientIntro from "../components/intros/GlassGradientIntro";
import CategorySection from "../components/sections/CategorySection";
import SectionIntro from "../components/intros/SectionIntro";

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 6rem;
`;

const Articles = styled.div`
  padding: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-content: center;
`;

const Projects = styled.div`
  padding: 1.875rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-content: center;
`;

const Card = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  position: relative;
  top: 0;
  overflow: hidden;
  border-radius: 1.2rem;
  @media (prefers-color-scheme: dark) {
    background: #151515;
    color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(23, 23, 23, 0.2),
      inset 0px 0px 0px 0.5px rgba(23, 23, 23, 0.5);
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(24, 0, 102, 0.3),
        inset 0px 0px 0px 0.5px rgba(63, 63, 63, 0.5);
      transform: translateY(-3px);
    }
  }
  @media (prefers-color-scheme: light) {
    background: #ffffff;
    color: black;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 20px 40px rgba(23, 23, 23, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    *,
    & {
      transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    :hover {
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 30px 60px rgba(255, 255, 255, 0.3),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
`;

const FeaturedImage = styled.a``;

const Content = styled.div`
  display: grid;
`;

const TextWrapper = styled(H2)`
  display: grid;
  grid-gap: 1.875rem;
  padding: 1.5rem;
`;

const Title = styled(H2)`
  display: grid;
  grid-gap: 1.875rem;
`;

const Excerpt = styled(MediumText)`
  display: grid;
  grid-gap: 1.875rem;
  color: #fff;
`;

const ProjectSection = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-content: center;
`;

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
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Articles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob02.svg" />
      <GlassGradientIntro
        title="Reading is making Meaning"
        description="We believe we can create amazing things together by keeping our knowledge up to date. Therefore we will do our best to deliver that to you every week."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      {/* <CategorySection /> */}
      <Articles>
        {articles.map((article) => (
          <Card key={article.slug}>
            <Link key={article.slug} href={`/articles/${article.slug}`}>
              <Content>
                <FeaturedImage>
                  <Image
                    src={article.featuredImage.url}
                    alt={article.featuredImage.title}
                    width="400"
                    height="200"
                    layout="responsive"
                  />
                </FeaturedImage>
                <TextWrapper>
                  <Title>{article.title}</Title>
                  <Excerpt>{article.excerpt}</Excerpt>
                </TextWrapper>
              </Content>
            </Link>
          </Card>
        ))}
      </Articles>
      <ProjectSection>
        <SectionIntro
          title="Discover Customer Cases"
          description="One of our goals is to bring people forward through technology. Read more about our customer cases and how we helped them reach their audience."
        />
        <Projects>
          {projects.map((project) => (
            <Card key={project.slug}>
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Content>
                  <FeaturedImage>
                    <Image
                      src={project.featuredImage.url}
                      alt={project.featuredImage.title}
                      width="400"
                      height="200"
                      layout="responsive"
                    />
                  </FeaturedImage>
                  <TextWrapper>
                    <Title>{project.title}</Title>
                    <Excerpt>{project.excerpt}</Excerpt>
                  </TextWrapper>
                </Content>
              </Link>
            </Card>
          ))}
        </Projects>
      </ProjectSection>
    </Wrapper>
  );
}
