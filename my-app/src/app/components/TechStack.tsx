"use client";
import { Container, Box } from '@mui/material';
import styled from 'styled-components';
import { techstackCardValues } from '../data';
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const runPrompt = async () => {
  const prompt = "Am I good match? These are my previous areas of work: ReactJS, Java Springboot, NextJS, "
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

const IContainer = styled(Container)`
  width: 100%;
  padding: 40px 10px;
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
  margin-bottom: 30px; 

  @media (max-width: 600px) {
    & {
      font-size: 1.7em;
    }
  }
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
  $bgColor?: string;
  $color?: string;
};

const CardHead = styled(Box)<StyleProps>`
  width: 100px;
  height: 50px;
  padding: 11px;
  font-size: x-large;
  background-color: ${({ $bgColor }) => $bgColor || 'white'};
  color: ${({ $color }) => $color || 'black'};
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 600px) {
    & {
      font-size: 1.3rem;
    }
  }
`;

const Card = styled(Box)<StyleProps>`
  width: 100px;
  height: 50px;
  font-size: x-large;
  background-color: ${({ $bgColor }) => $bgColor || 'white'};
  color: ${({ $color }) => $color || 'black'};
  border: 2px solid ${({ $color }) => $color || 'black'};
  padding: 8px;
  text-align: center;

  @media (max-width: 600px) {
    & {
      font-size: 1.3rem;
    }
  }
`;


export default function TechStack() {
  return (
    <IContainer>
      <BannerText>My Techstack</BannerText>
      <CardsDiv>
        {techstackCardValues.map((domain, rowIndex) => (
          <CardRow key={"tech-cards-grp" + rowIndex}>
            {domain.map((tech, cardIndex) => tech.isHead? <CardHead key={"tech-cards-head" + rowIndex + cardIndex} $bgColor={tech.bgColor}>{tech.value}</CardHead> : <Card key={"tech-cards" + rowIndex + cardIndex} color={tech.color}>{tech.value}</Card>)}
          </CardRow>
        ))}
      </CardsDiv>
    </IContainer>
  );
}