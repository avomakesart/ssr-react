import styled, {css} from "styled-components";
import {
  FaSpotify,
  FaMusic,
  FaBandcamp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export const Title = styled.h1`
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 3rem;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  padding: 3rem;
`;

export const BoldParagraph = styled.b`
  color: orange;
`;

export const Button = styled.a`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  font-family: "Oswald", sans-serif;
  padding: 0px 35px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  margin: 0 auto;
`;

const customBackground = css`
  background: url(https://media.giphy.com/media/3o7qE2KFaCY1xVIqu4/source.gif);
  background-repeat: no-repeat;
  background-size: cover
`;

export const BioContainer = styled.div`
 ${customBackground};
  margin: 0 auto;
  position: relative;

  @media (min-width: 900px) {
    position: relative;
    margin: 0 auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    margin: 0 auto;
    justify-content: space-around;
  }
`;

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;

  @media (min-width: 900px) {
    margin: 0 auto 3rem auto;
  }
`;

export const SpotifyIcon = styled(FaSpotify)`
  font-size: 2rem;
  color: white;
  margin: 0 auto;
`;

export const AppleMusicIcon = styled(FaMusic)`
  font-size: 2rem;
  color: white;
  margin: 0 auto;
`;

export const BandCampIcon = styled(FaBandcamp)`
  font-size: 2rem;
  color: white;
  margin: 0 auto;
`;

export const FacebookIcon = styled(FaFacebook)`
  font-size: 2rem;
  color: white;
  margin: 0 auto;
`;

export const InstagramIcon = styled(FaInstagram)`
  font-size: 2rem;
  color: white;
  margin: 0 auto;
`;

export const BagIcon = styled(FiShoppingBag)`
  font-size: 2rem;
  color: white;
  margin: 0 auto;
`;
