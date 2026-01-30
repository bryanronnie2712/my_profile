import { StaticImageData } from "next/image";

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

export type { Card, Tag };