import { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import AboutPageMobile from "./AboutPageMobile";
import ContactPage from "./Contact";
import ContactPageMobile from "./ContactMobile";
import DividerPictures from "./DividerPictures";
import Header from "./Header";
import ProductPage from "./ProductPage";
import ProductPageMobile from "./ProductPageMobile";
import StartPage from "./StartPage";
import StartPageMobile from "./StartPageMobile";

export default function Layout() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      {isMobile ? <StartPageMobile /> : <StartPage />}
      {isMobile ? <AboutPageMobile /> : <AboutPage />}
      <DividerPictures />
      {isMobile ? <ProductPageMobile /> : <ProductPage />}
      <div
        style={{
          width: "0",
          height: 0,
          borderLeft: "100vw solid transparent",
          borderRight: "0rem solid transparent",
          borderBottom: "20vw solid #284B63",
          marginTop: "-5vw",
        }}
      />
      {isMobile ? <ContactPageMobile /> : <ContactPage />}
    </div>
  );
}
