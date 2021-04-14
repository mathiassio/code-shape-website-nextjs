import "../components/layout/layout.css"
import Header from "../components/layout/Header"
import { GlobalStyle } from "../components/styles/GlobalStyle"
import Footer from "../components/layout/Footer"
import SideBarMenu from "../components/layout/Navigation/SidebarMenu"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideBarMenu />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
