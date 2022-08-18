import DividerPics from "../assets/dividerPics.png";

export default function DividerPictures() {
  return (
    <div
      style={{
        overflowX: "hidden",
        background: "#ffffff",
        marginTop: "-5vw",
        position: "relative",
        color: "#ffffff",
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
    </div>
  );
}
