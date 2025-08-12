import React, { useState } from "react";

const ToggleComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to modify state
  const toggleVisibility = () => {
    // Functional update to avoid stale state issues
    alert("button clicked")
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Text
      </button>

      {isVisible && <p>Hello! You can now see me.</p>}
    </div>
  );
};

export default ToggleComponent;
