import React from "react";
import "./CountryDetailShimmer.css";
export const CountryDetailShimmer = () => {
  return (
    <div className="country-details-container">
      <div className="country-image"></div>
      <div className="details-text-container">
        <div className="heading"></div>
        <div className="details-text">
          <div className="each-detail"></div>
          <div className="each-detail"></div>
          <div className="each-detail"></div>
          <div className="each-detail"></div>
          <div className="each-detail"></div>
          <div className="each-detail"></div>
          <div className="each-detail"></div>
        </div>
        <div className="border-countries"></div>
      </div>
    </div>
  );
};
