import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const menuBackground = css`
  background: url(https://media.giphy.com/media/5QRpj3tQyE2gRII7Y4/source.gif);
`;

export const StyledMenu = styled.nav`
  width: 55%;
  flex-direction: column;
  justify-content: center;
  ${menuBackground};
  height: 100vh;
  z-index: auto;
  text-align: right;
  font-family: "Oswald", sans-serif;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 11;
  display: ${({ open }) => (open ? "flex" : "none")};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 900px) {
    width: 35%;
    text-align: right;
  }
`;

export const MobileLink = styled(Link)`
  font-size: 1.5em;
  text-transform: normal;
  padding: 2rem;
  font-weight: 600;
  letter-spacing: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    text-align: right;
  }
  :hover {
    color: red;
  }
`;

export const MobileLinkAnchor = styled.a`
  font-size: 1.5em;
  text-transform: normal;
  padding: 2rem;
  font-weight: 600;
  letter-spacing: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: 800px) {
    font-size: 1.5rem;
    text-align: right;
  }
  :hover {
    color: red;
  }
`;
