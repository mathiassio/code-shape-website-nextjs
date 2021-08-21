import styled from "styled-components";
import GradientTransition from "../animations/GradientTransition";
import AnimatedIntro from "../animations/AnimatedIntro";
import Link from "next/link";

const Wrapper = styled.div``;

const Buttons = styled.div``;

const Description = styled.div``;

export default function HeroSection() {
  return (
    <Wrapper className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      {/* <GradientTransition /> */}
      <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Data to enrich your</span>
          <span class="block text-indigo-600 xl:inline">online business</span>
        </h1>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <AnimatedIntro />
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
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
        </div>
        <Description className="mt-5 max-w-md mx-auto text-xl md:mt-5 md:text-xl md:max-w-3xl text-center text-gray-500">
          We bring people forward through technology, and learning is the best
          way to introduce insanely cool new things.
        </Description>
      </div>
    </Wrapper>
  );
}
