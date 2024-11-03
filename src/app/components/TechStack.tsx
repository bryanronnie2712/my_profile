"use client";
import { Container } from "@mui/material";
import styled, { keyframes } from "styled-components";
import BubbleChart from "./BubbleChart";
import { useState } from "react";

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

export default function TechStack() {
  const sampleData = [
    { id: 1, name: "React", category: 1, radius: 100 },
    { id: 2, name: "Java", category: 2, radius: 60 },
    { id: 3, name: "NextJS", category: 1, radius: 30 },
    { id: 4, name: "PostgreSQL", category: 3, radius: 35 },
    { id: 5, name: "Python", category: 2, radius: 40 },
    { id: 6, name: "node.js", category: 2, radius: 10 },
    { id: 7, name: "GraphQL", category: 3, radius: 25 },
    { id: 8, name: "SpringBoot", category: 2, radius: 50 },
    { id: 9, name: "Matlab", category: 4, radius: 35 },
    { id: 10, name: "Gemini", category: 5, radius: 40 },
    // Add more data points as needed
  ];

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