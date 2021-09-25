import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchBarComponent(props) {
  return (
    <TextField
      id="standard-textarea"
      label="Search"
      onChange={props.filterByName}
      multiline
    />
  );
}
