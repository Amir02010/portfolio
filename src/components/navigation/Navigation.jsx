import React, { useState, useRef, useEffect } from "react";
import "./navigation.css";

// Icons
import { TiHome } from "react-icons/ti";
import { FaUserPen } from "react-icons/fa6";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { TbAppsFilled } from "react-icons/tb";
import { IoIosStats } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaGripLines } from "react-icons/fa";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="def-nav">
      {!open && (
        <FaGripLines
          className="menu-btn"
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <div ref={navRef} className="navigation display-flex">
          <TiHome />
          <FaUserPen />
          <PiTreeStructureDuotone />
          <TbAppsFilled />
          <IoIosStats />
          <MdMarkEmailUnread />
        </div>
      )}
    </div>
  );
};

export default Navigation;