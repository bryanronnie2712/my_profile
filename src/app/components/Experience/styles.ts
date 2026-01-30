import { Container } from "@mui/material";
import styled from "styled-components";

const IContainer = styled(Container)`
  width: 100%;
  padding: 40px 10px;
  background: white;
  max-width: 100%;

  @media (max-width: 600px) {
    & {
    }
  }
`;

const BannerText = styled.h1`
  color: black;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px; 

  @media (max-width: 600px) {
    & {
      font-size: 1.9em;
    }
  }
`;

const Div = styled.div`
  flex-wrap: wrap;
  gap: 30px;
  position: relative;
`

export { IContainer, BannerText, Div };