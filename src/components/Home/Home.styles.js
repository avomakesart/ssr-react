import styled from "styled-components";

export const HeroGif = styled.img`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48vw;
  height: 46vh;
  background-size: cover;
  animation-delay: 2s;
  animation: animateGIF 4s cubic-bezier(0, 0.58, 1, 0.58);
  -webkit-animation: animateGIF 4s cubic-bezier(0, 0.58, 1, 0.58);

  @keyframes animateGIF {
    0% {
      width: 100%;
      height: 100%;
    }

    40% {
      width: 100%;
      height: 100%;
    }

    100% {
      width: 48vw;
      height: 46vh;
    }
  }
`;

export const HeroTitleContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 40%;
  left: 38%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
`;

export const HeroTitle = styled.h1`
  color: red;
  text-transform: uppercase;
  font-size: 80px;
  margin-bottom: 0%;
  z-index: 2;
`;

export const HeroParagraph = styled.p`
  color: white;
  font-family: Helvetica;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 14px;
`;

export const RotateContainer = styled.div`
  position: absolute;
  top: 54%;
  left: 74%;
  transform: translate(-50%, -50%);
  animation: rotating 20s linear infinite;

  @keyframes rotating  {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`;

export const RotatedText = styled.h2`
  color: #fff;
  font-family: Helvetica;
  font-weight: 100;
  font-size: 12px;
`;
