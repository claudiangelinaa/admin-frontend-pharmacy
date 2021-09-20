import React from "react";
import { Spinner } from 'react-bootstrap'
import "../Styles/Components/Loading.css"

export default function LoadingComponent() {
  return (
    <div className="Loading">
      <Spinner animation="border" />
    </div>
  );
}
