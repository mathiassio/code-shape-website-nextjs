import Link from "next/link";
import PageTitle from "../../components/intros/PageTitle";
import { useAuth } from "../../lib/auth";
import styled from "styled-components";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const preferencesNavigation = [
  {
    name: "Profile",
    href: "profile",
    icon: UserCircleIcon,
    current: true,
  },
  { name: "Account", href: "account", icon: CogIcon, current: false },
  {
    name: "Password",
    href: "password",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "Notifications",
    href: "notifications",
    icon: BellIcon,
    current: false,
  },
  {
    name: "Subscription",
    href: "subscription",
    icon: CreditCardIcon,
    current: false,
  },
];

const Wrapper = styled.div`
  .gradient {
    background: ${(props) =>
      props.gradientColor || "-webkit-linear-gradient(left, #037de8, #0fd9d9)"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function Settings() {
  const auth = useAuth();

  return auth.user ? (
    <Wrapper>
      <PageTitle title="Settings" />
      <main className="relative mt-10">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white dark:bg-gray-dark rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 dark:divide-gray-darkest lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {preferencesNavigation.map((item) => (
                    <Link href={item.href}>
                      <a
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 dark:bg-gray-light border-blue-500 text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-light hover:text-gray-700 dark:hover:text-blue-500"
                            : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-gray-light dark:hover:text-gray-50",
                          "group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-blue-500 group-hover:text-blue-500 dark:group-hover:text-blue-500"
                              : "text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-50",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </aside>

              <form
                className="divide-y divide-gray-200 dark:divide-gray-darkest lg:col-span-9"
                action="#"
                method="POST"
              >
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-xl leading-6 font-medium gradient">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful
                      what you share.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium gradient"
                        >
                          Name
                        </label>
                        <div className="mt-1 rounded-md shadow-sm flex">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="given-name"
                            className="mt-1 block w-full border border-gray-300 dark:border-gray-light dark:bg-gray-light rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                            defaultValue={auth.user.name}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium gradient"
                        >
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 dark:border-gray-light dark:bg-gray-light rounded-md"
                            defaultValue={auth.user.about}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                      <p
                        className="text-sm font-medium gradient"
                        aria-hidden="true"
                      >
                        Photo
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                            aria-hidden="true"
                          >
                            <img
                              className="rounded-full h-full w-full"
                              src={auth.user.photoUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="group relative border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
                              <label
                                htmlFor="user_photo"
                                className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="user_photo"
                                name="user_photo"
                                type="file"
                                className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden relative rounded-full overflow-hidden lg:block">
                        <img
                          className="relative rounded-full w-40 h-40"
                          src={auth.user.photoUrl}
                          alt=""
                        />
                        <label
                          htmlFor="user-photo"
                          className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="user-photo"
                            name="user-photo"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium gradient"
                      >
                        Website
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-light dark:bg-gray-light rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Share your projects with others to help them get
                        inspired.
                      </p>
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium gradient"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="mt-1 block w-full border border-gray-300 dark:border-gray-light dark:bg-gray-light rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Control section */}
                <div className="pt-6 divide-y divide-gray-darkest">
                  <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                    <button
                      type="button"
                      className="border rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-500 transition-colors duration-150 border-gray-500 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-5 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium transition-colors duration-150 bg-black text-white dark:bg-white dark:text-black hover:bg-transparent border-gray-400 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  ) : (
    <div className="text-center">Loading...</div>
  );
}
