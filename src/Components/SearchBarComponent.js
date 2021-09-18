import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBarComponent() {
  return (
    <TextField
      id="standard-textarea"
      label="Search Products"
      multiline
    />
  );
}
