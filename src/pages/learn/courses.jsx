import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { getCourses } from "../../utils/contentful";
import PageIntro from "../../components/intros/PageIntro";
import SectionIntro from "../../components/intros/SectionIntro";

export async function getStaticProps() {
  const courses = await getCourses();

  return {
    props: {
      courses: courses.courseCollection.items,
    },
  };
}

const Wrapper = styled.div``;

const CoursesWrapper = styled.div``;

export default function LearnPage({ courses }) {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Learn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageIntro
        title="Learn Everyday"
        description="Keep practice every day, and you will be able to accomplish amazing things in life. It's never too late to start learning a new skill."
        gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
      />
      <CoursesWrapper className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="absolute inset-0">
          <div className=" h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <SectionIntro
            gradientColor="-webkit-linear-gradient(left, #F89929, #F5217B)"
            title="Learn the best tools and best practices"
            description="We want to prepare you for your next job by provided knowledge and best practices using various tools and platforms."
          />
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {courses.map((course) => (
              <Link key={course.slug} href={`/learn/courses/${course.slug}`}>
                <div
                  key={course.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-0.5 transform transition"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={course.featuredImage.url}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-dark p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <a href={course.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                          {course.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-200">
                          {course.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={course.instructor.slug}>
                          <span className="sr-only">
                            {course.instructor.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={course.instructor.photo.url}
                            alt={course.instructor.name}
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-indigo-600">
                          <a
                            href={course.instructor.slug}
                            className="hover:underline"
                          >
                            {course.instructor.name}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </CoursesWrapper>
    </Wrapper>
  );
}
