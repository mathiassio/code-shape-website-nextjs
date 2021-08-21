import AnimatedIntro from "../animations/AnimatedIntro";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
      <main className="lg:relative">
        <div className="mx-auto max-w-xl lg:max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                Learn
              </span>{" "}
              how to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                create
              </span>{" "}
              and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal">
                share
              </span>{" "}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              We bring people forward through technology, and learning is the
              best way to introduce insanely cool new things.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/learn">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-black text-white dark:bg-white dark:text-black hover:bg-transparent border-gray-400 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white">
                    Get started
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/community">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 text-gray-500 transition-colors duration-150 border-gray-500 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white">
                    Join Community
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <AnimatedIntro />
        </div>
      </main>
    </div>
  );
}
