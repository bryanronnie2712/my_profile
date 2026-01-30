"use client";

import * as React from "react";
import {
  Cottage,
  EdSheeran,
  Friends,
  LastLeaf,
  Pirate,
  SerBronn,
  Stromae,
  Titanic,
} from "../../assets";
import Image from "next/image";
import { IContainer, BannerText, ImageWrapper, CardsDiv } from "./styles";

const arts = [
  { title: " Friends", src: Friends },
  { title: "EdSheeran", src: EdSheeran },
  { title: "Titanic", src: Titanic },
  { title: "LastLeaf", src: LastLeaf },
  { title: "SerBronn", src: SerBronn },
  { title: " Pirates ", src: Pirate },
  { title: "Cottage", src: Cottage },
  { title: "Stromae", src: Stromae },
];

export default function ArtGallery() {
  return (
    <div
      style={{
        width: "100%",
        background:
          "url(https://i.pinimg.com/564x/81/64/7e/81647eb1d13c460eb5d239ec09cdca69.jpg)",
          backgroundSize: "contain",
      }}
    >
      <IContainer sx={{ flexGrow: 1 }}>
        <BannerText>Art Gallery</BannerText>
        <CardsDiv>
          {arts.map((art: any, index: number) => (
            <ImageWrapper
              key={"artdiv" + index}
            >
              <Image
                loading="lazy"
                key={"art" + index}
                src={art.src}
                alt=""
                width={200}
                height={200}
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageWrapper>
          ))}
        </CardsDiv>
      </IContainer>
    </div>
  );
}
