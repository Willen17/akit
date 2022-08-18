import { useState, useEffect } from "react";
import ZakitSymbol from "../assets/zakitSymbolWhite.svg";
import Menu from "../assets/menu.svg";

export default function Header() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <header
      style={{
        height: "6rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 4rem",
      }}
    >
      {isMobile ? (
        <img alt="Zakit symbol" src={ZakitSymbol} style={{ height: "3rem" }} />
      ) : (
        <img alt="Zakit symbol" src={ZakitSymbol} style={{ height: "4rem" }} />
      )}

      {isMobile ? (
        <img alt="menu" src={Menu} style={{ height: "2rem" }} />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            color: "#ffffff",
            fontSize: "2rem",
          }}
        >
          {" "}
          <p>about</p>
          <p>products</p>
          <p>contact</p>
        </div>
      )}
    </header>
  );
}
