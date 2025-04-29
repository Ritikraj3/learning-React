import React from "react";
import "./CountriesListShimmer.css";

export const CountriesListShimmer = () => {
  // new Array(10).fill('')

  return (
    <div className="countries-container">
      {Array.from({ length: 15 }).map((el, i) => {
        return <div key={i} className=" country-card shimmer-card"></div>;
      })}
    </div>
  );
};
