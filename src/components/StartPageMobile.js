import ZakitWhite from "../assets/zakitWhite.svg";
import WhiteTriangle from "../assets/whiteTriangle.svg";
import { useState, useEffect } from "react";

export default function StartPageMobile() {
  return (
    <div
      style={{
        height: "calc(100vh - 6rem)",
        backgroundColor: "#353535",
        color: "#ffffff",
        padding: "0 3rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <img alt="zakit logo" src={ZakitWhite} style={{ height: "30vw" }} />

      <div>
        <p style={{ fontSize: "10vw", marginTop: "0" }}>
          Design is intelligence <br></br>made visible
        </p>

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
            style={{ height: "5vw" }}
          />

          <p style={{ fontSize: "5vw" }}>read more</p>
        </div>
      </div>
    </div>
  );
}
