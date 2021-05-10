import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function EnterpriseIntro() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = process.env.NEXT_PUBLIC_HUBSPOT_FORM_URL;
    var data = {
      fields: [
        {
          name: "email",
          value: email,
        },
      ],
      context: {
        pageUri: "www.codeshape.io/enterprise",
        pageName: "Enterprise",
      },
    };

    var final_data = JSON.stringify(data);

    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };

    // Sends the request
    xhr.send(final_data);
  };

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
                      No <span className="text-logoBlue-dark">time</span> to
                      learn it, or do it{" "}
                      <span className="text-logoBlue-light">yourself</span>?
                    </span>
                  </h1>
                  <p className="mt-4 text-1.5xl leading-normal md:text-2xl text-gray-500">
                    We know it can be challenging to find the time for every
                    aspect of the Business. Therefore, we will help you create
                    your dream product, whether that is a website, an app, or a
                    game for your company engagement.
                  </p>
                  <p className="mt-4 text-1.5xl leading-normal md:text-2xl text-gray-500">
                    Sign up to get notified for when Flow launches. While
                    waiting, start a chat and tell us about your project.
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 sm:max-w-lg sm:w-full sm:flex"
                >
                  <div className="min-w-0 flex-1">
                    <label htmlFor="hero_email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="hero_email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md border border-transparent px-5 py-3 bg-logoBlue-dark text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
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
                  src="/images/screenshots/web_app_enterprise.png"
                  alt="Code Shape Flow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
