import React from "react";
import { useRouteError } from "react-router";
const image = new URL("../assets/images/errorImage.png", import.meta.url).href;

export default function Error() {
  const error = useRouteError();
  return (
    <div className="error-container">
      <div>
        <img className="error-image" src={image} alt="Error" />
        <h1 className="error-message">
          {" "}
          {error.status} {error.statusText} !!!
        </h1>
      </div>
    </div>
  );
}
