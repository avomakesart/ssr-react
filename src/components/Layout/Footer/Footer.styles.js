import styled from "styled-components";
import { FaHeadphones, FaPause } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

export const SocialMediaContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 0.5%;
  left: 0;
  transform: translateY(-50%);
  margin: 0 auto;
`;

export const SocialMediaLinks = styled.ul`
  display: inline-block;
  z-index: 2;
  list-style: none;
  padding: 0 10px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 100;
`;

export const SocialMediaLinksLi = styled.li`
  display: inline-block;
  list-style: none;
  padding: 0 10px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: 100;
`;

export const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;

  :hover {
    color: red;
  }
`;

export const ListeningSongContainer = styled.div`
  position: absolute;
  bottom: -2%;
  right: 40px;
  transform: translateY(-50%);
`;

export const ListeningSongUl = styled.ul`
  display: inline-block;
  list-style: none;
  color: #fff;
  padding: 0 10px;
`;

export const ListeningSongLi = styled.li`
  display: inline-block;
  list-style: none;
  color: #fff;
  padding: 0 10px;
`;

export const AudioButton = styled.button`
  background: transparent;
  border: none;
  margin: 25rem -15px;

  @media (min-width: 600px) {
    margin: 15rem -15px;
  }

  @media (min-width: 768px) {
    margin: 15rem -15px;
  }

  @media (min-width: 900px) {
    margin: 34rem auto;
  }

  @media (min-width: 1000px) {
    margin: 3rem auto;
  }

  @media (min-width: 1200px) {
    margin: 3rem auto; 
  }

`

export const HeadPhonesIcon = styled(FaHeadphones)`
  font-size: 18px;
  color: #fff;
`;

export const MuteIcon = styled(FaPause)`
  font-size: 18px;
  color: #fff;
`;
