import React from "react";
import HeaderFlex from "../Layout/Header/HeaderFlex";

import {
  Title,
  Paragraph,
  Button,
  GeneralContainer,
  InfoContainer,
  BioContainer,
  SpotifyIcon,
  AppleMusicIcon,
  BandCampIcon,
  FacebookIcon,
  InstagramIcon,
  BoldParagraph,
  BagIcon,
} from "./Contact.styles";

export default function Contact() {
  return (
    <>
      <HeaderFlex />
      <Title>CONTACTO</Title>
      <BioContainer>
        <Paragraph>
          <BoldParagraph>Siguenos</BoldParagraph>
        </Paragraph>
        <InfoContainer>
          <GeneralContainer>
            <FacebookIcon />
            <Button href="https://www.facebook.com/ardermx1" target="_blank">
              Facebook
            </Button>
          </GeneralContainer>
          <GeneralContainer>
            <InstagramIcon />
            <Button href="https://www.instagram.com/ardermx1" target="_blank">
              Instagram
            </Button>
          </GeneralContainer>

          <GeneralContainer>
            <BagIcon />
            <Button
              href="https://bazarama.com.mx/products/arder-trasher?_pos=1&_sid=987490d70&_ss=r"
              target="_blank"
            >
              Merch
            </Button>
          </GeneralContainer>
        </InfoContainer>

        <Paragraph>
          <BoldParagraph>Escuchanos</BoldParagraph>
        </Paragraph>
        <InfoContainer>
          <GeneralContainer>
            <SpotifyIcon />
            <Button
              href="https://open.spotify.com/artist/15QB9wXSXBBfDjBqV4593Y"
              target="_blank"
            >
              Spotify
            </Button>
          </GeneralContainer>
          <GeneralContainer>
            <AppleMusicIcon />
            <Button
              href="https://music.apple.com/us/album/inconsciente-single/1515854268"
              target="_blank"
            >
              Apple Music
            </Button>
          </GeneralContainer>
          <GeneralContainer>
            <BandCampIcon />
            <Button href="https://bandcamp.com/" target="_blank">
              Bandcamp
            </Button>
          </GeneralContainer>
        </InfoContainer>
      </BioContainer>
    </>
  );
}
