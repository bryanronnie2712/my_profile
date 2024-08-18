"use client";
import { Container } from "@mui/material";
import styled from "styled-components";

const IContainer = styled(Container)`
  width: auto;
  max-width: inherit;
  background: black;
  height: auto;
  padding: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 400px;

  @media (max-width: 600px) {
    & {
      height: 250px;
      padding-top: 30px;
    }
  }


  .wave,
  .wave::before,
  .wave::after {
    content: "";
    position: absolute;
    top: 85%;
    left: 50%;
    width: 110vw;
    height: 59vw;
    margin-top: -156px;
    transform: translate(-50%, -50%);
    transform-origin: center;
    background-color: transparent;
    border-radius: 58% 62%;
    box-shadow: inset 0 0 5vw rgba(255, 0, 255, 0.8);
    animation: spin 160s infinite linear;
  }

  .wave::before {
    width: 115vw;
    height: 64vw;
    border-radius: 40% 38%;
    box-shadow: inset 0 0 5vw rgba(255, 255, 0, 0.8);
    animation: spin 130s infinite linear;
  }

  .wave::after {
    width: 103vw;
    height: 55vw;
    border-radius: 48% 42%;
    box-shadow: inset 0 0 5vw rgba(0, 255, 255, 0.8);
    animation: spin 150s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes text-appear {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .text-appear {
    animation: text-appear 0.5s ease-in-out;
  }
`;

const BannerText = styled.h1`
  text-align: center;
  font-size: 3.7em;
  margin: 0; /* Ensure no extra margins */
  box-sizing: border-box; /* Ensure padding doesn't affect layout */
  background: linear-gradient(360deg, #4f4f4f, #ffffff, white) text;
  color: transparent;
  animation: text-appear 0.6s ease-in-out;
  z-index: 1;
  user-select: none;

  @keyframes text-appear {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 800px) {
    & {
      font-size: 2.4em;
    }
  }
  @media (max-width: 600px) {
    & {
      font-size: 1.6em;
    }
  }
  

`;



export default function Banner() {
  return (<>
    <IContainer>
        <div className="wave"></div>
        <BannerText>Hello! My name is Bryan</BannerText>
    </IContainer>
    </>
  );
}

