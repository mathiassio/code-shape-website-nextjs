import Head from "next/head";
import HeaderBackground from "../../components/backgrounds/HeaderBackground";
import styled from "styled-components";
import { getProjects, getProject } from "../../../utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { CameraIcon } from "@heroicons/react/solid";

export async function getStaticPaths() {
  const data = await getProjects();

  return {
    paths: data.projectCollection.items.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await getProject(context.params.slug);

  return {
    props: { project: data.projectCollection.items[0] },
  };
}

const Wrapper = styled.div``;

const Author = styled.div``;

export default function ProjectPost({ project }) {
  return (
    <Wrapper className="mt-40">
      <Head>
        <title>Code Shape - Case {project.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBackground image="../images/blobs/HeaderBlob06.svg" />
      <div className="overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block  absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Case Study
              </h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                {project.title}
              </h3>
              <Author className="mt-6 flex items-center">
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
                    <a href={project.author.slug} className="hover:underline">
                      {project.author.name}
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <div>{project.author.title}</div>
                  </div>
                </div>
              </Author>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src={project.featuredImage.url}
                      alt={project.featuredImage.title}
                      width={1184}
                      height={1376}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">
                      Photograph of {project.featuredImage.title}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mt-6 prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark mx-auto lg:row-start-1 lg:col-start-1">
                {documentToReactComponents(project.content.json)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
