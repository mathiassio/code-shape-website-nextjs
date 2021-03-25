import "../components/layout/layout.css";
import Header from "../components/layout/header";
import { GlobalStyle } from "../components/styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
