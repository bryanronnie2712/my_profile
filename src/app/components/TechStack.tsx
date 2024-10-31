"use client";
import { Container } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { techIcons } from "../data/cardValues";


const IContainer = styled(Container)`
  width: 100%;
  padding: 40px 10px;
  background: white;
  max-width: 100%;
      align-items: center;
    display: flex;
    flex-direction: column;
`;

// const CardsDiv = styled(Container)`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   box-sizing: border-box;
//   justify-content: center;
//   flex-direction: column;
// `;

const BannerText = styled.h1`
  color: black;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    & {
      font-size: 1.7em;
    }
  }
`;

// const CardRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   border-radius: 15px;
//   border: 2px solid;

//   & > * {
//     flex: 1 1 30%; /* Default 3-column layout */
//     min-width: 30%; /* Prevents shrinking below 30% in wider screens */
//   }

//   @media (max-width: 600px) {
//     & > * {
//       flex: 1 1 100%; /* 1-column layout */
//       min-width: 100%;
//     }
//   }
// `;

// interface StyleProps {
//   $bgColor?: string;
//   $color?: string;
// }

// const CardHead = styled(Box)<StyleProps>`
//   width: 100px;
//   height: 50px;
//   padding: 11px;
//   font-size: x-large;
//   border-radius: 12px;
//   border: 2px solid black;
//   background-color: black;
//   color: white;
//   font-weight: bold;
//   text-align: center;

//   @media (max-width: 600px) {
//     & {
//       font-size: 1.3rem;
//     }
//   }
// `;

// const Card = styled(Box)<StyleProps>`
//   width: 100px;
//   height: 50px;
//   font-size: x-large;
//   // background-color: ${({ $bgColor }) => $bgColor || "white"};
//   color: ${({ $color }) => $color || "black"};
//   // border: 2px solid ${({ $color }) => $color || "black"};
//   padding: 8px;
//   text-align: center;

//   @media (max-width: 600px) {
//     & {
//       font-size: 1.3rem;
//     }
//   }
// `;


const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SlideTrack = styled.div`
  display: flex;
  gap: 8%;
  animation: ${slide} 20s linear infinite;
  width: calc(200% + 8%); /* Ensure enough width for smooth looping */
`;

const SlideItem = styled.div`
  flex: 0 0 auto;
  width: 8%;
`;

 const InfiniteSlider = () => {
  return (
    <SliderWrapper>
      <SlideTrack>
          {techIcons.map((ti, cardIndex) => 
          <SlideItem key={cardIndex}>
            <Image src={ti.src} alt={ti.name} layout="responsive" />
          </SlideItem>
          )}
      </SlideTrack>
    </SliderWrapper>
  );
}



export default function TechStack() {
  return (
    <IContainer>
      <BannerText>My Techstack</BannerText>
      <InfiniteSlider/>
      {/* <CardsDiv>
        {techstackCardValues.map((domain, rowIndex) => (
          <CardRow key={"tech-cards-grp" + rowIndex}>
            {domain.map((tech, cardIndex) =>
              tech.isHead ? (
                <CardHead
                  key={"tech-cards-head" + rowIndex + cardIndex}
                  $bgColor={tech.bgColor}
                >
                  {tech.value}
                </CardHead>
              ) : (
                <Card
                  key={"tech-cards" + rowIndex + cardIndex}
                  color={tech.color}
                >
                  {tech.img ? <Image src={tech.img} alt={""} /> : tech.value}
                </Card>
              )
            )}
          </CardRow>
        ))}
      </CardsDiv> */}
    </IContainer>
  );
}
