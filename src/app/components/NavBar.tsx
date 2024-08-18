"use client";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useState } from "react";


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

const GeminiSVG = styled.div`

`;

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

export default function NavBar() {

  const [state, setState] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: true,
    Transition: SlideTransition,
  });

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
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
          <GeminiButton>
            <GeminiSVG>✨ AI Match</GeminiSVG>
          </GeminiButton>
          <IButton
            onClick={(e) => {
              window.open(
                "https://docs.google.com/document/d/1bLGow8idfwPsCxWOB-Lc-dZcjdHdEHzqMfZ5b1Eb1uw/edit?usp=sharing"
              );
            }}
            variant="contained"
            color="inherit"
          >
            My CV/Resumé
          </IButton>
        </Toolbar>
      </CustomNav>

      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={Message}
        key={state.Transition.name}
        autoHideDuration={3200}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          top: '200px',  

          '& .MuiSnackbar-anchorOriginTopCenter': {
            top: '200px',

          },
          '& .MuiPaper-root': {
            background: 'linear-gradient(#000000c7, #272727a6)',
            backdropFilter: 'saturate(65%) blur(5px)',
          },
        }}
      />

    </Box>
  );
}

const Message = <><h2 style={{textAlign: 'center'}}>Bienvenue!</h2><div>My new smart webpage with AI Resume Match feature is currently in development. The subsections are not complete. However, the resume is up to date.</div></>