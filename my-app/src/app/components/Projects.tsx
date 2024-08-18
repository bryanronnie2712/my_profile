"use client";

import * as React from 'react';
import { AppBar, Container, ImageList, ImageListItem } from '@mui/material';
import styled from 'styled-components';
import { Box } from '@mui/system';



export default function Projects() {

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
          title: 'Bed',
        },
        {
          img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
          title: 'Books',
        },
        {
          img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
          title: 'Sink',
        },
        {
          img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
          title: 'Kitchen',
        },
        {
          img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
          title: 'Blinds',
        },
        {
          img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
          title: 'Chairs',
        },
        {
          img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
          title: 'Laptop',
        },
        {
          img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
          title: 'Doors',
        },
        {
          img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
          title: 'Storage',
        },
        {
          img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
          title: 'Candle',
        },
        {
          img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
          title: 'Coffee table',
        },
      ];

  return (
    <IContainer sx={{ flexGrow: 1 }}>
        <BannerText>Projects</BannerText>
        <CardsDiv>
        <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
        </CardsDiv>
    </IContainer>
  );
}














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
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
`;

const BannerText = styled.h1`
  color: black;
  text-align: center;
  font-size: 2.5rem;
  margin: 30px 0; 
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  // gap: 10px;
  flex-wrap: wrap;

  & > * {
    flex: 1 1 30%; /* Default 3-column layout */
    min-width: 30%; /* Prevents shrinking below 30% in wider screens */
  }

  @media (max-width: 600px) {
    & > * {
      flex: 1 1 100%; /* 1-column layout */
      min-width: 100%;
    }
  }
`;

interface StyleProps {
  bgColor?: string;
  color?: string;
};

const CardHead = styled(Box)<StyleProps>`
  width: 100px;
  height: 50px;
  padding: 11px;
  font-size: x-large;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  color: ${({ color }) => color || 'black'};
`;

const Card = styled(Box)<StyleProps>`
  width: 100px;
  height: 50px;
  font-size: x-large;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  color: ${({ color }) => color || 'black'};
  border: 2px solid ${({ color }) => color || 'black'};
  padding: 8px;
`;

