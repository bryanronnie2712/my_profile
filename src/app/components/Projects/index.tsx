"use client";

import Image, { StaticImageData } from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cards } from "./cardsData";
import { BannerText, Card, CardDesc, CardsDiv, IContainer, Tag, Tags } from "./styles";

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
