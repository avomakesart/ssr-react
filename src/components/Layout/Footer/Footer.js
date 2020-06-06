import React from "react";
import { FaSpotify, FaMusic, FaBandcamp } from "react-icons/fa";
import {
  SocialMediaContainer,
  SocialMediaLinks,
  SocialMediaLinksLi,
  SocialLink,
  ListeningSongContainer,
  ListeningSongUl,
  ListeningSongLi,
} from "./Footer.styles";

import inconsciente from "../../../assets/audio/arder-inconsciente.mp3";
import MultiPlayer from "../../../hooks/useAudio";

export default function Footer() {
  return (
    <div className="flex space-around">
      <SocialMediaContainer className="social-media">
        <SocialMediaLinks>
          <SocialMediaLinksLi>
            <SocialLink href="https://www.facebook.com/ardermx1">
              Facebook
            </SocialLink>
          </SocialMediaLinksLi>
          <SocialMediaLinksLi>
            <SocialLink href="https://www.instagram.com/ardermx1/">
              Instagram
            </SocialLink>
          </SocialMediaLinksLi>
        </SocialMediaLinks>
      </SocialMediaContainer>

      <MultiPlayer urls={[inconsciente]} />

      <ListeningSongContainer className="listensong">
        <ListeningSongUl>
          <ListeningSongLi>
            <a
              href="https://open.spotify.com/artist/15QB9wXSXBBfDjBqV4593Y?si=xiXBVal2SbKvO6poXBP1_w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify />
            </a>
          </ListeningSongLi>
          <ListeningSongLi>
            <a
              href="https://music.apple.com/us/album/inconsciente-single/1515854268"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMusic />
            </a>
          </ListeningSongLi>
          <ListeningSongLi>
            <FaBandcamp />
          </ListeningSongLi>
        </ListeningSongUl>
      </ListeningSongContainer>
    </div>
  );
}
