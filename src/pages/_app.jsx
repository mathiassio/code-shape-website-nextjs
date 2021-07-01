import "../components/layout/layout.css";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../lib/auth";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthProvider>
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </AuthProvider>
  );
}

export default MyApp;
