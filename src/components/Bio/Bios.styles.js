import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  margin: 0;
`;

export const BioContainer = styled.div`
  background: black;
  margin: -23rem 0;
  position: relative;
  z-index: 100;

  @media (min-width: 900px) {
    background: black;
    margin: -21rem 0;
    position: relative;
    z-index: 100;
  }
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  padding: 6rem 0;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;


export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;

  @media (min-width: 900px) {
    margin: 3rem 1rem;
  }
`;

export const Overlay = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
`;

export const OverlayContent = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 36px;
  right: 45px;
  color: white;
  font-size: 37px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const HeaderImage = styled.img`
  max-width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 250px;
  display: flex;
  margin: 0 auto;
`;

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
`;

export const ParagraphImage = styled.p`
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 1rem;
  text-align: left;
  margin: 8px 2rem;

  @media (min-width: 900px) {
    text-align: left;
    margin: 6px;
  }
`;

export const BoldParagraph = styled.b`
  color: orange;
`;

export const Button = styled.button`
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
  background-color: black;
  color: white;
  font-family: "Oswald", sans-serif;
  padding: 0px 35px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  margin: 0 auto;
`;
