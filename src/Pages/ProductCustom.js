import React from "react";
import ButtonComponent from "../Components/ButtonComponent";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import "../Styles/ProductCustom.css";

export default function ProductCustom() {
  
  function Submit() {
    console.log("test");
  }

  return (
    <div className="ProductCustom">
      <h3>Upload Prescription Recipe</h3>

      <div className="InputField">
        <h6>Name</h6>
        <input className="inputs" type="name" placeholder="Type your name" />

        <h6>Email</h6>
        <input className="inputs" type="email" placeholder="Type your email" />

        <h6>Upload Prescription Image</h6>
        <div className="IconPrescription">
          <BackupOutlinedIcon fontSize="large" />
          <p>Choose File</p>
        </div>

        {/* <input type="file" /> */}

        <ButtonComponent title={"Submit"} onCLick={Submit} />
      </div>
    </div>
  );
}
