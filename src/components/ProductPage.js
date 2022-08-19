import VideoPic from "../assets/videoProdPic.svg";
import WebsitePic from "../assets/websitePic.svg";
import DesignPic from "../assets/designPic.svg";

export default function ProductPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: "0 5%",
        color: "#ffffff",
      }}
    >
      <p style={{ fontSize: "2vw", marginTop: 0 }}>Beyond your expectations.</p>
      <p
        style={{
          textAlign: "right",
          fontSize: "1.2vw",
          fontWeight: "lighter",
          maxWidth: "80vw",
          marginTop: 0,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare mattis
        natoque fermentum et. Venenatis libero elit ante in neque. Ac ac vel
        tellus ullamcorper. Aliquam congue mi pellentesque ut ut cras sagittis
        faucibus turpis.Ornare curabitur consequat eu dictumst tellus mauris.
        Donec tincidunt suspendisse felis, leo vitae. Pharetra amet, nibh justo
        malesuada sagittis. Congue ultrices massa neque, nibh malesuada sit. At
        tincidunt amet ipsum elit. Eget non tortor elementum eget sit. Eget
        fames nunc leo turpis sit nulla sed.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "80%",
          marginTop: "2rem",
          columnGap: "5%",
        }}
      >
        <div style={{ position: "relative", marginTop: "5%" }}>
          <p
            style={{
              fontSize: "2vw",
              position: "absolute",
              left: "10%",
              top: "15%",
            }}
          >
            video <br />
            production
          </p>
          <img
            src={VideoPic}
            alt="Video Production"
            style={{ width: "20vw" }}
          />
          <p style={{ maxWidth: "60%", fontSize: "1.2vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            tellus nunc risus ipsum ornare. At lectus sed vitae interdum.
          </p>
        </div>
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: "2vw", position: "absolute", left: "15%" }}>
            quality <br />
            websites
          </p>
          <img
            src={WebsitePic}
            alt="Man coding a website"
            style={{ width: "20vw" }}
          />
          <p style={{ maxWidth: "60%", fontSize: "1.2vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            viverra pellentesque lectus aliquam, tincidunt dui. Enim sit velit
            ornare.
          </p>
        </div>
        <div style={{ position: "relative", marginTop: "5%" }}>
          <p
            style={{
              fontSize: "2vw",
              position: "absolute",
              left: "10%",
              top: "15%",
            }}
          >
            graphic <br />
            design
          </p>
          <img src={DesignPic} alt="Design example" style={{ width: "20vw" }} />
          <p style={{ maxWidth: "60%", fontSize: "1.2vw" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            viverra pellentesque lectus aliquam, tincidunt dui. Enim sit velit
            ornare.
          </p>
        </div>
      </div>
    </div>
  );
}
