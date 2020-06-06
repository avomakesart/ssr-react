import React from "react";
import arderGif from "../../assets/images/arder.gif";
import HeaderFooterLayout from "../Layout/HeaderFooterLayout";
import {
  HeroGif,
  HeroTitleContainer,
  HeroTitle,
  HeroParagraph,
} from "./Home.styles";

export default function Home() {
  return (
    <>
      <HeaderFooterLayout>
        <HeroGif className="hero-gif" src={arderGif} />
        <HeroTitleContainer className="hero-title">
          <HeroTitle className="glitch" data-text="Arder MX">
            ARDER
          </HeroTitle>
          <HeroParagraph>Nuevo Single</HeroParagraph>
        </HeroTitleContainer>
      </HeaderFooterLayout>
    </>
  );
}
