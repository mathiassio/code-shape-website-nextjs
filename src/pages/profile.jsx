import { useAuth } from "../lib/auth";
import PageIntro from "../components/intros/PageIntro";
import styled from "styled-components";

const Wrapper = styled.div`
  .gradient {
    background: ${(props) =>
      props.gradientColor || "-webkit-linear-gradient(left, #037de8, #0fd9d9)"};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default function ProfilePage() {
  const auth = useAuth();

  return auth.user ? (
    <Wrapper className="mx-5">
      <PageIntro
        title="Welcome"
        description="While we wait for more content to arrive, go ahead and explore the articles and the community."
        gradientColor="-webkit-linear-gradient(left, #037de8, #0fd9d9)"
      />

      <section aria-labelledby="profile-overview-title">
        <div className="rounded-lg overflow-hidden shadow max-w-3xl m-auto bg-gray-50 dark:bg-gray-darkest">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div>
            <div className="p-6 max-w-2xl mx-auto">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-5">
                  <div className="flex-shrink-0">
                    <img
                      className="mx-auto h-20 w-20 rounded-full"
                      src={auth.user.photoUrl}
                      alt=""
                    />
                  </div>
                  <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                    <p className="text-xl font-bold gradient sm:text-2xl">
                      {auth.user.name}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {auth.user.email},{" "}
                      <p>
                        Signed in with{" "}
                        <span className="gradient">{auth.user.provider}</span>
                      </p>
                    </p>
                    <p></p>
                  </div>
                </div>
                <div className="mt-5 flex justify-center sm:mt-0">
                  <a
                    href="/articles"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 text-gray-500 transition-colors duration-150 border-gray-500 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white"
                  >
                    Explore Content{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  ) : (
    <div className="text-center">Loading...</div>
  );
}
