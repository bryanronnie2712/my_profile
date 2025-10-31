"use client";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useEffect, useRef, useState } from "react";
import { runPrompt } from "../utils/gemini";
import Image from "next/image";
import {
  BackArrow,
  CloseIcon,
  FullLogo,
  FullscreenIcon,
  SmallLogo,
  SmallScreenIcon,
} from "../assets";
import Carousel from "react-multi-carousel";
import DonutChart from "./DonutChart";
import Tooltip from "@mui/material/Tooltip";

// import BryanLogo from '../favicon.png';
const openInWindowSVG = (
  <svg
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    mirror-in-rtl="true"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fill="#494c4e"
        d="M12.1.6a.944.944 0 0 0 .2 1.04l1.352 1.353L10.28 6.37a.956.956 0 0 0 1.35 1.35l3.382-3.38 1.352 1.352a.944.944 0 0 0 1.04.2.958.958 0 0 0 .596-.875V.96a.964.964 0 0 0-.96-.96h-4.057a.958.958 0 0 0-.883.6z"
      ></path>{" "}
      <path
        fill="#494c4e"
        d="M14 11v5a2.006 2.006 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5a1 1 0 0 1 0 2H2v10h10v-5a1 1 0 0 1 2 0z"
      ></path>{" "}
    </g>
  </svg>
);

