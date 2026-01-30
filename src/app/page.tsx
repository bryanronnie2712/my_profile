"use client";

import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import Paper from '@mui/material/Paper';
import Banner from "./components/Banner";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import ArtGallery from "./components/ArtGallery";
import Loader from "./components/Loader";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CustomPaper = styled(Paper)<{ $isLoaded: boolean }>`
  background: white !important;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  box-shadow: none !important;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  animation: ${({ $isLoaded }) => ($isLoaded ? fadeIn : 'none')} 0.6s ease-in;
`;

const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #000000, #1a1a1a, #2d2d2d);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Initial loader for 1500ms
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      // Short delay before fading in content
      setTimeout(() => setIsContentReady(true), 100);
    }, 1500);

    return () => clearTimeout(loaderTimer);
  }, []);

  if (isLoading) {
    return (
      <LoaderOverlay>
        <Loader size={250} text="Welcome to my portfolio" />
      </LoaderOverlay>
    );
  }

  return (
    <CustomPaper $isLoaded={isContentReady}>
      <NavBar />
      <Banner />
      <TechStack />
      <Projects />
      <ArtGallery />
      <Publications />
      <Footer />
    </CustomPaper>
  );
}
