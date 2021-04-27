import React from "react";
import styled from "styled-components";
import { H3, BodyMain } from "../styles/TextStyles";

const Wrapper = styled.div``;

export default function EnterpriseIntro() {
  return (
    <Wrapper>
      <div className="pb-8 sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-20">
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold  tracking-tight sm:text-5xl">
                    <span className="block">
                      No <span className="text-indigo-500">time</span> to learn
                      it, or do it{" "}
                      <span className="text-yellow-500">yourself</span>?
                    </span>
                  </h1>
                  <p className="mt-6 text-xl">
                    We know it can be challenging to find the time for every
                    aspect of the Business. Therefore, we will help you create
                    your dream product, whether that is a website, an app, or a
                    game for your company engagement.
                  </p>
                  <p className="mt-6 text-xl">
                    Sign up to get notified for when Workflow launches. While
                    waiting, start a chat and tell us about your project.
                  </p>
                </div>
                <form action="#" className="mt-8 sm:max-w-lg sm:w-full sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="hero_email"
                      type="email"
                      className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                    >
                      Notify me
                    </button>
                  </div>
                </form>
                <div className="mt-6"></div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen  rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              </div>
              <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/screenshots/web_app_enterprise.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
