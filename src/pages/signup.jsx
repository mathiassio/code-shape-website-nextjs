import { useAuth } from "../lib/auth";
import Page from "../components/Page";

const SignIn = () => {
  const auth = useAuth();
  const registerUser = event => {
    event.preventDefault()
    const target = event.target;
    const email = target.email.value;
    const password = target.email.value;
    const name = target.name.value;
    auth.signinWithEmail(email,password,name)
  }
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/images/logos/logo_blue.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-logoBlue-dark">
          Sign up to Code Shape
        </h2>
        <p className="mt-4 text-center text-sm text-gray-600">
          By signing up for an account, you automatically agree and accept the{" "}
          <a
            href="/terms-of-use"
            target="_blank"
            className="text-logoBlue-medium"
          >
            Terms of Use{" "}
          </a>{" "}
          and the{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="text-logoBlue-medium"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md dark:bg-gray-darkest rounded-lg">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST" onSubmit={registerUser}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-logoBlue-dark"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-logoBlue-dark"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-logoBlue-dark"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-logoBlue-dark hover:bg-logoBlue-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logoBlue-medium"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-darkest rounded-lg">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <button
                  onClick={() => auth.signinWithGitHub("/profile")}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <img
                    src="/images/logos/github.svg"
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => auth.signinWithApple("/profile")}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Apple</span>
                  <img
                    src="/images/logos/apple.svg"
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  />
                </button>
              </div>

              <div>
                <button
                  onClick={() => auth.signinWithGoogle("/profile")}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <img
                    src="/images/logos/google.svg"
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a
          href="/signin"
          className="font-medium text-logoBlue-dark hover:text-logoBlue-medium"
        >
          Sign In
        </a>
      </p>
    </div>
  );
};

const SignInPage = () => (
  <Page name="SignIn" path="/signin">
    <SignIn />
  </Page>
);

export default SignInPage;
