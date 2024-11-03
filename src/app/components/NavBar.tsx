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
import { BackArrow, CloseIcon, FullscreenIcon, SmallScreenIcon } from "../assets";
import Carousel from "react-multi-carousel";
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
  const API_Key = String(process.env.NEXT_PUBLIC_API_KEY_2);

  const handleOpen = () => {
    setDisplayNotification(true);
  };

  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [salutation, setSalutation] = useState("");
  const [openGeminiModal, setOpenGeminiModal] = useState(false);
  const [displayNotification, setDisplayNotification] =
    useState<boolean>(false);

  useEffect(() => {
    const getCountryAndLanguage = async () => {
      try {
        // Get the user's IP and country
        const ipResponse = await fetch(
          "https://ipinfo.io/json?token=" + API_Key
        );
        const ipData = await ipResponse.json();
        const userCountry = ipData.country; // Country code, e.g., 'US'

        // Get the languages for the country
        const languageResponse = await fetch(
          `https://restcountries.com/v3.1/alpha/${userCountry}`
        );
        const languageData = await languageResponse.json();
        const languages = languageData[0].languages; // Object with language codes and names
        setCountry(languageData[0].name.common);

        // Get the most popular language (this assumes the first language is the most popular)
        const popularLanguage = String(Object.values(languages)[0]);
        setLanguage(popularLanguage);

        const llmResponse = await runPrompt(
          "Give a short salutation for the provided country. Take the local time of the capital city into consideration. No explanation needed, give purely the salutation preferably with local language. If no language, use default country = Earth, language = English. User-Given COUNTRY:" +
            languageData[0].name.common
        );

        if (llmResponse) {
          setSalutation(llmResponse);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCountryAndLanguage().then(() => {
      handleOpen();
    });
  }, []);

  const Message = (
    <div>
      If you&apos;re from {country}, {salutation}! My new site will be ready by
      Nov 16. For now, please check{" "}
      <URLString href="https://my-profile-1ubas3rts-bryanronnie2712.vercel.app/">
        my old portfolio{" "}
        <div style={{ height: "1em", width: "1em", display: "inline-block" }}>
          {openInWindowSVG}
        </div>
      </URLString>
    </div>
  );

  ////////////////////////////////////////// TO DO
  const [resumeMatchDetails, setResumeMatchDetails] = useState<{
    answer?: string;
  }>({});

  const matchResumePrompt = async (query: string) => {
    const llmResponse = await runPrompt(`
    Refer my information as a resume, biography, etc & answer the questions in the first-person. 
    Always the first character of the answer should be "{" and last be "}"


    There are two question types:
    1) Resume Match -
      Question format: They give you a job description or role name/ functions. Refer the reference documents and answer
      Question example: Fullstack developer with minimum 2 years experience in React frontend development. 
      Answer format: give the metrics as pure JSON {"match": "0.78", pros: ["experience", "skills", ...], }
      Answer Example: {"match": "0.95", pros: ["2.4 yrs experience", "skills : react/nextjs", ...], }

    2) Simple question - 
      Question format: They give a simple question. Refer the reference documents and answer
      Question example: What does your brother do?
      Answer format: give the answer as a string in pure JSON. eg: {"answer": "Helloworld"}
      Answer example: {"answer": "My brother is pursuing MEng ECE with a focus in electronics"}

    If the question does not match either format, respond with {"answer" : "Please provide a question/Job description"}

    Reference Documents:

    Statement of Purpose
      The rapid evolution of technology particularly in Software and Artificial Intelligence is transforming industries worldwide. Telecommunications, an essential backbone of global connectivity has seen remarkable advancements through AI from automating customer support to enabling predictive network analysis and self-healing systems. My professional journey has ignited a passion for leveraging these emerging technologies to create solutions that matter. To achieve my aspirations, the MEng program at UBC’s ECE department is my ideal choice because of its interdisciplinary curriculum, which will provide a comprehensive view of computer engineering, networking, and AI/ML. By combining these domains, I aim to innovate in processes across diverse industries using AI, particularly within telecommunications, where my background can have a meaningful impact.
      My early interest in technology began in school, where I was introduced to programming through languages like QBasic and C++. This early enthusiasm guided me to pursue a degree in Information Technology at Siva Subramaniya Nadar College of Engineering where I deepened my understanding of computing systems and their real-world applications. These foundational experiences shaped my professional career as a Fullstack Developer at Verizon Communications. Here, I furthered my knowledge of telecom software and developed a fascination with how cutting-edge technologies like generative AI are reshaping the industry.
      In addition to my industry experience, I have pursued research in interdisciplinary applications of computing. As an avid music and language lover, I applied my interest in computing to the field of music classification and published a conference paper titled “Exploring the Role of Entropy in Music Classification” in the Springer CCIS book series with my professor Dr. R. Srinivasan. Through this work, I developed strong analytical skills and a problem-solving mindset which I believe will be assets as I navigate the challenging application-oriented curriculum of UBC’s MEng program.
      At Verizon, I have contributed to multiple projects, including proofs of concept that have been integrated into enterprise applications. I developed real-time analytics tools and a Gen AI-powered BigQuery aider tool. Currently, I am working on an AI-driven app tour that guides users through steps based on their requests, utilizing natural language processing to enhance user experience. Additionally, I am personally exploring Gen AI's potential by developing an application centred on AI resumé-matching, a prototype of which can be found on my portfolio website. I am excited by the prospect of leveraging these emerging technologies to build innovative products, and I firmly believe that advanced academic training will allow me to realize this vision.
      My experience at Verizon AI & D has exposed me to the intricate dynamics of telecommunications, where I have worked closely with AI, cloud, and data engineering teams. My ability to quickly adapt to new challenges and contribute to key projects led to my promotion to Fullstack Engineer II within 1.5 years as a recognition of my dedication and technical growth at Verizon. Having worked here for around three years has solidified my desire to pursue specialization in this domain. I am particularly fascinated by the integration of generative AI in network operations and its potential to transform the telecommunications industry.
      While my brother and I often compete academically, he is pursuing an M.Eng in ECE with a focus on electronics while my own passion lies more in the computer engineering aspects of ECE. I am eager to carve out my path by focusing on technologies that combine AI/ML and software to solve real-world problems. I believe that the MEng program at your institution will provide the perfect platform for me to build on my foundation and push the boundaries of innovation.
      The University of British Columbia is my preferred choice for a master’s program due to its exceptional research facilities and incubation centers like the Robson Square Hub that foster innovation and entrepreneurship. The university’s dedication to advancing the fields of software and AI/ML aligns with my aspirations. I am particularly interested in engaging with research labs like the Software Analysis and Test Lab (SALT), where I hope to deepen my knowledge of software engineering and its applications. I am also eager to connect with new people through the Electrical and Computer Engineering Graduate Student Association (ECEGSA) to brainstorm innovative solutions to complex industry challenges.
      By the time I join the MEng program, I will have 3.8 years of industry experience spanning AI, software development, and cloud technologies. My professional roles have equipped me with the skills to lead projects, develop innovative solutions, and apply AI in real-world scenarios, particularly in telecommunications and e-commerce. In four years, I envision applying the skills acquired at UBC to become a senior resource in the software development industry specializing in AI-driven solutions like user experience enhancement. I am confident that the MEng program at UBC will enable me to achieve my goals and make meaningful contributions to the field. I look forward to the opportunity to join UBC’s vibrant academic community and contribute to its pioneering research in AI and telecommunications.
      Thank you for considering my application.
      Bryan Ronnie J

      QUESTION: ${query}
    `);

    // Extract the JSON-like content within the curly braces
    const extracted = llmResponse.match(/\{.*\}/)?.[0] || "";
    console.log("resumeMatchDetails", extracted);
    setResumeMatchDetails(JSON.parse(extracted));
  };

  /////////////////////////////////////////

  const [JD, setJD] = useState("");
  const [modalInnerAnimation, setModalInnerAnimation] = useState("appear");
  const [windowMode, setWindowMode] = useState(1);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: windowMode ? "min(600px, 90vw)" : "100vw",
    minHeight: windowMode ? "min-content" : "100vh",
    boxShadow: "none",
    borderRadius: 2,
    border: "none",
    borderBottom: "2px solid rgba(80, 80, 80, 0.4)",
    // background: "linear-gradient(135deg, #ffffffcc, #ffffffbf, #ebe5ee)",
    background: "repeating-linear-gradient(315deg, #000000e3, #434343)",
    backdropFilter: "saturate(25%) blur(7px)",
    transition: "height 0.5s",
    outline: 0,
  };

  const carouselRef: any = useRef();

  const handleSubmit = () => {
    // Call your matchResumePrompt function here
    matchResumePrompt(JD);

    // Move to the next slide
    carouselRef.current.next();

    // Set your modal animation if needed
    setModalInnerAnimation("fadeOut");
  };

  const handleGoBack = () => {
    // Call your matchResumePrompt function here
    // matchResumePrompt(JD);

    // Move to the next slide
    carouselRef.current.previous();

    // Set your modal animation if needed
    setModalInnerAnimation("fadeOut");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomNav position="fixed">
        {salutation !== "" && (
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
        )}

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
          <GeminiButton
            onClick={() => {
              setOpenGeminiModal(true);
              setModalInnerAnimation("appear");
            }}
          >
            <GeminiSVG>✨ AI Match</GeminiSVG>
          </GeminiButton>

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
                  arrows={false}
                  draggable={false}
                  ref={carouselRef}
                  responsive={responsive}
                >
                  <div>
                    {" "}
                    <QuestionDiv $animation={modalInnerAnimation}>
                      Enter your question or Copy/Paste JD:
                      <TextareaAutosize
                        minRows={4}
                        // maxRows={4}
                        aria-label="maximum height"
                        placeholder="Type your question to me or Copy/Paste a Job Description to see match"
                        style={{
                          background: "white",
                          color: "black",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          width: "100%",
                          marginTop: "10px",
                          padding: "10px",
                          minHeight: !windowMode ? "70vh" : "auto",
                          maxHeight: "70vh",
                          maxWidth: "100%",
                          borderRadius: "8px",
                        }}
                        onChange={(e) => setJD(e.target.value)}
                      />
                    </QuestionDiv>
                    <div
                      style={{
                        color: "black",
                        padding: "40px 20px 20px 20px",
                        fontWeight: 600,
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <GeminiButton1 onClick={handleSubmit}>
                        <GeminiSVG>✨ Submit</GeminiSVG>
                      </GeminiButton1>
                    </div>
                  </div>
                  <div>
                    <AnswerDiv $animation={modalInnerAnimation}>
                      Answer to your question:
                      <TextareaAutosize
                        minRows={4}
                        // maxRows={4}
                        style={{
                          background: "white",
                          color: "black",
                          fontFamily: "Inter",
                          fontSize: "16px",
                          width: "100%",
                          marginTop: "10px",
                          padding: "10px",
                          maxWidth: "100%",
                          minWidth: "100%",
                          minHeight: !windowMode ? "70vh" : "auto",
                          maxHeight: "70vh",
                          borderRadius: "8px",
                        }}
                        value={resumeMatchDetails?.answer}
                        disabled
                      />
                    </AnswerDiv>
                    <div
                      style={{
                        color: "black",
                        padding: "40px 20px 20px 20px",
                        fontWeight: 600,
                        display: "flex",
                        flexDirection: "row-reverse",
                      }}
                    >
                      <IButton
                        style={{ borderRadius: "30px", height: "30px", width:"100px", paddingLeft:"0px" }}
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
                        <Image src={BackArrow} alt="" width={10} style={{filter:"invert(1)", marginRight:"10px"}}></Image> Back
                      </IButton>
                    </div>
                  </div>
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
  font-size: 2.5rem;
  color: white;
  font-weight: 800;

  @media (max-width: 600px) {
    & {
      font-size: 1.9em;
    }
  }
`;

// const QuestionDiv = styled.div<{ $animation: string }>`
//   color: black;
//   margin-top: 30px;
//   font-weight: 600;
//   padding: 0 20px;
//   transition: all 0.7s;

//   ${({ $animation }) =>
//     $animation === "fadeIn"
//       ? `
//     opacity: 1;
//     transform: translate(0px, 0px);
//   `
//       : $animation === "fadeOut"
//       ? `
//     opacity: 0;
//     transform: translate(50px, 0px);
//   `
//       : `
//     opacity: 1;
//   `}
// `;

// const AnswerDiv = styled.div<{ $animation: string }>`
//   color: black;
//   margin-top: 30px;
//   font-weight: 600;
//   padding: 0 20px;
//   transition: all 0.7s;

//   ${({ $animation }) =>
//     $animation === "fadeIn"
//       ? `
//   opacity: 0;
//   transform: translate(50px, 0px);
//   `
//       : $animation === "fadeOut"
//       ? `
//   opacity: 1;
//   transform: translate(0px, 0px);

//   `
//       : `
//     opacity: 0;
//   `}
// `;
