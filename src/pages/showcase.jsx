import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import IntroSimple from "../components/intros/IntroSimple";
import { getShowcases } from "../utils/contentful";
import { formatDates } from "../utils/functions";

const Wrapper = styled.div``;

const ShowcaseWrapper = styled.div``;

export async function getStaticProps() {
  const showcases = await getShowcases();

  return {
    props: {
      showcases: showcases.showcaseCollection.items,
    },
  };
}

export default function Showcase({ showcases }) {
  showcases = formatDates(showcases);

  return (
    <Wrapper className="m-4 my-6">
      <Head>
        <title>Code Shape - Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSimple
        title="Showcase"
        description="Discover the experiences we make, and get inspired to create incredible products."
      />
      <ShowcaseWrapper>
        <div>
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
            <div className="space-y-12">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {showcases.map((showcase) => (
                  <li key={showcase.title}>
                    <div className="space-y-4">
                      <Link href={showcase.url}>
                        <div className="aspect-w-3 aspect-h-2 hover:-translate-y-0.5 transform transition">
                          <img
                            className="object-cover shadow-lg rounded-lg"
                            src={showcase.featuredImage.url}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ShowcaseWrapper>
    </Wrapper>
  );
}
