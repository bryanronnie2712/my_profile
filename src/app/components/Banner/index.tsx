"use client";
import { IContainer, BannerText, BannerSubtext, BannerContent } from "./styles";

export default function Banner() {
  return (
    <IContainer>
      <div className="wave"></div>
      <BannerContent>
        <BannerText>Hello! I&apos;m Bryan</BannerText>
        <BannerSubtext>
          MEng ECE(Co-op) @UWaterloo | Fullstack Dev
        </BannerSubtext>
      </BannerContent>
    </IContainer>
  );
}