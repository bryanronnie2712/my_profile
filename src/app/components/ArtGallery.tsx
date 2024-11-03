"use client";

import * as React from "react";
import { AppBar, Container, ImageList, ImageListItem } from "@mui/material";
import styled from "styled-components";
import { Friends, Pirate, Titanic } from "../assets";
import Image from "next/image";

interface Card {
  title: string;
  description: string;
  bgColor: string;
  tags: Tag[];
}

interface Tag {
  text: string;
  color: string;
}

const cards: Card[] = [
  {
    title: "My First Web Project",
    description:
      "My First College Web Project: webpage promo for a local gaming shop",
    bgColor: "blue",
    tags: [
      { text: "AngularJS", color: "brown" },
      { text: "HTML", color: "#e44c25" },
      { text: "CSS", color: "#1572b7" },
      { text: "Javascript", color: "#f19f0b" },
    ],
  },
  {
    title: "Text Editor",
    description: "A simple text editor with mostly used features.",
    bgColor: "brown",
    tags: [{ text: "AngularJS", color: "brown" }],
  },
  {
    title: "Instagram clone",
    description: "Let's go social this time!",
    bgColor: "red",
    tags: [
      { text: "ReactJS", color: "cyan" },
      { text: "NodeJS", color: "green" },
      { text: "Firebase", color: "orange" },
    ],
  },
];

const arts = [
  { title: " Pirates ", src: Pirate },
  { title: " Friends", src: Friends },
  { title: "Titanic", src: Titanic },
];

export default function ArtGallery() {
  return (
    <IContainer sx={{ flexGrow: 1 }}>
      <BannerText>Art Gallery</BannerText>
      <CardsDiv>
        {arts.map((art: any, index: number) => (
          <Image
            loading="lazy"
            key={"art" + index}
            // width={500}
            src={art.src}
            alt=""
            layout="responsive"
          />
        ))}
      </CardsDiv>
    </IContainer>
  );
}

export const CardsWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
`;

export const Card1 = styled.a`
  font-family: "Heebo";
  --bg-filter-opacity: 0.5;
  background-image: linear-gradient(
      rgba(0, 0, 0, var(--bg-filter-opacity)),
      rgba(0, 0, 0, var(--bg-filter-opacity))
    ),
    var(--bg-img);
  height: 20em;
  width: 15em;
  font-size: 1.5em;
  color: white;
  border-radius: 1em;
  padding: 1em;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 4px 6px 5px 3px #a5a5a5;
  transition: all, var(--transition-time);
  position: relative;
  overflow: hidden;
  border: 10px solid #ccc;
  text-decoration: none;

  &:hover {
    transform: rotate(0);
  }

  h1 {
    margin-block-start: 40%;
    font-size: 1.5em;
    line-height: 1.2em;
  }

  p {
    font-size: 0.75em;
    font-family: "Open Sans";
    margin-top: 0.5em;
    line-height: 2em;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tags .tag {
    font-size: 0.75em;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 0.3rem;
    padding: 0 0.5em;
    margin-right: 0.5em;
    line-height: 1.5em;
    transition: all, var(--transition-time);
    margin-bottom: 0.5em;
  }

  &:hover .tags .tag {
    background: var(--color);
    color: white;
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
    transition: all, var(--transition-time);
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

  &:hover {
    color: var(--color);
  }

  &:hover:before,
  &:hover:after {
    transform: scale(1);
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
  padding: 30px;
  background: white;
  max-width: 100%;

  @media (max-width: 600px) {
    & {
      // height: 150px;
    }
  }
`;

const CardsDiv = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  text-align: center;
  padding: 0;
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

interface StyleProps {
  bgColor?: string;
  color?: string;
}
