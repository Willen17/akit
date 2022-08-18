import AboutPic from "../assets/aboutpic.svg";
import Triangle from "../assets/blueTriangle.svg";

export default function AboutPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#ffffff",
        background: "linear-gradient(to top, #ffffff 57.5%, #353535 42.5% )",
      }}
    >
      <p
        style={{
          fontWeight: "100",
          fontSize: "5vw",
          margin: "0",
          marginLeft: "15vw",
        }}
      >
        A digital agency <br /> with a human <br /> touch
      </p>

      <img
        src={AboutPic}
        alt="Our office"
        style={{
          width: "100vw",
          marginTop: "-15%",
        }}
      />
      <div
        style={{
          marginTop: "-20vw",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "5vw",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "1rem",
            color: "#284B63",
          }}
        >
          <img src={Triangle} alt="A triangle" style={{ height: "3vw" }} />
          <p style={{ fontSize: "3vw" }}>who we are</p>
        </div>
        <p style={{ color: "#284B63", fontSize: "2vw", paddingLeft: "9.5vw" }}>
          A one man show, so far.
        </p>
        <p
          style={{
            color: "#000000",
            fontSize: "1.4vw",
            maxWidth: "50vw",
            paddingLeft: "9.5vw",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu a magna
          ac dui. Laoreet volutpat adipiscing diam accumsan etiam interdum amet.
          Semper felis et aliquam libero. Consequat sapien, netus penatibus ut.
          <br /> <br /> Tempor nibh elementum velit, neque massa. In dui, amet
          laoreet ornare quis dictumst semper ac. Scelerisque gravida in dolor
          volutpat, turpis cras massa in elementum. Risus, ac leo faucibus amet,
          diam volutpat. Nunc nulla habitasse egestas sagittis, mattis amet.
          <br /> <br />
          Pharetra quis suspendisse neque eget molestie eget amet. Sed.
        </p>
      </div>
    </div>
  );
}
