import React, { useState } from "react";
import HeaderFlex from "../Layout/Header/HeaderFlex";
// Members images
import Chris from "../../assets/images/chris.jpg";
import Jorge from "../../assets/images/jorge.jpg";
import Leo from "../../assets/images/leo.jpg";
import Manu from "../../assets/images/manu.jpg";
import Pepes from "../../assets/images/pepes.jpg";

import {
    Image,
    Title,
    InfoContainer,
    ParagraphImage,
    Paragraph,
    CloseButton,
    BioContainer,
    MemberInfo,
    ParagraphContainer,
    BoldParagraph,
    Button,
  } from "./Bios.styles";

export default function Bio() {
  const [isOpen, setIsOpen] = useState(false);

  const openBio = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderFlex />
      <Title>BIO</Title>
      <Paragraph>
        Metalcore fancy y maldito, originario de Guadalajara, Jalisco, MX.
      </Paragraph>
      <Button onClick={openBio}>Ver Integrantes</Button>
      {isOpen && (
        <BioContainer>
          <CloseButton onClick={openBio}>X</CloseButton>
          <InfoContainer>
            <MemberInfo>
              <Image src={Chris} />
              <ParagraphContainer>
                <ParagraphImage>
                  <BoldParagraph>Nombre:</BoldParagraph> Chris
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Edad:</BoldParagraph> 28 años
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Instrumento:</BoldParagraph> voz{" "}
                  <span role="img" aria-label="fire">
                    🔥
                  </span>
                  <span role="img" aria-label="voice">
                    🗣
                  </span>
                  <span role="img" aria-label="microphone">
                    🎤
                  </span>
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Influencias:</BoldParagraph> Beartooth, While
                  She Sleeps, <br /> Polaris
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Otros Proyectos:</BoldParagraph> Vae Victis ex
                  Náufrago
                </ParagraphImage>
              </ParagraphContainer>
            </MemberInfo>
            <MemberInfo>
              <Image src={Jorge} />
              <ParagraphContainer>
                <ParagraphImage>
                  <BoldParagraph>Nombre:</BoldParagraph> Jorge
                </ParagraphImage>
                <ParagraphImage>Edad: 31 años</ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Instrumento:</BoldParagraph> Bajo
                  <span role="img" aria-label="bass">
                    🎸
                  </span>
                  <span role="img" aria-label="fire">
                    🔥
                  </span>
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Influencias:</BoldParagraph> Unearth, VEIL OF
                  MAYA, <br /> As I Lay Dying
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Otros Proyectos:</BoldParagraph> INFNT
                </ParagraphImage>
              </ParagraphContainer>
            </MemberInfo>
          </InfoContainer>
          <InfoContainer>
            <MemberInfo>
              <Image src={Leo} />
              <ParagraphContainer>
                <ParagraphImage>
                  <BoldParagraph>Nombre:</BoldParagraph> Leo
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Edad:</BoldParagraph> 21 años
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Instrumento:</BoldParagraph> Guitarra
                  <span role="img" aria-label="guitar">
                    🎸
                  </span>
                  <span role="img" aria-label="fire">
                    🔥
                  </span>
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Influencias:</BoldParagraph> BRING ME THE
                  HORIZON, <br /> COUNTERPARTS, Deftones
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Otros Proyectos:</BoldParagraph> The WOLVES
                  CAME BACK.
                </ParagraphImage>
              </ParagraphContainer>
            </MemberInfo>

            <MemberInfo>
              <Image src={Manu} />
              <ParagraphContainer>
                <ParagraphImage>
                  <BoldParagraph>Nombre:</BoldParagraph> Manu Frausto
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Edad:</BoldParagraph> 24 años
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Instrumento:</BoldParagraph> Bateria{" "}
                  <span role="img" aria-label="drum">
                    🥁
                  </span>
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Influencias:</BoldParagraph> August Burns Red, <br />
                  Periphery y 
                  Oceans Ate Alaska
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Otros Proyectos:</BoldParagraph> Scybdis
                </ParagraphImage>
              </ParagraphContainer>
            </MemberInfo>
          </InfoContainer>
          <InfoContainer>
            <MemberInfo>
              <Image src={Pepes} />
              <ParagraphContainer>
                <ParagraphImage>
                  <BoldParagraph>Nombre:</BoldParagraph> Pepes
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Edad:</BoldParagraph> 28 años
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Instrumento:</BoldParagraph> Guitarra{" "}
                  <span role="img" aria-label="guitar">
                    🎸
                  </span>
                  <span role="img" aria-label="fire">
                    🔥
                  </span>
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Influencias:</BoldParagraph> Volumes,
                  Hatebreed, <br />First Blood Hardcore, Terror
                </ParagraphImage>
                <ParagraphImage>
                  <BoldParagraph>Otros Proyectos:</BoldParagraph> Bye Bye
                  California
                </ParagraphImage>
              </ParagraphContainer>
            </MemberInfo>
          </InfoContainer>
        </BioContainer>
      )}
    </>
  );
}
