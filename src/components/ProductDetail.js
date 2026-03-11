import React from "react";

function App() {

  const container = {
    display: "flex",
    padding: "40px",
    gap: "40px",
    fontFamily: "Arial"
  };

  const imageSection = {
    display: "flex",
    gap: "20px"
  };

  const imageCard = {
    width: "350px",
    background: "#f5f5f5",
    borderRadius: "10px",
    padding: "10px"
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "8px"
  };

  const details = {
    maxWidth: "400px"
  };

  const deal = {
    background: "#2e7d32",
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "14px"
  };

  const priceBox = {
    marginTop: "20px",
    fontSize: "22px"
  };

  const buyBtn = {
    marginTop: "20px",
    background: "#2874f0",
    color: "white",
    border: "none",
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={container}>

      {/* LEFT IMAGES */}
      <div style={imageSection}>

        <div style={imageCard}>
          <img
            src="../assets/frontpage.webp"
            alt="jewel"
            style={imgStyle}
          />
        </div>

        <div style={imageCard}>
          <img
            src="../assets/detailing.webp"
            alt="jewel"
            style={imgStyle}
          />
        </div>

      </div>

      {/* RIGHT DETAILS */}
      <div style={details}>

        <p>Selected Color: <b>WHITE</b></p>

        <h2>elegents</h2>

        <p>Alloy Brass White Jewel Set (Pack of 1)</p>

        <p style={{color:"green"}}>⭐ 4 | 2,145 ratings</p>

        <span style={deal}>Hot Deal</span>

        <div style={priceBox}>
          <span style={{color:"green", marginRight:"10px"}}>↓91%</span>
          <span style={{textDecoration:"line-through", color:"#777", marginRight:"10px"}}>
            ₹2,750
          </span>
          <b>₹240</b>
        </div>

        <button style={buyBtn}>
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default App;