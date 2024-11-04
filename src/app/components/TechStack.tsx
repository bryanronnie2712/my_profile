"use client";
import { Container } from "@mui/material";
import styled, { keyframes } from "styled-components";
import BubbleChart from "./BubbleChart";
import { useState } from "react";
import { sampleData } from "../data/cardValues";

export default function TechStack() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on search term
  const filteredData = sampleData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return (
    <IContainer>
      <BannerText>My Techstack</BannerText>
      <SearchInput
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BubbleChart data={filteredData} />
    </IContainer>
  );
}

const IContainer = styled(Container)`
  width: 100%;
  padding: 20px 10px;
  background: white;
  max-width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
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
`;

const SearchInput = styled.input`
  background: white;
  color: black;
  font-family: Inter;
  font-size: 16px;
  width: min(80vw, 400px);
  margin: 20px 0 10px 0;
  padding: 10px;
  border-radius: 8px;
  border: 0;
  box-shadow: inset 0px 0px 5px #afafaf;

  &:focus, &:active, &:target, &:focus-within, &:focus-visible, &:target, &:active{
    border:0;
    outline: none;
  }
`;
