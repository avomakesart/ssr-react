import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import { useOnClickOutside } from "../../../hooks/useClickOutside";
import {
  Nav,
  Artist,
  Watch,
  PlayIcon,
} from "./Header.styles";

import Burger from "../../Burger/Burger";
import Menu from "../../Menu/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <Nav>
        <Artist className="artist"><Link to="/">Arder</Link></Artist>
        <Watch className="watch">
          <PlayIcon />
          <a
            href="https://www.youtube.com/watch?v=-LlNmgpcfVM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lyric Video
          </a>
        </Watch>
        {/* <MenuContainer className="menu" ref={node}>
        <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </MenuContainer> */}
        <div className="menu" ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div> 
      </Nav>
    </>
  );
}
