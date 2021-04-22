import "../components/layout/layout.css";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../components/additionals/exampleStyles.css";

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
