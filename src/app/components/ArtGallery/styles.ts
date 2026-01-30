import { Container } from "@mui/material";
import styled from "styled-components";

const ImageWrapper = styled.div`
    width: 200px;
    padding: 10px;
    background: white;

    @media (max-width: 672px) {
    width: 160px;
    }
`;

// const CardsWrapper = styled.section`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-wrap: wrap;
//     padding: 0;
//     margin: 0 auto;
// `;

// export const Card1 = styled.a`
//   font-family: "Heebo";
//   --bg-filter-opacity: 0.5;
//   background-image: linear-gradient(
//       rgba(0, 0, 0, var(--bg-filter-opacity)),
//       rgba(0, 0, 0, var(--bg-filter-opacity))
//     ),
//     var(--bg-img);
//   height: 20em;
//   width: 15em;
//   font-size: 1.5em;
//   color: white;
//   border-radius: 1em;
//   padding: 1em;
//   display: flex;
//   align-items: flex-end;
//   background-size: cover;
//   background-position: center;
//   box-shadow: 4px 6px 5px 3px #a5a5a5;
//   transition: all, var(--transition-time);
//   position: relative;
//   overflow: hidden;
//   border: 10px solid #ccc;
//   text-decoration: none;

//   &:hover {
//     transform: rotate(0);
//   }

//   h1 {
//     margin-block-start: 40%;
//     font-size: 1.5em;
//     line-height: 1.2em;
//   }

//   p {
//     font-size: 0.75em;
//     font-family: "Open Sans";
//     margin-top: 0.5em;
//     line-height: 2em;
//   }

//   .tags {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }

//   .tags .tag {
//     font-size: 0.75em;
//     background: rgba(255, 255, 255, 0.5);
//     border-radius: 0.3rem;
//     padding: 0 0.5em;
//     margin-right: 0.5em;
//     line-height: 1.5em;
//     transition: all, var(--transition-time);
//     margin-bottom: 0.5em;
//   }

//   &:hover .tags .tag {
//     background: var(--color);
//     color: white;
//   }

//   .date {
//     position: absolute;
//     top: 0;
//     right: 0;
//     font-size: 0.75em;
//     padding: 1em;
//     line-height: 1em;
//     opacity: 0.8;
//   }

//   &:before,
//   &:after {
//     content: "";
//     transform: scale(0);
//     transform-origin: top left;
//     border-radius: 50%;
//     position: absolute;
//     left: -50%;
//     top: -50%;
//     z-index: -5;
//     transition: all, var(--transition-time);
//     transition-timing-function: ease-in-out;
//   }

//   &:before {
//     background: #ddd;
//     width: 250%;
//     height: 250%;
//   }

//   &:after {
//     background: white;
//     width: 200%;
//     height: 200%;
//   }

//   &:hover {
//     color: var(--color);
//   }

//   &:hover:before,
//   &:hover:after {
//     transform: scale(1);
//   }
// `;

// const Info = styled.div`
//   font-size: 1.2em;
//   display: flex;
//   padding: 1em 3em;
//   height: 3em;

//   img {
//     height: 3em;
//     margin-right: 0.5em;
//   }

//   h1 {
//     font-size: 1em;
//     font-weight: normal;
//   }
// `;

const IContainer = styled(Container)`
  width: 100%;
  padding: 30px;
  max-width: 100%;
  background-size: contain;
`;

const CardsDiv = styled(Container)`
    display: flex;
    flex-direction: column;
    height: 700px;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    padding: 0;
    justify-content: left;
    width: max-content;

    @media (max-width: 672px) {
      height: 750px;
    }
`;

const BannerText = styled.h1`
  color: white;
  text-align: center;
  font-size: 2.5rem;
  margin: 30px 0;
  @media (max-width: 600px) {
    & {
      font-size: 1.9em;
    }
  }
`;

export { ImageWrapper, IContainer, CardsDiv, BannerText };