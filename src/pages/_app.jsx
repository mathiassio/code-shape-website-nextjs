import "../components/layout/layout.css";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../lib/auth";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }) {
  const nextrouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    nextrouter.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      nextrouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [nextrouter.events]);

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
