"use client";

import * as React from "react";
import { AppBar, Container, ImageList, ImageListItem } from "@mui/material";
import styled from "styled-components";
import { Box } from "@mui/system";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Covid, LinkedInLogo } from "../assets";

const responsive = {
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

export default function Projects() {
  return (
    <IContainer sx={{ flexGrow: 1 }}>
      <BannerText>Projects</BannerText>
      <CardsDiv>
        <Carousel showDots responsive={responsive}>
          {cards.map((card: Card, i: number) => (
            <Card key={"card"+i} href="HTML/MyFirstWebPage.html">
              <div style={{ height: 240, background: "red", width: "100%" }}>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  onClick={(e) =>
                    window.open("https://www.linkedin.com/in/bryan-ronnie")
                  }
                  src={Covid}
                  alt={""}
                />
              </div>
              <div
                style={{
                  height: 300,
                  background: "white",
                  width: "100%",
                  padding: "20px",
                }}
              >
                <h1>{card.title}</h1>
                <p>{card.description}</p>

                <div className="tags">
                  {card.tags.map((tag: Tag, i: number) => (
                    <div key={"tag" + i} className="tag">
                      {tag.text}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </Carousel>
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

export const Card = styled.a`
  box-shadow: 0px 0px 10px 0px #b7b7b7;
  height: 500px;
  margin: 10px;
  font-size: 1.5em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: rotate(0);
  }

  h1 {
    text-align: center;
    font-size: 1.2em;
  }

  p {
    font-size: 0.75em;
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
  // display: flex;
  // flex-wrap: wrap;
  // gap: 10px;
  // box-sizing: border-box;
  // justify-content: center;
  // flex-direction: column;
`;

const BannerText = styled.h1`
  color: black;
  text-align: center;
  font-size: 2.5rem;
  margin: 30px 0;
`;

interface StyleProps {
  bgColor?: string;
  color?: string;
}
