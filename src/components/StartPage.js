import ZakitWhite from "../assets/zakitWhite.svg";
import WhiteTriangle from "../assets/whiteTriangle.svg";
import { useEffect, useState } from "react";

export default function StartPage() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1500px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1500px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <div
      style={{
        height: "calc(100vh - 6rem)",
        backgroundColor: "#353535",
        display: "flex",

        justifyContent: "space-evenly",
        color: "#ffffff",
      }}
    >
      {matches && (
        <img
          alt="zakit logo"
          src={ZakitWhite}
          style={{ height: "30%", paddingTop: "20vh" }}
        />
      )}
      {!matches && (
        <img
          alt="zakit logo"
          src={ZakitWhite}
          style={{ height: "20%", paddingTop: "20vh" }}
        />
      )}

      <div style={{ paddingTop: "20vh" }}>
        {matches && (
          <p style={{ fontSize: "3rem" }}>
            Design is intelligence <br></br>made visible
          </p>
        )}
        {!matches && (
          <p style={{ fontSize: "2.5rem" }}>
            Design is intelligence <br></br>made visible
          </p>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            alt="white triangle"
            src={WhiteTriangle}
            style={{ height: "2rem" }}
          />

          {matches && <p style={{ fontSize: "2.2rem" }}>read more</p>}
          {!matches && <p style={{ fontSize: "2rem" }}>read more</p>}
        </div>
      </div>
    </div>
  );
}
