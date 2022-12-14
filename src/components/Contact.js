import MapPin from "../assets/mapPin.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Triangle from "../assets/whiteTriangle.svg";

export default function ContactPage() {
  return (
    <div
      style={{
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        padding: "0 5%",
        background: "#284B63",
      }}
    >
      <p style={{ fontSize: "3vw", marginBottom: 0 }}>contact us</p>
      <p style={{ fontSize: "2vw" }}>We will highly appreciate it</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img src={MapPin} alt="Map Pin" style={{ height: "2.2vw" }} />
              <p style={{ fontSize: "1.4vw" }}>address</p>
            </div>
            <p style={{ paddingLeft: "3rem" }}>
              Kungsportsavenyen 38 <br /> 411 36 Göteborg <br /> Sweden <br />
              <br /> +46 70 22 32 081
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img src={Twitter} alt="Twitter" style={{ height: "1.4rem" }} />
            <img src={Instagram} alt="Instagram" style={{ height: "2rem" }} />
            <img src={GitHub} alt="Github" style={{ height: "1.4rem" }} />
            <img src={LinkedIn} alt="Linked In" style={{ height: "1.4rem" }} />
          </div>
        </div>
        <div
          style={{
            width: "50%",
            marginBottom: "2%",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              columnGap: "5%",
              height: "2.5rem",
            }}
          >
            <input
              placeholder="Name"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
                width: "calc(50% - 1rem)",
              }}
            />{" "}
            <input
              placeholder="Email"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
                width: "calc(50% - 1rem)",
              }}
            />
          </div>
          <div style={{ display: "flex", columnGap: "5%", height: "2.5rem" }}>
            <input
              placeholder="Telephone"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
                width: "calc(50% - 1rem)",
              }}
            />{" "}
            <input
              placeholder="Subject"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
                width: "calc(50% - 1rem)",
              }}
            />
          </div>
          <textarea
            placeholder="Message"
            rows={10}
            style={{ border: 0, fontFamily: "BAHNSCHRIFT", fontSize: "1.1rem" }}
          />
          <div
            style={{ width: "100%", display: "flex", justifyContent: "right" }}
          >
            <button
              style={{
                borderRadius: 0,
                border: 0,
                height: "2.5vw",
                width: "10vw",
                fontFamily: "BAHNSCHRIFT",
              }}
            >
              SEND
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <p style={{ paddingRight: "2vw" }}>2022 © akit </p>
          <p>all rights reserved</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Triangle}
            alt="Graphic element"
            style={{ paddingRight: "1rem", height: "1rem" }}
          />
          <p>back to top</p>
        </div>
      </div>
    </div>
  );
}
