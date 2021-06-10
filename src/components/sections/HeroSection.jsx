import styled from "styled-components";
import GradientTransition from "../animations/GradientTransition";
import Link from "next/link";

const Wrapper = styled.div``;

const Buttons = styled.div``;

const Description = styled.div``;

export default function HeroSection() {
  return (
    <Wrapper className="max-w-6xl m-auto ">
      <GradientTransition />
      <Buttons className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
        <div className="rounded-md shadow">
          <Link href="/learn">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-black text-white dark:bg-white dark:text-black hover:bg-transparent border-gray-400 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white">
              Get started
            </a>
          </Link>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link href="/community">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 text-gray-500 transition-colors duration-150 border-gray-500 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white">
              Join Community
            </a>
          </Link>
        </div>
      </Buttons>
      <Description className="mt-5 max-w-md mx-auto text-xl md:mt-5 md:text-xl md:max-w-3xl text-center text-gray-500">
        We bring people forward through technology, and learning is the best way
        to introduce insanely cool new things.
      </Description>
    </Wrapper>
  );
}
