import { useAuth } from "../lib/auth";
import Page from "../components/Page";

const SignIn = () => {
  const auth = useAuth();

  return (
    <>
      <h1>Sign In Here</h1>
      <button
        onClick={() => auth.signinWithGitHub("/profile")}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-black text-white dark:bg-white dark:text-black hover:bg-transparent border-gray-400 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white"
      >
        Continue with GitHub
      </button>
      <button
        onClick={() => auth.signinWithGoogle("/profile")}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-black text-white dark:bg-white dark:text-black hover:bg-transparent border-gray-400 focus:shadow-outline hover:border-black hover:text-black dark:hover:text-white dark:hover:border-white"
      >
        Continue with Google
      </button>
    </>
  );
};

const SignInPage = () => (
  <Page name="SignIn" path="/signin">
    <SignIn />
  </Page>
);

export default SignInPage;
