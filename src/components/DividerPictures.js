import DividerPics from "../assets/dividerPics.png";
import Triangle from "../assets/whiteTriangle.svg";

export default function DividerPictures() {
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
        <img src={Triangle} alt="A triangle" style={{ height: "3vw" }} />
        <p style={{ fontSize: "3vw" }}>products</p>
      </div>
    </div>
  );
}
