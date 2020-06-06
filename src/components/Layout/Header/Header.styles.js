import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 100%;
`;

export const NavFlex = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
`;

export const Nav = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 80px;
`;

export const ArtistFlex = styled.p`
  line-height: 80px;
  margin: 0 40px;
  color: #fff;
`;

export const WatchFlex = styled.div`
  line-height: 80px;
  margin: 0 40px;
  color: grey;
  padding: 0 10px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 4px;
`;


export const Artist = styled.div`
  z-index: 2;
  position: fixed;
  line-height: 80px;
  margin: 0 40px;
  color: #fff;
`;

export const Watch = styled.div`
  z-index: 2;
  position: fixed;
  right: 140px;
  line-height: 80px;
  margin: 0 40px;
  color: grey;
  padding: 0 10px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 100;
  letter-spacing: 4px;
`;

export const PlayIcon = styled(BsFillPlayFill)`
  color: grey;
  font-size: 12px;
  font-weight: 100;
  z-index: 2;
  position: relative;
  top: 1px;
  padding-right: 6px;
`;

export const MenuContainer = styled.div`
  z-index: 2;
  position: fixed;
  right: 0;
  font-size: 20px;
  line-height: 80px;
  margin: 0 40px;
  color: #fff !important;
  padding-top: 4px;
`;

export const BurgerMenu = styled(FiMenu)`
  color: #fff !important;
  padding-top: 4px;
`;