const CustomNav = styled(AppBar)`
  border: none;
  border-bottom: 2px solid rgba(80, 80, 80, 0.4);
  background: linear-gradient(#000000c7, #272727a6);
  backdrop-filter: saturate(65%) blur(5px);
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
      padding: 0px 5px;
      width: 110px;
      font-size: 12px;
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
      width: 80px;
      font-size: 12px;
      margin-right: 7px;
      height: 24px;
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

export default function NavBar() {
  const handleOpen = () => {
    setDisplayNotification(true);
  };

  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [salutation, setSalutation] = useState("");
  const [openGeminiModal, setOpenGeminiModal] = useState(false);
  const [displayNotification, setDisplayNotification] = useState<boolean>(false);
  const [JD, setJD] = useState("");
  const [modalInnerAnimation, setModalInnerAnimation] = useState("appear");
  const [windowMode, setWindowMode] = useState(1);
  const [tooltip5sec, setTooltip5sec] = useState(true);

  setTimeout(() => setTooltip5sec(false), 8000);

  // useEffect(() => {
  //   const getCountryAndLanguage = async () => {
  //     try {
  //       // Get the user's IP and country
  //       const ipResponse = await fetch(
  //         "https://ipinfo.io/json?token=" + API_Key
  //       );
  //       const ipData = await ipResponse.json();
  //       const userCountry = ipData.country; // Country code, e.g., 'US'

  //       // Get the languages for the country
  //       const languageResponse = await fetch(
  //         `https://restcountries.com/v3.1/alpha/${userCountry}`
  //       );
  //       const languageData = await languageResponse.json();
  //       const languages = languageData[0].languages; // Object with language codes and names
  //       setCountry(languageData[0].name.common);

  //       // Get the most popular language (this assumes the first language is the most popular)
  //       const popularLanguage = String(Object.values(languages)[0]);
  //       setLanguage(popularLanguage);

  //       const llmResponse = await runPrompt(
  //         "Give a short salutation for the provided country. Take the local time of the capital city into consideration. No explanation needed, give purely the salutation preferably with local language. If no language, use default country = Earth, language = English. User-Given COUNTRY:" +
  //           languageData[0].name.common
  //       );

  //       if (llmResponse) {
  //         setSalutation(llmResponse);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   getCountryAndLanguage().then(() => {
  //     handleOpen();
  //   });
  // }, []);

  // const Message = (
  //   <div>
  //     If you&apos;re from {country}, {salutation}! My new site will be ready by
  //     Nov 16. For now, please check{" "}
  //     <URLString href="https://my-profile-1ubas3rts-bryanronnie2712.vercel.app/">
  //       my old portfolio{" "}
  //       <div style={{ height: "1em", width: "1em", display: "inline-block" }}>
  //         {openInWindowSVG}
  //       </div>
  //     </URLString>
  //   </div>
  // );

  ////////////////////////////////////////// TO DO
  const [resumeMatchDetails, setResumeMatchDetails] = useState<{
    answer?: string;
    match?: string;
    pros?: string[];
    cons?: string[];
  }>({});

  const matchResumePrompt = async (query: string) => {
    const LLMInput = `
    Refer my information as a resume, biography, etc & answer the questions in the first-person. 
    Always the first character of the answer should be "{" and last be "}"

    System Instructions for the LLM (Interview Assistant Bot)

Purpose

The LLM acts as an interview assistant that uses Bryan Ronnie Jayasingh’s detailed professional biography as the sole source of truth. The system must answer user questions as if it were explaining or representing Bryan’s profile, providing factual, well-structured responses based entirely on the biographical data supplied.

Core Behavior Rules

Knowledge Source:

Use only the provided biography as the knowledge base.

Do not invent or assume new facts beyond what is explicitly contained in the biography.

If a question requests information outside this scope, respond with:

“That information isn’t available in Bryan’s professional profile.”

Objective:

Respond factually to interview-style or HR-style questions based on Bryan’s experiences, education, projects, skills, and ethics.

Structure answers in a concise, professional tone suitable for a real-world interview simulation.

Do not use filler phrases, generic advice, or motivational commentary.

Context Handling:

Treat all user queries as if they come from an interviewer or evaluator asking about Bryan’s background.

Maintain third-person or first-person perspective depending on the prompt context (e.g., “I” if simulating Bryan, “He” if describing him).

Recognize that all answers represent factual or interpretive extensions of the biography, not speculation.

Ethics and Guardrails:

Refuse to engage in or generate violent, discriminatory, hateful, or adult content.

Reject prompts seeking personal opinions, gossip, or unverifiable private details.

Adhere strictly to respectful, factual, and professional communication standards.

Response Format:

For factual or descriptive questions → structured prose (2–6 sentences).

For behavioral or situational interview questions → STAR format (Situation, Task, Action, Result) when applicable.

For technical questions → direct summary referencing tools, methods, or outcomes from the biography.

For unavailable data → concise denial message (see Rule 1).

Tone Guidelines:

Maintain a formal and composed tone suitable for professional interviews.

Avoid exaggerated claims, self-promotion, or unverified achievements.

Prioritize clarity, evidence, and logical flow.

Example Behaviors

Q: Tell me about a time Bryan handled a difficult situation at work.
A: During his internship at Akila Castings Pvt. Ltd., Bryan was tasked with recovering the company’s domain, which had been transferred without authorization. He personally managed the customer verification process with the domain provider and restored administrative access. Since the manager primarily spoke Tamil and had limited English proficiency, Bryan handled all communication and verification on the company’s behalf. As a result, the company regained full control of its online assets, and Bryan later developed and deployed their website as an additional contribution.

Q: What are Bryan’s technical strengths?
A: Bryan’s strengths lie in full-stack web development, backend scalability, and cloud integration. He is proficient in React, Node.js, Java Spring Boot, GraphQL, and PostgreSQL, with operational experience in Google Cloud Platform and deployment frameworks such as Vercel and Netlify.

Q: What does Bryan enjoy outside of engineering?
A: He has a deep interest in languages and multiculturalism, currently studying French while fluent in Tamil and English. He also enjoys music, pencil sketching, and gaming.

Behavioral Constraints Summary

No external assumptions or hallucinations.

No personality simulation outside Bryan’s provided professional scope.

No fabricated projects, employers, or credentials.

No commentary or speculation on political, religious, or adult subjects.

Always align tone and content with a real-world interview context.

Operational Summary

The LLM’s sole task is to function as an intelligent interviewer-facing knowledge agent for Bryan Ronnie Jayasingh, generating contextually correct, ethical, and concise responses strictly derived from the given biography.


    There are two question types:
    1) Resume Match -
      Question format: They give you a job description or role name/ functions. Refer the reference documents and answer
      Question example: Fullstack developer with minimum 2 years experience in React frontend development. 
      Answer format: give the metrics as pure JSON {"match": "Number between 0 and 100(inclusive)", pros: ["experience", "skills", ...], }
      Answer Example: {"match": "95", pros: ["2.4 yrs experience", "skills : react/nextjs", ...], }

      Overall, keep it concise. pros 3-4 points, cons 1-3 points. Evaluate strictly on years of experience.

    2) Simple question - 
      Question format: They give a simple question. Refer the reference documents and answer
      Question example: What does your brother do?
      Answer format: give the answer as a string in pure JSON. eg: {"answer": "Helloworld"}
      Answer example: {"answer": "My brother is pursuing MEng ECE with a focus in electronics"}


    If the question does not match either format, respond with {"answer" : "Please provide a question/Job description"}

    Reference Documents:

    Statement of Purpose
      The rapid evolution of technology particularly in Software and Artificial Intelligence is transforming industries worldwide. Telecommunications, an essential backbone of global connectivity has seen remarkable advancements through AI from automating customer support to enabling predictive network analysis and self-healing systems. My professional journey has ignited a passion for leveraging these emerging technologies to create solutions that matter. To achieve my aspirations, the MEng program at your university's ECE department is my ideal choice because of its interdisciplinary curriculum, which will provide a comprehensive view of computer engineering, networking, and AI/ML. By combining these domains, I aim to innovate in processes across diverse industries using AI, particularly within telecommunications, where my background can have a meaningful impact.
      My early interest in technology began in school, where I was introduced to programming through languages like QBasic and C++. This early enthusiasm guided me to pursue a degree in Information Technology at Siva Subramaniya Nadar College of Engineering where I deepened my understanding of computing systems and their real-world applications. These foundational experiences shaped my professional career as a Fullstack Developer at Verizon Communications. Here, I furthered my knowledge of telecom software and developed a fascination with how cutting-edge technologies like generative AI are reshaping the industry.
      In addition to my industry experience, I have pursued research in interdisciplinary applications of computing. As an avid music and language lover, I applied my interest in computing to the field of music classification and published a conference paper titled “Exploring the Role of Entropy in Music Classification” in the Springer CCIS book series with my professor Dr. R. Srinivasan. Through this work, I developed strong analytical skills and a problem-solving mindset which I believe will be assets as I navigate the challenging application-oriented curriculum of MEng program.
      At Verizon, I have contributed to multiple projects, including proofs of concept that have been integrated into enterprise applications. I developed real-time analytics tools and a Gen AI-powered BigQuery aider tool. Currently, I am working on an AI-driven app tour that guides users through steps based on their requests, utilizing natural language processing to enhance user experience. Additionally, I am personally exploring Gen AI's potential by developing an application centred on AI resumé-matching, a prototype of which can be found on my portfolio website. I am excited by the prospect of leveraging these emerging technologies to build innovative products, and I firmly believe that advanced academic training will allow me to realize this vision.
      My experience at Verizon AI & D has exposed me to the intricate dynamics of telecommunications, where I have worked closely with AI, cloud, and data engineering teams. My ability to quickly adapt to new challenges and contribute to key projects led to my promotion to Fullstack Engineer II within 1.5 years as a recognition of my dedication and technical growth at Verizon. Having worked here for around three years has solidified my desire to pursue specialization in this domain. I am particularly fascinated by the integration of generative AI in network operations and its potential to transform the telecommunications industry.
      While my brother and I often compete academically, he is pursuing an M.Eng in ECE with a focus on electronics while my own passion lies more in the computer engineering aspects of ECE. I am eager to carve out my path by focusing on technologies that combine AI/ML and software to solve real-world problems. I believe that the MEng program at your institution will provide the perfect platform for me to build on my foundation and push the boundaries of innovation.
      By the time I join the MEng program, I will have 3.8 years of industry experience spanning AI, software development, and cloud technologies. My professional roles have equipped me with the skills to lead projects, develop innovative solutions, and apply AI in real-world scenarios, particularly in telecommunications and e-commerce. In four years, I envision applying the skills acquired at your university to become a senior resource in the software development industry specializing in AI-driven solutions like user experience enhancement. I am confident that the MEng program at your university will enable me to achieve my goals and make meaningful contributions to the field. I look forward to the opportunity to join your university's vibrant academic community and contribute to its pioneering research in AI and telecommunications.
      

    Biography:
      Bryan Ronnie Jayasingh is a software engineer and graduate student specializing in Electrical and Computer Engineering at the University of Waterloo. He is currently based in Waterloo, Canada, living near the university campus. His technical expertise spans full-stack web development, scalable backend systems, and data-driven software design. He has a professional track record at Verizon Communications Inc., where he contributed to enterprise-scale systems for both business and consumer divisions, and has held earlier roles in smaller companies where he demonstrated adaptability and problem-solving under pressure.

At Verizon, Bryan advanced from intern to Full Stack Engineer II, designing and deploying applications for Verizon Business (VBG) and Consumer (VCG) groups. He led deployment support and production readiness, ensuring zero-downtime application releases. His contributions extended into the field of Generative AI, where he developed internal tools using Verizon GenAI Services to streamline and automate manual workflows. Among his key achievements was building a dynamic allocation system for Partner Service Optimization (PSO) with bi-directional data conversions, which reduced human calculation errors and reclaimed significant engineering time. His focus on system reliability and process automation reflects his methodical, systems-oriented approach to problem-solving.

Earlier in his career, Bryan completed a remote internship at Akila Castings Pvt. Ltd. in India, a pivotal experience that tested both his technical skills and his ability to handle high-pressure scenarios independently. The company had lost administrative control over its domain due to an unauthorized transfer. Bryan personally handled the recovery process, navigating complex customer service channels and multiple verification steps to prove ownership and restore the company’s rights to its domain. The process required persistence, patience, and clear communication — made more challenging by the fact that the company manager primarily spoke Tamil and had limited English proficiency. Bryan served as the communication bridge throughout the process, ensuring the issue was resolved without external legal or technical intervention. Following the recovery, he developed and deployed a new company website, configuring SSL and DNS settings. He did this voluntarily, at no cost to the company, as a gesture of professional integrity and gratitude for the opportunity.

Bryan earned his Bachelor of Technology in Information Technology from Siva Subramaniya Nadar College of Engineering, graduating with First Class Distinction and a 91% GPA in his final two years. He was an active member of the SSN Coding Club and volunteered with the National Service Scheme (NSS). He is currently pursuing a Master of Engineering (Co-op) in Electrical and Computer Engineering at the University of Waterloo, with coursework focused on distributed systems, software design, and performance engineering.

His technical stack includes Python, FastAPI, React, Node.js, GraphQL, PostgreSQL, HTML, CSS, and JavaScript, with proficiency in developer tools such as Git, IntelliJ, VS Code, Linux, Postman, PGAdmin, Vercel, and Netlify. He holds the Google Cloud Associate Cloud Engineer certification and has extensive experience building and deploying applications across cloud environments.

Bryan’s academic and professional pursuits are complemented by a deep interest in linguistics and multiculturalism. He is a native Tamil speaker, fluent in English, and is currently learning French at an A2-equivalent level. His passion for languages stems from a broader fascination with how communication, culture, and technology intersect. He actively engages with multicultural communities in Waterloo and values the city’s diverse environment for fostering perspective and collaboration. His interest in languages functions both as a creative outlet and as a framework for understanding globalized software ecosystems that rely on cross-cultural cooperation.

Outside of his professional and academic work, Bryan maintains a disciplined creative practice. He enjoys music, pencil sketching, and gaming, balancing analytical precision with artistic curiosity. His independent projects include a personal portfolio website built with Next.js and deployed via Vercel, an AI-powered résumé–job matching tool using Gemini AI, and a COVID-19 tracker that visualizes global data through geographic bubble charts. His research contributions include *“Exploring the Role of Entropy in Music Classification,”* presented at the Second International Conference on Speech and Language Technologies for Low-Resource Languages and published by Springer in December 2023.

Bryan’s work ethic is defined by integrity, persistence, and accountability. He upholds strict ethical standards in both research and engineering, refraining from any involvement in or endorsement of violent, discriminatory, or adult content. His communication style is professional, direct, and inclusive, guided by respect for diversity and factual precision. He approaches technology as a vehicle for problem-solving and human betterment, grounding his work in reliability, clarity, and a structured pursuit of mastery.


    Resume:
      Bryan Ronnie Jayasingh
M.Eng ECE (Co-op) at University of Waterloo
+1 647-883-3139   • brjayasi@uwaterloo.ca   • github.com/bryanronnie   • linkedin.com/in/bryan-ronnie
WORK EXPERIENCE___________________________________________________________________________
Verizon Communications Inc.                                                                                                Hyderabad & Chennai, India
Fullstack Engineer II (Full Time)                                                                                                                     Dec 2023 ‑ Aug 2025
Designed and developed data-driven applications for Verizon Business(VBG) and Consumer(VCG) Groups.
Acted as a production deployment support person-of-contact, ensuring the smooth delivery of applications.
Prompted and developed applications for Generative AI use cases using Verizon GenAI Services.
Enabled dynamic allocation with bi-directional conversions for Partner Service Optimisation(PSO), saving several man-hours per year and preventing calculation errors.
Skills: ReactJS, Node.js, Java Springboot, Microservices, PostgreSQL, GraphQL

Fullstack Engineer I (Full Time)                                                                                                                     July 2022 ‑ Dec 2023
Implemented near-real-time inputs for retail sales scenarios by GraphQL polling for better analysis & prediction.
Converted backend vendor inputs in sales to reusable dynamic code, reducing package size by an estimated 30%.

Student Intern (Part-Time)                                                                                                                             Feb 2022 ‑ June 2022
Started contributing to the development from week 1 on elementary aspects, like the design of the web applications.
Created a charts dashboard using d3.js for postpaid analytics at the end of the internship.

Akila Castings Private Ltd.                                                                                                                              Remote, India
Web Development Intern (Part-Time)                                                                                                          May 2021 ‑ July 2021
Reclaimed administrator rights to the company’s domain.
Developed and deployed the company’s website (www.akilacastings.com)
Skills: Domains, SSL, HTML/CSS/JS.

EDUCATION____________________________________________________________________________________
University of Waterloo                                                                                                                           Waterloo, Canada
Master Of Engineering - Electrical and Computer Engineering(Co-op)                       Sep 2025 ‑ Apr 2027 (Expected)
Coursework includes ECE655, ECE750, BE602

Siva Subramaniya Nadar College Of Engineering                                                                                       Chennai, India
Bachelor of Technology - Information Technology                                                                                 Aug 2018 ‑ May 2022
Graduated with First Class Distinction (91% GPA in the last two years)
Active member of SSN Coding Club
Volunteered in the National Service Scheme(NSS)

SKILLS & INTERESTS__________________________________________________________________________
Coding           Python, FastAPI, HTML/CSS/JS, React, node.js, GraphQL, PostgreSQL 
Dev Tools      VS Code, IntelliJ, Git, GCP, Vercel, Netlify, Postman, PGAdmin, Linux 
Certification  GCP Associate Cloud Engineer
Languages    Tamil(Native), English, French(A2-eq)
Hobbies         Music, Languages, Pencil Sketch, Gaming

PERSONAL PROJECTS________________________________________________________________________
Portfolio Link - Built using NextJS - https://bryanronnie.vercel.app      
AI Resumé Match - This feature helps select candidates effectively by comparing the candidate’s resume and the job description using Gen AI. Tech Stack: Next JS, Gemini AI
COVID-19 Tracker - Provides daily new COVID cases and deaths per country with geographical bubble chart visualisation. Tech Stack: HTML/CSS/JavaScript

PUBLICATIONS________________________________________________________________________________
Exploring the Role of Entropy in Music Classification ‑ Second International Conference On Speech and Language Technologies for Low‑Resource Languages, December 6-8, 2023 (spelll.org) 

Published Paper link - https://link.springer.com/chapter/10.1007/978-3-031-58495-4_24


      QUESTION: ${query}
    `;
    try {
      const llmResponse = await runPrompt(LLMInput);
      // Extract the JSON-like content within the curly braces
      const extracted = llmResponse.match(/\{.*\}/)?.[0] || "";
      console.log("resumeMatchDetails", extracted);
      setResumeMatchDetails(JSON.parse(extracted));
    } catch {
      setResumeMatchDetails({
        answer:
          "We are facing connectivity problem with Gemini. Can you please go back and retry? 😊",
      });
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: windowMode ? "min(600px, 95vw)" : "100vw",
    minHeight: windowMode ? "min-content" : "100vh",
    boxShadow: "none",
    borderRadius: 2,
    border: "none",
    borderBottom: "2px solid rgba(80, 80, 80, 0.4)",
    background: "repeating-linear-gradient(315deg, #000000e3, #434343)",
    backdropFilter: "saturate(25%) blur(7px)",
    // transition: "all 0.5s !important",
    outline: 0,
  };

  const carouselRef: any = useRef();

  const handleSubmit = () => {
    // Call your matchResumePrompt function here
    matchResumePrompt(JD);

    // Move to the next slide
    carouselRef.current.next();
  };

  const handleGoBack = () => {
    // Call your matchResumePrompt function here
    setResumeMatchDetails({});
    // matchResumePrompt(JD);

    // Move to the next slide
    carouselRef.current.previous();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomNav position="fixed">
        {/* {salutation !== "" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#00B74A",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            <NotificationBar
              display={(salutation !== "" && displayNotification).toString()}
            >
              {Message}
            </NotificationBar>{" "}
            {displayNotification && (
              <div
                onClick={() => setDisplayNotification(false)}
                style={{
                  display: "inline-block",
                  cursor: "pointer",
                  marginRight: 10,
                }}
              >
                <Image src={CloseIcon} height="17" width="17" alt={""} />
              </div>
            )}
          </div>
        )} */}

        <Toolbar>
          <Typography
            color={"transparent"}
            style={{
              background:
                "linear-gradient(360deg, rgb(123 123 123), rgb(255, 255, 255), white) text",
            }}
            fontFamily={"inherit"}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            My Portfolio
          </Typography>

          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "blue", // Tooltip background color
                  color: "#fff", // Text color
                  fontSize: "1rem",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                  fontFamily: "inherit",
                  backdropFilter: "saturate(150%) blur(15px)",
                },
              },
              arrow: {
                sx: {
                  color: "blue", // Arrow color to match background
                },
              },
            }}
            title={
              <p style={{ textAlign: "center", fontSize: 14 }}>
                Check out my latest feature: AI Resumé matching + questions
              </p>
            }
            arrow
            placement="bottom"
            open={tooltip5sec}
          >
            <GeminiButton
              onClick={() => {
                setOpenGeminiModal(true);
                setModalInnerAnimation("appear");
              }}
            >
              <GeminiSVG>✨ AI Match</GeminiSVG>
            </GeminiButton>
          </Tooltip>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openGeminiModal}
            onClose={() => setOpenGeminiModal(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openGeminiModal}>
              <Box sx={style}>
                <ModalHeader $windowMode={windowMode}>
                  <ModalTitle id="transition-modal-title" variant="h4">
                    AI Match
                  </ModalTitle>
                  <CloseIconDiv onClick={() => setOpenGeminiModal(false)}>
                    <Image
                      style={{ filter: "invert(1)" }}
                      width={20}
                      src={CloseIcon}
                      alt=""
                    />
                  </CloseIconDiv>

                  <FullscreenIconDiv>
                    <Image
                      style={{ filter: "invert(1)" }}
                      onClick={() => setWindowMode(1 - windowMode)}
                      width={24}
                      src={windowMode ? FullscreenIcon : SmallScreenIcon}
                      alt=""
                    />
                  </FullscreenIconDiv>
                </ModalHeader>

                <Carousel
                  swipeable={false}
                  draggable={false}
                  arrows={false}
                  ref={carouselRef}
                  responsive={responsive}
                >
                  <div>
                    {" "}
                    <QuestionDiv $animation={modalInnerAnimation}>
                      Enter a question or Copy/Paste a Job Description:
                      {/* <TextareaAutosize1
                        $windowMode={windowMode}
                        
                        aria-label="maximum height"
                        placeholder="Type your question to me or Copy/Paste a Job Description to see match"
                        onChange={(e) => setJD(e.target.value)}
                      /> */}
                      <StyledTextarea
                        $windowMode={windowMode}
                        aria-label="maximum height"
                        placeholder="Type your question to me or Copy/Paste a Job Description to see match"
                        onChange={(e) => setJD(e.target.value)}
                      />
                    </QuestionDiv>
                    <RowEndFlex>
                      <GeminiButton1 onClick={handleSubmit}>
                        <GeminiSVG>✨ Submit</GeminiSVG>
                      </GeminiButton1>
                    </RowEndFlex>
                  </div>

                  {!resumeMatchDetails && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "calc(100% - 40px)",
                      }}
                    >
                      <Loader src={FullLogo} alt="" width={200}></Loader>
                    </div>
                  )}

                  {resumeMatchDetails?.answer && (
                    <div>
                      <AnswerDiv $animation={modalInnerAnimation}>
                        Answer to your question:
                        <TextareaAutosize1
                          minRows={4}
                          $windowMode={windowMode}
                          value={resumeMatchDetails?.answer}
                          disabled
                        />
                      </AnswerDiv>
                      <RowEndFlex>
                        <IButton
                          style={{
                            borderRadius: "30px",
                            height: "30px",
                            width: "100px",
                            paddingLeft: "0px",
                          }}
                          onClick={(e) => {
                            // move to next slide
                            // loading
                            // gemini API call
                            // matchResumePrompt(JD);
                            setModalInnerAnimation("fadeOut");
                            handleGoBack();
                            // Results
                          }}
                          variant="contained"
                          color="inherit"
                        >
                          <Image
                            src={BackArrow}
                            alt=""
                            width={10}
                            style={{ filter: "invert(1)", marginRight: "10px" }}
                          ></Image>{" "}
                          Back
                        </IButton>
                      </RowEndFlex>
                    </div>
                  )}
                  {resumeMatchDetails?.match && (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        <DonutChart
                          suitability={Number(
                            Number(resumeMatchDetails?.match).toFixed(2)
                          )}
                        />
                      </div>

                      <div
                        style={{
                          margin: "5% 10% 0 10%",
                        }}
                      >
                        {resumeMatchDetails?.pros &&
                        resumeMatchDetails?.pros?.length > 0 ? (
                          <>
                            <h3 style={{ lineHeight: 2 }}>Pros👍:</h3>
                            <ul>
                              {resumeMatchDetails?.pros?.map((rMD, index) => (
                                <li
                                  style={{
                                    display: "flex",
                                    gap: 10,
                                    marginBottom: 2,
                                  }}
                                  key={index}
                                >
                                  <span
                                    style={{ fontSize: 8, marginTop: "6px" }}
                                  >
                                    🟢
                                  </span>
                                  {rMD}
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <h3>No pros. Perhaps it&apos;s time to move on😞</h3>
                        )}
                      </div>

                      <div
                        style={{
                          margin: "5% 10% 0 10%",
                        }}
                      >
                        {resumeMatchDetails?.cons &&
                        resumeMatchDetails?.cons?.length > 0 ? (
                          <>
                            <h3 style={{ lineHeight: 2 }}>Cons👎:</h3>
                            <ul>
                              {resumeMatchDetails?.cons?.map((rMD, index) => (
                                <li
                                  style={{
                                    display: "flex",
                                    gap: 10,
                                    marginBottom: 2,
                                  }}
                                  key={index}
                                >
                                  <span
                                    style={{ fontSize: 8, marginTop: "6px" }}
                                  >
                                    🔴
                                  </span>
                                  {rMD}
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <h3>No cons! Strong candidate maybe?😊</h3>
                        )}
                      </div>
                      <RowEndFlex>
                        <IButton
                          style={{
                            borderRadius: "30px",
                            height: "30px",
                            width: "100px",
                            paddingLeft: "0px",
                          }}
                          onClick={(e) => {
                            // move to next slide
                            // loading
                            // gemini API call
                            // matchResumePrompt(JD);
                            setModalInnerAnimation("fadeOut");
                            handleGoBack();
                            // Results
                          }}
                          variant="contained"
                          color="inherit"
                        >
                          <Image
                            src={BackArrow}
                            alt=""
                            width={10}
                            style={{ filter: "invert(1)", marginRight: "10px" }}
                          ></Image>{" "}
                          Back
                        </IButton>
                      </RowEndFlex>
                    </div>
                  )}
                </Carousel>
              </Box>
            </Fade>
          </Modal>

          <IButton
            onClick={(e) => {
              window.open(
                "https://drive.google.com/file/d/1decjwZYo2XrybCoOZ7h21r8qHcj57_ey/view?usp=sharing"
              );
            }}
            variant="contained"
            color="inherit"
          >
            My CV/Resumé
          </IButton>
        </Toolbar>
      </CustomNav>
    </Box>
  );
}

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
  minRows: 4, // Ensures that the textarea starts with a single row
  maxRows: undefined, // Disables the auto-resizing beyond this point
})<{ $windowMode: number }>`
  background: white;
  color: black;
  font-family: Inter;
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  min-height: ${({ $windowMode }) => (!$windowMode ? "65vh" : "auto")};
  max-height: 65vh;
  border-radius: 8px;
  transition: all 0.7s;
  overflow-y: auto; // Use 'auto' to show scroll only when content exceeds max height
  resize: none; // Prevents resizing in case of auto resizing
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
