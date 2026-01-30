"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import styles from "./page.module.css";
import Paper from '@mui/material/Paper';
import Banner from "./components/Banner";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import ArtGallery from "./components/ArtGallery";
import Experience from "./components/Experience/Experience";
import Loader from "./components/Loader";
// import NotificationBar from "./components/NotificationBar";
// import NotificationBar from "./components/NotificationBar";

const CustomPaper = styled(Paper)`
  background:white;
  height: 100%;
  width: 100%;
  padding:0;
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
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <LoaderOverlay>
  //       <Loader size={250} text="Welcome to my portfolio" />
  //     </LoaderOverlay>
  //   );
  // }

  return (
    <CustomPaper>
      {/* <NotificationBar/> */}
      <NavBar/>
      <Banner/>
      <TechStack/>
      <Projects/>
      <ArtGallery/>
      <Publications/>
      {/* <Experience/> */}
      <Footer/>
    </CustomPaper>
  );
}
