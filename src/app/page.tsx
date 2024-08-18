"use client";

import styled from "styled-components";
import NavBar from "./components/NavBar";
import styles from "./page.module.css";
import Paper from '@mui/material/Paper';
import Banner from "./components/Banner";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Footer from "./components/Footer";

const CustomPaper = styled(Paper)`
  background:white;
  // min-height: 100vh;
  height: 100%;
  width: 100%;
  padding:0;
`;

export default function Home() {
  return (
    <CustomPaper>
      <NavBar/>
      <Banner/>
      <TechStack/>
      <Projects/>
      <Publications/>
      <Footer/>
      {/* <TechStack/>
      <TechStack/>
      <TechStack/>
      <TechStack/>
      <TechStack/>
      <TechStack/>
      <TechStack/>
      <TechStack/> */}
      
    </CustomPaper>
  );
}
