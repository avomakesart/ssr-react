import React from "react";
import { bool, func } from "prop-types";
import { StyledMenu, MobileLink, MobileLinkAnchor } from "./Menu.styles";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <MobileLink to="/" onClick={() => setOpen(!open)}>
        Home
      </MobileLink>
      <MobileLink to="/bio" onClick={() => setOpen(!open)}>
        Bio
      </MobileLink>
      <MobileLinkAnchor
        href="https://bazarama.com.mx/products/arder-trasher?_pos=1&_sid=987490d70&_ss=r"
        target="_blank"
        onClick={() => setOpen(!open)}
      >
        Merch
      </MobileLinkAnchor>
      <MobileLink to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </MobileLink>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Menu;
