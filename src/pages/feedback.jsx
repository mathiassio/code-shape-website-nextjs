import Head from "next/head";
import styled from "styled-components";
import PageIntro from "../components/intros/PageIntro";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const feedback = [
  {
    name: "Be Timely",
    description:
      "One of the essential qualities of effective feedback is timeliness. The quicker you can provide the feedback, the easier it will be to remember important elements. By that, there is a better chance of quality and richness.",
    icon: LightningBoltIcon,
  },
  {
    name: "Be Specific",
    description:
      "Effective feedback is also specific. Providing incomplete information can often cause misunderstanding and perhaps never lead to a solution matching the needs and thought we have in the first place.",
    icon: ScaleIcon,
  },
  {
    name: "Image or Video",
    description:
      "Providing a screenshot or video might help to explain the information faster. We care about your time, and we want you to spend as much time on learning rather than being a bug hunter.",
    icon: LightningBoltIcon,
  },
  {
    name: "Be Caring",
    description:
      "Regardless of what type of feedback is shared, it is crucial to remain positive and caring. Keeping the tone inspiring, constructive and valuable is often the fastest way to see results.",
    icon: AnnotationIcon,
  },
];

const Wrapper = styled.div``;

const FeedbackHelp = styled.div`
  .gradient {
    background: ${(props) =>
      props.gradientColor || "-webkit-linear-gradient(left, #037de8, #0fd9d9)"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .gradientBackground {
    background: ${(props) =>
      props.gradientColor || "-webkit-linear-gradient(left, #037de8, #0fd9d9)"};
  }
`;

export default function FeedbackPage() {
  return (
    <Wrapper>
      <Head>
        <title>Code Shape - Feedback</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          src="//code.tidio.co/hypd4ps4dy1riahfaqmg3edky54i80mi.js"
          async
        ></script>
      </Head>
      <PageIntro
        title="Feedback"
        description="We want to create the best product and learning experience possible. If we are to succeed, feedback is a vital organ and much appreciated."
      />
      <FeedbackHelp>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base gradient font-semibold tracking-wide uppercase">
              Best Practices
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Effective Feedback
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Help us understand your feedback, so we can create a better
              experience for you.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {feedback.map((item) => (
                <div key={item.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md gradientBackground text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="mt-10 max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight  sm:text-4xl">
            <span className="block">Ready to provide feedback?</span>
            <span className="block gradient">Go ahead and start a chat.</span>
          </h2>
        </div>
      </FeedbackHelp>
    </Wrapper>
  );
}
