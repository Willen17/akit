import { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import ContactPage from "./Contact";
import DividerPictures from "./DividerPictures";
import Header from "./Header";
import ProductPage from "./ProductPage";
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
      <AboutPage />
      <DividerPictures />
      <ProductPage />
      <ContactPage />
    </div>
  );
}
