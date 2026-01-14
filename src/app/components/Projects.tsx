"use client";

import * as React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  AkilaCastings,
  AkilaCastings1,
  Covid,
  Instagram,
  MusicImage,
  TextEditorImg,
  VideoConferencing,
  Splitz
} from "../assets";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Card {
  title: string;
  description: string;
  tags: Tag[];
  image: StaticImageData;
  url: string;
  color: string;
  background: string;
}

interface Tag {
  text: string;
  color: string;
  bgColor: string;
}

const cards: Card[] = [
  {
    title: "Splitz",
    description: "Split instacart expenses with ease",
    image: Splitz,
    background: "repeating-radial-gradient(circle at -10% -10%, #6bf027, #93dc2d 0.5px, #75e506 0.7px, #38d9b3 4px)",
    color: "white",
    tags: [
      { text: "ReactJS", color: "black", bgColor: "cyan" },
      { text: "FastAPI", color: "white", bgColor: "teal" },
      { text: "Vercel", color: "black", bgColor: "grey" },

    ],
    url: "https://splitz-ui.vercel.app/",
  },
  {
    title: "BryMeet",
    description: "Web conferencing with screen-sharing built using webRTC",
    image: VideoConferencing,
    background: "repeating-radial-gradient(circle at -10% -10%, #2b1616, #310045 0.5px, #2b063b 0.7px, #520f67 4px)",
    color: "white",
    tags: [
      { text: "ReactJS", color: "black", bgColor: "cyan" },
      { text: "node.js", color: "white", bgColor: "green" },
      { text: "Render", color: "white", bgColor: "black" },
      { text: "Netlify", color: "teal", bgColor: "white" },
      { text: "Socket.io", color: "black", bgColor: "teal" },
      { text: "WebRTC", color: "black", bgColor: "royalblue" },
    ],
    url: "https://bryanronnie2712.github.io/brymeet-page/index.html",
  },
  {
    title: "Client(AkilaCastings Pvt. Ltd.)",
    description: "Developed & deployed a portfolio website for a foundry",
    image: AkilaCastings1,
    background: "repeating-radial-gradient(circle at -10% -10%, #012eff, #120cff 0.5px, #123aff 0.7px, #3601ff 4px)",
    color: "white",
    tags: [
      { text: "HTML", color: "white", bgColor: "#da4c21" },
      { text: "CSS", color: "white", bgColor: "#1e5da9" },
      { text: "JS", color: "black", bgColor: "#edd61a" },
    ],
    url: "https://akilacastings.com/",
  },
  {
    title: "Songs Entropy",
    description: "Research project - FastAPI",
    color: "black",
    background: "repeating-radial-gradient(ellipse at -10% -10%, #ffdfa4, #ecc963 0.5px, #ffe2ae 0.7px, #ffe595 4px)",
    image: MusicImage,
    tags: [
      { text: "FastAPI", color: "white", bgColor: "teal" },
      { text: "SheetsAPI", color: "white", bgColor: "green" },
      { text: "Tensorflow", color: "black", bgColor: "orange" },
    ],
    url: "https://github.com/bryanronnie2712/songs-entropy",
  },
  {
    title: "Covid Tracker",
    description: "Daily Covid cases and deaths with chrome extension",
    color: "white",
    background: "repeating-radial-gradient(ellipse at -10% -10%, #2b2b2b, #2f2f2f 0.5px, #063f34 0.7px, #341069 4px)",
    image: Covid,
    tags: [
      { text: "HTML", color: "white", bgColor: "#da4c21" },
      { text: "CSS", color: "white", bgColor: "#1e5da9" },
      { text: "JS", color: "black", bgColor: "#edd61a" },
    ],
    url: "https://bryanronnie2712.github.io/Covid19Tracker/index.html",
  },
  // {
  //   title: "Text Editor",
  //   description: "A simple text editor with mostly used features.",
  //   color: "white",
  //   background: "repeating-radial-gradient(ellipse at -10% -10%, #2c731f, #056121 0.5px, #2f7b40 0.7px, #0e6b42 4px)",
  //   image: TextEditorImg,
  //   tags: [{ text: "AngularJS", color: "white", bgColor: "brown" }],
  //   url: "https://akilacastings.com/",
  // },
  {
    title: "Instagram clone",
    color: "black",
    background: "repeating-radial-gradient(ellipse at -10% -10%, #ff7de4, #ec91f7 0.5px, #ff997a 0.7px, #ff7ef9 4px)",
    image: Instagram,
    description: "Let's go social this time!",
    tags: [
      { text: "ReactJS", color: "black", bgColor: "cyan" },
      { text: "node.js", color: "white", bgColor: "green" },
      { text: "Firebase", color: "black", bgColor: "orange" },
    ],
    url: "https://instagram-clone-4d25d.web.app/",
  },
];

