import "../components/layout/layout.css";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../lib/auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
