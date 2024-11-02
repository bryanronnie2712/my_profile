"use client";
import { Container } from "@mui/material";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { techIcons } from "../data/cardValues";
import BubbleChart from "./BubbleChart";
import { useState } from "react";

const IContainer = styled(Container)`
  width: 100%;
  padding: 40px 10px;
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
  margin-bottom: 30px;
  @media (max-width: 600px) {
    & {
      font-size: 1.7em;
    }
  }
`;

export default function TechStack() {
  const sampleData = [
    { id: 1, name: "React", category: "A", radius: 100 },
    { id: 2, name: "Java", category: "B", radius: 60 },
    { id: 3, name: "NextJS", category: "A", radius: 30 },
    { id: 4, name: "PostgreSQL", category: "C", radius: 35 },
    { id: 5, name: "Python", category: "B", radius: 40 },
    { id: 6, name: "node.js", category: "B", radius: 10 },
    { id: 7, name: "GraphQL", category: "B", radius: 25 },
    { id: 8, name: "SpringBoot", category: "A", radius: 50 },
    { id: 9, name: "Matlab", category: "C", radius: 35 },
    { id: 10, name: "Gemini", category: "B", radius: 40 },
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
      <BubbleChart data={filteredData} searchTerm={searchTerm} />
    </IContainer>
  );
}

const SearchInput = styled.input`
  background: white;
  color: black;
  font-family: Inter;
  font-size: 16px;
  width: min(80vw, 400px);
  margin: 20px;
  padding: 10px;
  border-radius: 8px;
  border: 0;
  box-shadow: inset 0px 0px 5px #afafaf;

  &:focus, &:active, &:target, &:focus-within, &:focus-visible, &:target, &:active{
    border:0;
    outline: none;
  }
`;