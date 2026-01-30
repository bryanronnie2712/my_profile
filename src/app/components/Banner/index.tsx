"use client";
import { IContainer, BannerText } from "./styles";

export default function Banner() {
  return (<>
    <IContainer>
        <div className="wave"></div>
        <BannerText>Hello! My name is Bryan</BannerText>
    </IContainer>
    </>
  );
}

