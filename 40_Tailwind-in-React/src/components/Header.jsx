import React from "react";
import reactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="flex justify-between shadow-md py-4 md:px-8 px-4 ">
      <img src={reactLogo} alt="react-logo" />
      <ul className="flex gap-4">
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">About</a>
        </li>
        <li>
          <a href="./">Contact</a>
        </li>
      </ul>
    </header>
  );
}
