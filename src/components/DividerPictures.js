import { useEffect, useState } from "react";
import DividerPics from "../assets/dividerPics.png";
import Triangle from "../assets/whiteTriangle.svg";

export default function DividerPictures() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1024px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div
      style={{
        overflowX: "hidden",
        background: "linear-gradient(to top, #353535 57.5%, #ffffff 42.5% )",
        marginTop: "-5vw",
        position: "relative",
        color: "#ffffff",
        overflowY: "hidden",
      }}
    >
      <img
        src={DividerPics}
        alt="Example of what we do"
        style={{ width: "100vw" }}
      />

      <p
        style={{
          position: "absolute",
          bottom: "17vw",
          left: "9%",
          fontSize: "4vw",
        }}
      >
        Developer
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "4vw",
          bottom: "25vw",
          left: "45%",
        }}
      >
        Designer
      </p>
      <p
        style={{
          position: "absolute",
          fontSize: "4vw",
          bottom: "30vw",
          left: "77%",
        }}
      >
        Dreamer
      </p>
      {!isMobile ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",

            columnGap: "1rem",
            color: "#ffffff",
            position: "absolute",
            bottom: 0,
            right: "5%",
          }}
        >
          <img src={Triangle} alt="A triangle" style={{ height: "3rem" }} />
          <p style={{ fontSize: "3rem" }}>products</p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",

            columnGap: "1rem",
            color: "#ffffff",
            position: "absolute",
            bottom: "-1rem",
            right: "5%",
          }}
        >
          <img src={Triangle} alt="A triangle" style={{ height: "1.5rem" }} />
          <p style={{ fontSize: "1.5rem" }}>products</p>
        </div>
      )}
    </div>
  );
}
