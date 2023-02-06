import * as React from "react";
const Dot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    {...props}
  >
    <circle cx={4} cy={4} r={4} fill="#FD7842" />
  </svg>
);
export default Dot;
