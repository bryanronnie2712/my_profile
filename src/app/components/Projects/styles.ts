import { Container } from "@mui/material";
import styled from "styled-components";

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

export { IContainer, CardsDiv, BannerText };