import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { useOnClickOutside } from "../../../hooks/useClickOutside";
import {
  Container,
  NavFlex,
  ArtistFlex,
} from "./Header.styles";

import Burger from "../../Burger/Burger";
import Menu from "../../Menu/Menu";

export default function HeaderFlex() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container>
      <NavFlex>
        <ArtistFlex><Link to="/">Arder</Link></ArtistFlex>
        <div className="menu" ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </NavFlex>
    </Container>
  );
}
