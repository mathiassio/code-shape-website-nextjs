import "../components/layout/layout.css";
import Header from "../components/layout/Header";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
