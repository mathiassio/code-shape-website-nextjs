import React, { Fragment, useState } from "react";
import { main, learn, more, mobile } from "./navigation/menuData";
import { Popover, Transition, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  MenuIcon,
  XIcon,
  BellIcon,
  UserIcon,
  LogoutIcon,
  CogIcon,
} from "@heroicons/react/outline";
import styled from "styled-components";
import Link from "next/link";
import { useAuth } from "../../lib/auth";

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
      background-color: rgba(242, 242, 242, 1);
      @media (prefers-color-scheme: dark) {
        background-color: rgba(50, 50, 52, 1);
      }
    }
  }

  .gradient {
    background: ${(props) =>
      props.gradientColor || "-webkit-linear-gradient(left, #037de8, #0fd9d9)"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const auth = useAuth();

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
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-logoBlue-medium">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open
                                ? "text-logoBlue-medium"
                                : "text-gray-500 dark:text-gray-500",
                              "group rounded-md inline-flex items-center text-base font-medium hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-logoBlue-medium p-1"
                            )}
                          >
                            <span>Learn</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-logoBlue-medium"
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
                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                              <div className="rounded-lg Glass shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative  py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                                  {learn.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-darkest">
                                        <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-logoBlue-medium"
                                          aria-hidden="true"
                                        />
                                        <div className="ml-4">
                                          <p className="text-base font-medium text-logoBlue-medium">
                                            {item.name}
                                          </p>
                                          <p className="mt-1 text-sm ">
                                            {item.description}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
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
                                ? "text-logoBlue-medium"
                                : "text-gray-500 dark:text-gray-500",
                              "group rounded-md inline-flex items-center text-base font-medium hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-logoBlue-medium p-1"
                            )}
                          >
                            <span>More</span>
                            <ChevronDownIcon
                              className={classNames(
                                open
                                  ? "text-logoBlue-medium"
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
                            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                              <div className="rounded-lg Glass shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative  py-6 px-5 grid gap-6 sm:gap-8 sm:p-8">
                                  {more.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-darkest">
                                        <item.icon
                                          className="flex-shrink-0 h-6 w-6 text-logoBlue-medium"
                                          aria-hidden="true"
                                        />
                                        <div className="ml-4">
                                          <p className="text-base font-medium text-logoBlue-medium">
                                            {item.name}
                                          </p>
                                          <p className="mt-1 text-sm ">
                                            {item.description}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
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

                  {/* user is not signed OR has not created username */}
                  {!auth.user && (
                    <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                      <Link href="/signin">
                        <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-logoBlue-medium">
                          Sign in
                        </a>
                      </Link>
                      <Link href="/signup">
                        <a className="whitespace-nowrap rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium border border-transparent  bg-black text-white dark:bg-white dark:text-black hover:bg-transparent border-gray-400 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white">
                          Sign up
                        </a>
                      </Link>
                    </div>
                  )}
                  {auth.user && (
                    <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                      <Menu as="div" className="ml-3 relative hidden md:block">
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logoBlue-medium">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={auth.user.photoUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 Glass dark:bg-gray-darkest ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                <div className="grid gap-y-4 m-2">
                                  <a
                                    key="/profile"
                                    href="profile"
                                    className="mx-1 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-darkest"
                                  >
                                    <UserIcon
                                      className="flex-shrink-0 h-6 w-6 "
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3 text-base font-medium ">
                                      Profile
                                    </span>
                                  </a>
                                  {/* <a
                                  key="/profile"
                                  href="profile"
                                  className="mx-1 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-darkest"
                                >
                                  <CogIcon
                                    className="flex-shrink-0 h-6 w-6 "
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3 text-base font-medium ">
                                    Settings
                                  </span>
                                </a> */}
                                  <button
                                    key="signout_from_small_menu"
                                    onClick={(e) => auth.signout()}
                                    className="mx-1 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-darkest"
                                  >
                                    <LogoutIcon
                                      className="flex-shrink-0 h-6 w-6 "
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3 text-base font-medium ">
                                      Sign Out
                                    </span>
                                  </button>
                                </div>
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                  )}
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
                          <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-logoBlue-medium  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-logoBlue-medium">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          {mobile.map((item) => (
                            <Link key={item.name} href={item.href}>
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
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>
                    {auth.user && (
                      <div className="pt-4 pb-3">
                        <div className="flex items-center px-4">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={auth.user.photoUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <div className="text-base font-semibold gradient">
                              {auth.user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              {auth.user.email}
                            </div>
                          </div>
                          <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-500 hover:text-logoBlue-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logoBlue-medium">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="pt-5 pb-6 px-5 space-y-6">
                          <div className="mt-6">
                            <div className="grid gap-y-8">
                              <a
                                key="profile_from_hamburger_menu"
                                href="profile"
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-darkest"
                              >
                                <UserIcon
                                  className="flex-shrink-0 h-6 w-6 "
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium ">
                                  Profile
                                </span>
                              </a>
                              {/* <a
                                key="/profile"
                                href="profile"
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-darkest"
                              >
                                <CogIcon
                                  className="flex-shrink-0 h-6 w-6 "
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium ">
                                  Settings
                                </span>
                              </a> */}
                              <button
                                key="signout_from_hamburger_menu"
                                onClick={(e) => auth.signout()}
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-darkest"
                              >
                                <LogoutIcon
                                  className="flex-shrink-0 h-6 w-6 "
                                  aria-hidden="true"
                                />
                                <span className="ml-3 text-base font-medium ">
                                  Sign Out
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="mt-3 space-y-1"></div>
                    <div className="py-6 px-5 space-y-6">
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {more.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <a className="text-base font-medium p-2 hover:text-logoBlue-medium flex justify-center text-left">
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                      {/* user is not signed OR has not created username */}
                      {!auth.user && (
                        <div>
                          <Link href="/signup">
                            <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-logoBlue-medium hover:bg-blue-400">
                              Sign up
                            </a>
                          </Link>

                          <p className="mt-6 text-center text-base font-medium ">
                            Already have an account?{" "}
                            <Link href="/signin">
                              <a className="hover:text-logoBlue-medium">
                                Sign in
                              </a>
                            </Link>
                          </p>
                        </div>
                      )}
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
