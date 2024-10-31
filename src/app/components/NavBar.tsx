"use client";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useEffect, useState } from "react";
import { runPrompt } from "../utils/gemini";
import Image from "next/image";
import { CloseIcon } from "../assets";
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
      <URLString
        href="https://my-profile-1ubas3rts-bryanronnie2712.vercel.app/"
      >
        my old portfolio{" "}
        <div style={{ height: "1em", width: "1em", display: "inline-block" }}>
          {openInWindowSVG}
        </div>
      </URLString>
    </div>
  );

  //////////////////////////////////////////// TO DO
  // const [resumeMatchDetails, setResumeMatchDetails] = useState("");

  // const matchResumePrompt = async () => {
  //   const llmResponse = await runPrompt("Give a short salutation for the provided country. Take the local time of the capital city into consideration. No explanation needed, give purely the salutation preferably with local language. COUNTRY:" + languageData[0].name.common)
  //   setResumeMatchDetails(llmResponse);
  // }
  ///////////////////////////////////////////
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
          <GeminiButton>
            <GeminiSVG>✨ AI Match</GeminiSVG>
          </GeminiButton>
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
