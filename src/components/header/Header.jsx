import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiSlash } from "react-icons/hi2";
import { RiColorFilterAiLine } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import { WiMoonAltWaxingGibbous4 } from "react-icons/wi";
import { LuSunMedium } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { HeaderContainer } from "./Header.styles";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="max-width">
      <HeaderContainer>
        <div className="logo">
          <h1 className="display-flex">
            <IoIosArrowBack />
            Amir
            <HiSlash />
            <IoIosArrowForward />
          </h1>
        </div>

        {/* Desktop Menu */}
        <menu className="header-right display-flex">
          <div
            className={`theme-toggle ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-btn">
              {darkMode ? (
                <WiMoonAltWaxingGibbous4 style={{ color: "#000" }} />
              ) : (
                <LuSunMedium />
              )}
            </div>
          </div>

          <RiColorFilterAiLine className="a2" />
          <IoLanguage className="a2" />
        </menu>

        {/* Mobile Menu Icon */}
        <div
          className="mobile-menu-icon"
          onClick={() => setOpen(true)}
        >
          <HiMenuAlt3 />
        </div>

        {/* Mobile Modal */}
        <div className={`mobile-menu ${open ? "active" : ""}`}>
          <div
            className="close-btn"
            onClick={() => setOpen(false)}
          >
            <IoClose />
          </div>

          <div
            className={`theme-toggle ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-btn">
              {darkMode ? (
                <WiMoonAltWaxingGibbous4 style={{ color: "#000" }} />
              ) : (
                <LuSunMedium />
              )}
            </div>
          </div>

          <RiColorFilterAiLine className="a2" />
          <IoLanguage className="a2" />
        </div>

        {open && (
          <div
            className="overlay"
            onClick={() => setOpen(false)}
          />
        )}
      </HeaderContainer>
    </div>
  );
};

export default Header;