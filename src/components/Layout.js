import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const clickHandler = () => {
    setOpenMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  // useEffect to ensure that mobile menu closes after screensize of 859px (breakpoint for mobile menu).
  useEffect(() => {
    // Only run while mobile menu is open
    if (openMobileMenu) {
      const handleWindowResize = () => {
        console.log("hi");
        setWindowWidth(window.innerWidth);
        if (windowWidth > 859) {
          setOpenMobileMenu(false);
          setWindowWidth(0);
        }
      };

      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  });

  return (
    <>
      <Header handleClick={clickHandler} />
      <MobileHeader
        handleClick={closeMobileMenu}
        openMobileMenu={openMobileMenu}
      />
      <main>{children}</main>
    </>
  );
}
