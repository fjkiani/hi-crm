import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe3El4yrhoOB3rz4RzgDfaDHdNrU0qpb6ao5Z8vRTX0gTf96w/viewform" target="_blank" rel="noreferrer"> Get Started</a>
  </button>
);

export default Button;
