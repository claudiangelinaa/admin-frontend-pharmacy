import React, { useEffect, useState } from "react";
import "../Styles/Homepage.css";
import Background from "../Assets/Bg.jpg";
import ButtonComponent from "../Components/ButtonComponent";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="Header">
        <h1>Welcome to our Pharmacy store</h1>
        <div style={{ fontSize: 20, paddingTop: 20, marginBottom: 50 }}>
          Our store provide best products to consume for our customer
        </div>
        <div style={{ width: 200 }}>
          <ButtonComponent title={"Learn More"} />
        </div>
      </div>
      <div className="Background">
        <img src={Background} width="800" height="600" alt="bg" />
      </div>
    </div>
  );
}
