import React from "react";

const Menue = ({ fillColor = "#FDFFFC", ...props }) => (
  <svg
    width="50"
    height="53"
    viewBox="0 0 50 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y="0.5" width="50" height="5.49073" rx="2.74537" fill={fillColor} />
    <rect y="23.5605" width="50" height="5.49073" rx="2.74537" fill={fillColor} />
    <rect y="46.6211" width="50" height="5.49073" rx="2.74537" fill={fillColor} />
  </svg>
);

export default Menue;
