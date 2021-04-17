import "../components/layout/layout.css"
import { GlobalStyle } from "../components/styles/GlobalStyle"
import Footer from "../components/layout/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
