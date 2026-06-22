import React, { useState } from "react";
import "./navigation.css";

import { TiHome } from "react-icons/ti";
import { FaUserPen } from "react-icons/fa6";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { TbAppsFilled } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";

const Navigation = () => {
  const [active, setActive] = useState(0);

  const navItems = [
    <TiHome />,
    <FaUserPen />,
    <PiTreeStructureDuotone />,
    <TbAppsFilled />,
    <IoIosStats />,
    <MdMarkEmailUnread />,
  ];

  return (
    <div className="def-nav">
      <div className="navigation">
        <div
          className="active-bg"
          style={{
            transform: `translateX(${active * 100}%)`,
          }}
        />

        {navItems.map((icon, index) => (
          <div
            key={index}
            className={`nav-icon ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;