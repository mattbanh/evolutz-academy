import Header from "./Header";
import MobileHeader from "./MobileHeader";
import { useState } from "react";

export default function Layout({ children }) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const clickHandler = () => {
    setOpenMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

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
