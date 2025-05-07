import React from "react";

export default function SelectMenu(
 { Label,
  id,
  name,
  value,
  onChange,
  error,
  options = [],
  defaultOption
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{Label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (<option value="" hidden>{defaultOption} </option>)}
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <span className="error">{error} </span>
    </div>
  );
}
