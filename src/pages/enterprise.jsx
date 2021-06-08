import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import EnterpriseIntro from "../components/intros/EnterpriseIntro";
import PageIntro from "../components/intros/PageIntro";
import { getLimitedShowcases } from "../utils/contentful";
import { formatDates } from "../utils/functions";

export async function getStaticProps() {
  const showcases = await getLimitedShowcases();

  return {
    props: {
      showcases: showcases.showcaseCollection.items,
    },
  };
}

const Wrapper = styled.div``;

const TextWrapper = styled.div``;

const Title = styled.div``;

const Text = styled.div``;

const ShowcaseWrapper = styled.div``;

export default function EnterprisePage({ showcases }) {
  showcases = formatDates(showcases);
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Enterprise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title="When time is of the essence"
        description="We believe that we can create better products for people to enjoy if people come first. To create an excellent experience for you, simplicity and good communication are our top priorities."
        gradientColor="-webkit-linear-gradient(left, #037de8, #0fd9d9)"
      />
      <EnterpriseIntro />

      <ShowcaseWrapper className="m-4">
        <TextWrapper className="text-center">
          <Title className="text-5xl font-semibold">
            Cases we <span className="text-logoBlue-dark">worked</span> on
          </Title>
          <Text className="text-xl max-w-xl m-auto">
            We want to bring people forward through technology. Have a look at
            the projects we have worked on.
          </Text>
        </TextWrapper>
        <div>
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
            <div className="space-y-12">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {showcases.map((showcase) => (
                  <li key={showcase.title}>
                    <div className="space-y-4">
                      <a href={showcase.url} target="_blank">
                        <div className="aspect-w-3 aspect-h-2 hover:-translate-y-0.5 transform transition">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={showcase.featuredImage.url}
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center m-auto">
          <Link href="/showcase">
            <a
              className="py-2 px-5 border border-transparent text-base font-medium rounded-md text-gray-500 transition-colors duration-150 border-gray-500 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white
            "
            >
              More
            </a>
          </Link>
        </div>
      </ShowcaseWrapper>
    </Wrapper>
  );
}
