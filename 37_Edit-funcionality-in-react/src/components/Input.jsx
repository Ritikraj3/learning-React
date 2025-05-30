import React from "react";

export default function ({
  Label,
  id,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{Label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <span className="error">{error}</span>
    </div>
  );
}
