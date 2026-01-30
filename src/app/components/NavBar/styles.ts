import { AppBar, Button, TextareaAutosize, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

const CustomNav = styled(AppBar)`
  border: none;
  border-bottom: 2px solid rgba(80, 80, 80, 0.4);
  background: linear-gradient(#000000c7, #272727a6) !important;
  backdrop-filter: saturate(65%) blur(5px) !important;
  -webkit-backdrop-filter: saturate(65%) blur(5px) !important;
`;

const IButton = styled(Button)`
  text-transform: capitalize;
  color: white;
  background: #0071e3;
  border: 2px solid #0071e3;
  border-radius: 8px;
  padding: 5px 10px;
  width: 150px;
  font-family: inherit;

  &:hover {
    color: #0071e3;
    background: transparent;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    & {
      border-radius: 8px;
      background: #0071e3;
      padding: 0 3px !important;
      width: 75px;
      height: 24px !important;
      font-size: 9px !important;
      min-width: 75px;
    }
  }

  @keyframes example {
    0% {
      color: darkorange;
    }
    50% {
      color: chocolate;
    }
    100% {
      color: darkorange;
    }
  }
  backdrop-filter: saturate(150%) blur(15px);
`;

const GeminiButton = styled.div`
  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
    background: #191c29;
    padding: 5px 4px;
    position: relative;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    cursor: pointer;
    width: 110px;
    color: white;
    margin-right: 15px;
    height:35px;
  
  &:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
  }
  
  &:hover:before, :hover:after {
    animation: none;
    opacity: 0;
  }
  
  
  &::before {
    content: "";
    border-radius: 8px;
    width: 102%;
    height: 105%;
    background-image: linear-gradient(var(--rotate),red, purple , gold, green);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -1%;
    animation: spin1 5s linear infinite;
  }
  
  &::after {
     border-radius: 8px;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(65vh) / 8));
    background-image: linear-gradient(var(--rotate),#5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin1 5s linear infinite;
  }
  
  @keyframes spin1 {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
  
  @media (max-width: 600px) {
    & {
      width: 75px;
      font-size: 10px;
      margin-right: 4px;
      height: 24px;
      padding: 0 8px;
    }

    &::before {
      height: 102%;
    }
  }
`;

const GeminiButton1 = styled.div`
  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }
    background: #191c29;
    padding: 5px 4px;
    position: relative;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    cursor: pointer;
    width: 110px;
    color: white;
    margin-right: 15px;
    height:35px;
  
  &:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
  }
  
  &:hover:before, :hover:after {
    animation: none;
    opacity: 0;
  }
  
  &::before {
    content: "";
    border-radius: 30px;
    width: 103%;
    height: 105%;
    background-image: linear-gradient(var(--rotate),red, purple , gold, green);
    position: absolute;
    z-index: -1;
    top: -2%;
    left: -1%;
    animation: spin1 5s linear infinite;
  }
  
  &::after {
    border-radius: 30px;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(65vh) / 8));
    background-image: linear-gradient(var(--rotate),#5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin1 5s linear infinite;
  }
  
  @keyframes spin1 {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
  
  @media (max-width: 600px) {
    & {
      width: 80px;
      font-size: 12px;
      margin-right: 7px;
      height: 24px;
    }

    &::before {
      height: 103%;
      width: 102%;
    }
  }
`;

const NotificationBar = styled(Toolbar)<{ display: string }>`
  width: 100%;
  justify-content: center;
  min-height: ${({ display }) => (display === "true" ? `fit-content` : `0px`)};
  height: ${({ display }) => (display === "true" ? `40px` : `0px`)};
  opacity: ${({ display }) => (display === "true" ? `1` : `0`)};
  padding: ${({ display }) => (display === "true" ? `5px 0 5px 10px` : `0`)};
  transition: 0.4s all;
  font-size: 16px;

  @media (max-width: 1200px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const URLString = styled.a`
  color: rgb(24, 0, 227);
  text-decoration: underline;
  text-shadow: 0px 0px 5px #d9d9d9;
`;

const GeminiSVG = styled.div``;


const Loader = styled(Image)`
  animation: rotate 1.5s cubic-bezier(1, 0, 0, 1) infinite;
  filter: drop-shadow(0px 0px 0.3px goldenrod);

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const RowEndFlex = styled.div`
  color: black;
  padding: 40px 20px 20px 20px;
  font-weight: 600;
  display: flex;
  flex-direction: row-reverse;
`;

const StyledTextarea = styled.textarea<{ $windowMode: number }>`
  background: white;
  color: black;
  font-family: Inter, sans-serif;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.7s;
  height: 200px;
  min-height: ${({ $windowMode }) => (!$windowMode ? "65vh" : "auto")};
  max-height: 65vh;
  overflow-y: auto;
  resize: none;
`;

const TextareaAutosize1 = styled(TextareaAutosize).attrs({
  minRows: 4,
  maxRows: undefined,
})<{ $windowMode: number }>`
  background: white;
  color: black;
  font-family: Inter;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  height: ${({ $windowMode }) => (!$windowMode ? "65vh" : "200px")};
  max-height: 65vh;
  border-radius: 8px;
  transition: all 0.7s;
  overflow-y: scroll !important;
  resize: none;
  border: 1px solid #ccc;
`;

const QuestionDiv = styled.div<{ $animation: string }>`
  color: white;
  margin-top: 30px;
  font-weight: 600;
  padding: 0 20px;
  opacity: 1;
  transition: all 0.7s;
  width: 100%;
`;

const AnswerDiv = styled.div<{ $animation: string }>`
  color: white;
  margin-top: 30px;
  opacity: 1;
  font-weight: 600;
  padding: 0 20px;
  transition: all 0.7s;
  width: 100%;
`;

const ModalHeader = styled.div<{ $windowMode: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $windowMode }) =>
    $windowMode ? "15px 20px 5px 20px;" : "30px 20px 5px 20px;"};
`;

const CloseIconDiv = styled.div`
  right: 20px;
  position: fixed;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(1px 1px 1px white);
  }
`;

const FullscreenIconDiv = styled.div`
  right: 60px;
  position: fixed;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(1px 1px 1px white);
  }
`;

const ModalTitle = styled(Typography)`
  font-size: 2.3rem;
  color: white;
  font-weight: 800;

  @media (max-width: 600px) {
    & {
      font-size: 1.9em;
    }
  }
`;


export { CustomNav, IButton, NotificationBar, URLString, GeminiButton, GeminiSVG, GeminiButton1, Loader, RowEndFlex, StyledTextarea, TextareaAutosize1, QuestionDiv, AnswerDiv, ModalHeader, CloseIconDiv, FullscreenIconDiv, ModalTitle };