import MapPin from "../assets/mapPin.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";

export default function ContactPageMobile() {
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
      <p style={{ fontSize: "2rem", marginBottom: 0 }}>contact us</p>
      <p style={{ fontSize: "1.2rem" }}>We will highly appreciate it</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column-reverse",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img src={MapPin} alt="Map Pin" style={{ height: "2rem" }} />
              <p style={{ fontSize: "1.2rem" }}>address</p>
            </div>
            <p style={{ paddingLeft: "3rem" }}>
              Kungsportsavenyen 38 <br /> 411 36 Göteborg <br /> Sweden <br />
              <br /> +46 70 22 32 081
            </p>
          </div>

          <div
            style={{
              marginBottom: "2%",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <input
              placeholder="Name"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
              }}
            />{" "}
            <input
              placeholder="Email"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
              }}
            />
            <input
              placeholder="Telephone"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
              }}
            />{" "}
            <input
              placeholder="Subject"
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
              }}
            />
            <textarea
              placeholder="Message"
              rows={10}
              style={{
                border: 0,
                fontFamily: "BAHNSCHRIFT",
                fontSize: "1.1rem",
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <button
                style={{
                  borderRadius: 0,
                  border: 0,
                  height: "2rem",
                  width: "6rem",
                  fontFamily: "BAHNSCHRIFT",
                }}
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "1rem",
            paddingLeft: "3rem",
          }}
        >
          <img src={Twitter} alt="Twitter" style={{ height: "1.4rem" }} />
          <img src={Instagram} alt="Instagram" style={{ height: "2rem" }} />
          <img src={GitHub} alt="Github" style={{ height: "1.4rem" }} />
          <img src={LinkedIn} alt="Linked In" style={{ height: "1.4rem" }} />
        </div>
        <p>back to top</p>
      </div>
    </div>
  );
}
