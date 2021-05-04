import React, { Fragment, useState, useEffect } from "react";
import { main, more } from "./navigation/menuData";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import styled from "styled-components";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Wrapper = styled.div`
  .Glass {
    @supports (backdrop-filter: blur(40px)) or
      (-webkit-backdrop-filter: blur(40px)) {
      opacity: 0, 5;
      background-color: transparent;
      -webkit-backdrop-filter: blur(40px);
      backdrop-filter: blur(40px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    }

    @-moz-document url-prefix() {
      background-color: rgba(242, 242, 242, 0.7);
      @media (prefers-color-scheme: dark) {
        background-color: rgba(50, 50, 52, 0.7);
      }
    }
  }
`;

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <Wrapper>
      <div
        className={
          navbar
            ? "bg-opacity-80 bg-clip-padding backdrop-blur-xl"
            : "bg-transparent"
        }
      >
        <Popover className="relative">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <span className="sr-only">Code Shape</span>
                    <Link href="/">
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/images/logos/logo_blue.png"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    {main.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          key={item.name}
                          className="text-base font-medium text-gray-500 hover:text-blue-500 p-1"
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}

                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open
                                ? "text-blue-600"
                                : "text-gray-500 dark:text-gray-500",
                              "group rounded-md inline-flex items-center text-base font-medium hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white p-1"
                            )}
                          >
                            <span>More</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-blue-600"
                                  : "text-gray-500 dark:text-gray-500",
                                "ml-2 h-5 w-5 group-hover:text-blue-500"
                              )}
                              aria-hidden="true"
                            />
                          </Popover.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                            >
                              <div className="rounded-lg Glass shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative  py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                                  {more.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-darkest"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-blue-600">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm ">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                                {/* <div className="px-5 py-5 sm:px-8 sm:py-8">
                                  <div>
                                    <h3 className="text-sm tracking-wide font-medium text-blue-600 uppercase">
                                      Recent Posts
                                    </h3>
                                    <ul className="mt-4 space-y-4">
                                      {recentPosts.map((post) => (
                                        <li
                                          key={post.id}
                                          className="text-base truncate"
                                        >
                                          <a
                                            href={post.href}
                                            className="font-medium hover:text-blue-500 "
                                          >
                                            {post.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <a
                                      href="/articles"
                                      className="font-medium text-blue-600 hover:text-blue-500"
                                    >
                                      {" "}
                                      View all posts{" "}
                                      <span aria-hidden="true">&rarr;</span>
                                    </a>
                                  </div>
                                </div> */}
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  </Popover.Group>
                  <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                    <a
                      href="/login"
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-blue-500"
                    >
                      Sign in
                    </a>
                    <a
                      href="/login"
                      className="whitespace-nowrap rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium border border-transparent  bg-black text-white dark:bg-white dark:text-black hover:bg-transparent border-gray-400 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white
"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden "
                >
                  <div className="rounded-lg shadow-lg  ring-1 ring-black ring-opacity-5 divide-y-2 divide-white dark:divide-gray-darkest Glass">
                    <div className="pt-5 pb-6 px-5 space-y-6">
                      <div className="flex items-center justify-between">
                        <Link href="/">
                          <img
                            className="h-8 w-auto"
                            src="/images/logos/logo_blue.png"
                            alt="Workflow"
                          />
                        </Link>
                        <div className="-mr-2">
                          <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-blue-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          {main.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-darkest"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 "
                                aria-hidden="true"
                              />
                              <span className="ml-3 text-base font-medium ">
                                {item.name}
                              </span>
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {more.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium p-2 hover:text-blue-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div>
                        <a
                          href="/login"
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-600"
                        >
                          Sign up
                        </a>

                        <p className="mt-6 text-center text-base font-medium ">
                          Existing customer?{" "}
                          <a href="/login" className="hover:text-blue-700">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </Wrapper>
  );
}
