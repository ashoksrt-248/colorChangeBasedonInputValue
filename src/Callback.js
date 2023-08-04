import React, { useState } from "react";

const Callback = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <div>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        value={activeColor}
      />
      <p>
        Enter any Color name in Input box it will change the color for above box
      </p>
    </div>
  );
};

export default Callback;
