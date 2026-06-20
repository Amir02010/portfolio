import styled from "styled-components";
import "../../App.css";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 65%;
  height: 60px;

  border-radius: 10px;
  border: 1px solid var(--primary);
  box-shadow: 0 0 10px var(--primary-shadow);

  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.3);

  padding: 0 20px 0 10px;
  z-index: 1000;

  .logo h1 {
    font-size: clamp(20px, 2vw, 30px);
    align-items: center;
    gap: 2px;
    text-shadow: 1px 1px 1px var(--primary);

    svg {
      color: var(--primary);
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .a2 {
    font-size: 22px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      color: var(--primary);
    }
  }

  /* ==========================
     TOGGLE
  ========================== */

  .theme-toggle {
    width: 60px;
    height: 30px;
    border-radius: 30px;
    position: relative;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px var(--primary-shadow);

    transition: all 0.3s ease;
  }

  .toggle-btn {
    position: absolute;
    top: 2px;
    left: 2px;

    width: 26px;
    height: 26px;

    border-radius: 50%;
    background: var(--primary);

    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-size: 18px;

    transition: all 0.3s ease;
  }

  .theme-toggle.active .toggle-btn {
    left: calc(100% - 28px);
  }

  /* ==========================
     MOBILE ICON
  ========================== */

  .mobile-menu-icon {
    display: none;
    font-size: 32px;
    color: var(--primary);
    cursor: pointer;
  }

  /* ==========================
     MOBILE MENU
  ========================== */

  .mobile-menu {
    position: fixed;
    top: 60px;
    right: -100%;

    width: 200px;
    height: 150px;

    background: var(--white);
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    gap: 30px;

    padding: 50px 20px 20px 20px;

    transition: 0.4s ease;
    z-index: 2000;
  }

  .mobile-menu.active {
    right: 20px;
    box-shadow: 0px 0px 10px var(--primary-shadow);
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;

    font-size: 32px;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    inset: 0;

    /* background: rgba(0, 0, 0, 0.4); */
    z-index: 1500;
  }

  /* ==========================
     RESPONSIVE
  ========================== */

  @media (max-width: 992px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 92%;
  }

  @media (max-width: 530px) {
    width: 95%;
    height: 55px;

    .header-right {
      display: none;
    }

    .mobile-menu-icon {
      display: block;
    }

    .logo h1 {
      font-size: clamp(18px, 4vw, 24px);
    }
  }
`;