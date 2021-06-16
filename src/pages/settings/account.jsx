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
    current: false,
  },
  { name: "Account", href: "account", icon: CogIcon, current: true },
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
                {/* Account section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-xl leading-6 font-medium gradient">
                      Account
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Here you will be able manage your account.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row"></div>
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