export default function Projects() {
  return (
    <IContainer sx={{ flexGrow: 1 }}>
      <BannerText>Projects</BannerText>
      <CardsDiv>
        <Carousel pauseOnHover showDots responsive={responsive}>
          {cards.map((card: Card, i: number) => (
            <Card onClick={(e) => window.open(card.url)} $bg={card.background} key={"card" + i}>
              <div style={{ height: 240, background: "white", width: "100%" }}>
                <Image
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  src={card.image}
                  alt={""}
                />
              </div>
              <CardDesc $bg={card.background} $color={card.color}>
                <h1>{card.title}</h1>
                <p>{card.description}</p>

                <Tags>
                  {card.tags.map((tag: Tag, i: number) => (
                    <Tag $bgcolor={tag.bgColor} $color={tag.color} key={"tag" + i}>{tag.text}</Tag>
                  ))}
                </Tags>
              </CardDesc>
            </Card>
          ))}
        </Carousel>
      </CardsDiv>
    </IContainer>
  );
}

export const CardDesc = styled.div<{$bg: string, $color: string}>`
  color: ${({$color}) => $color};
  padding: 20px;
  // height: 300px;
  width: 100%;
  text-align:center;
}
`;

export const Tag = styled.div<{$bgcolor: string, $color: string}>`
  font-size: 0.75em;
  background: ${({$bgcolor}) => $bgcolor};
  color: ${({$color}) => $color};
  border-radius: 0.3rem;
  padding: 0 0.5em;
  margin-right: 0.5em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardsWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
`;

export const Card = styled.a<{$bg: string}>`
  box-shadow: 0px 0px 10px 0px #b7b7b7;
  user-select: none;
  cursor: pointer;
  height: 500px;
  margin: 10px;
  font-size: 1.5em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  background: ${({$bg}) => $bg};

  &:hover{
    filter: drop-shadow(2px 4px 6px black);
  }

  h1 {
    text-align: center;
    font-size: 1.2em;
  }

  p {
    font-size: 0.75em;
    margin: 1em 0;
    line-height: 1.3em;
  }

  .date {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.75em;
    padding: 1em;
    line-height: 1em;
    opacity: 0.8;
  }

  &:before,
  &:after {
    content: "";
    transform: scale(0);
    transform-origin: top left;
    border-radius: 50%;
    position: absolute;
    left: -50%;
    top: -50%;
    z-index: -5;
    transition-timing-function: ease-in-out;
  }

  &:before {
    background: #ddd;
    width: 250%;
    height: 250%;
  }

  &:after {
    background: white;
    width: 200%;
    height: 200%;
  }
`;

export const Info = styled.div`
  font-size: 1.2em;
  display: flex;
  padding: 1em 3em;
  height: 3em;

  img {
    height: 3em;
    margin-right: 0.5em;
  }

  h1 {
    font-size: 1em;
    font-weight: normal;
  }
`;

const IContainer = styled(Container)`
  width: 100%;
  padding: 20px 20px 100px 20px;
  background: white;
  max-width: 100%;

  @media (max-width: 600px) {
    & {
      // height: 150px;
    }
  }
`;

const CardsDiv = styled(Container)`
  @media (max-width: 600px) {
    & {
      padding: 0;
      margin: 0;
    }
  }
`;

const BannerText = styled.h1`
  color: black;
  text-align: center;
  font-size: 2.5rem;
  @media (max-width: 600px) {
    & {
      font-size: 1.9em;
    }
  }
  margin: 30px 0;
`;
