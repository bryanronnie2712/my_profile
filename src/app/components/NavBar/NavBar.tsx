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
import Image from "next/image";
import { runPrompt } from "../../utils/gemini";
import {
  BackArrow,
  CloseIcon,
  FullLogo,
  FullscreenIcon,
  SmallLogo,
  SmallScreenIcon,
} from "../../assets";
import Carousel from "react-multi-carousel";
import DonutChart from "../DonutChart";
import Tooltip from "@mui/material/Tooltip";
import { CustomNav, IButton, NotificationBar, URLString, GeminiButton, GeminiSVG, GeminiButton1, Loader, RowEndFlex, StyledTextarea, TextareaAutosize1, QuestionDiv, AnswerDiv, ModalHeader, CloseIconDiv, FullscreenIconDiv, ModalTitle  } from "./styles";
  import { llm_instructions } from "./llm_instructions";

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
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => setTooltip5sec(false), 8000);

  const [resumeMatchDetails, setResumeMatchDetails] = useState<{
    answer?: string;
    match?: string;
    pros?: string[];
    cons?: string[];
  }>({});

  const matchResumePrompt = async (query: string) => {
    setIsLoading(true);
    
    
    const LLMInput = `${llm_instructions} ${query}
`;
    try {
      const llmResponse = await runPrompt(LLMInput);
      // Extract the JSON-like content within the curly braces
      const extracted = llmResponse.match(/\{.*\}/)?.[0] || "";
      console.log("resumeMatchDetails", extracted);
      setResumeMatchDetails(JSON.parse(extracted));
      setIsLoading(false);
    } catch {
      setResumeMatchDetails({
        answer:
          "We are facing connectivity problem with Gemini. Can you please go back and retry? 😊",
      });
      setIsLoading(false);
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
    setIsLoading(false);
    // matchResumePrompt(JD);

    // Move to the next slide
    carouselRef.current.previous();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomNav position="fixed">
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

                  {isLoading && (
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
