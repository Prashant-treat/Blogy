import React from "react";
import logo from "../assets/logo.png";
import image from "../assets/image.png";

function Logo({ width = "100px" }) {
  return (
    <div className="flex items-center">
      
      {/* Mobile Logo */}
      <img
        src={logo}
        alt="Blogy"
        style={{ width }}
        className="object-contain block md:hidden"
      />

      {/* Desktop Logo */}
      <img
        src={image}
        alt="Image"
        className="object-contain hidden md:block w-32"
      />
      
    </div>
  );
}

export default Logo;

