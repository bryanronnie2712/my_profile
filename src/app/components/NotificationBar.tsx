// "use client";
// import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
// import styled from "styled-components";
// import Snackbar from "@mui/material/Snackbar";
// import Slide, { SlideProps } from "@mui/material/Slide";
// import { TransitionProps } from "@mui/material/transitions";
// import { useEffect, useState } from "react";
// import { runPrompt } from "../utils/gemini";
// import Image from "next/image";
// // import BryanLogo from '../favicon.png';
// const openInWindowSVG = <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#494c4e" d="M12.1.6a.944.944 0 0 0 .2 1.04l1.352 1.353L10.28 6.37a.956.956 0 0 0 1.35 1.35l3.382-3.38 1.352 1.352a.944.944 0 0 0 1.04.2.958.958 0 0 0 .596-.875V.96a.964.964 0 0 0-.96-.96h-4.057a.958.958 0 0 0-.883.6z"></path> <path fill="#494c4e" d="M14 11v5a2.006 2.006 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5a1 1 0 0 1 0 2H2v10h10v-5a1 1 0 0 1 2 0z"></path> </g></svg>

// function SlideTransition(props: SlideProps) {
//   return <Slide {...props} direction="up" />;
// }

// export default function NavBar() {
//   const API_Key = String(process.env.NEXT_PUBLIC_API_KEY_2)

//   const [state, setState] = useState<{
//     open: boolean;
//     Transition: React.ComponentType<
//       TransitionProps & {
//         children: React.ReactElement<any, any>;
//       }
//     >;
//   }>({
//     open: false,
//     Transition: SlideTransition,
//   });

//   const handleClose = () => {
//     setState({
//       ...state,
//       open: false,
//     });
//   };

//   const handleOpen = () => {
//     setState({
//       ...state,
//       open: true,
//     });
//   };

//   const [country, setCountry] = useState('');
//   const [language, setLanguage] = useState('');
//   const [salutation, setSalutation] = useState("");

//   useEffect(() => {
//     const getCountryAndLanguage = async () => {
//       try {
//         // Get the user's IP and country
//         const ipResponse = await fetch('https://ipinfo.io/json?token='+API_Key);
//         const ipData = await ipResponse.json();
//         const userCountry = ipData.country; // Country code, e.g., 'US'
        
        
//         // Get the languages for the country
//         const languageResponse = await fetch(`https://restcountries.com/v3.1/alpha/${userCountry}`);
//         const languageData = await languageResponse.json();
//         const languages = languageData[0].languages; // Object with language codes and names
//         setCountry(languageData[0].name.common);
        
//         // Get the most popular language (this assumes the first language is the most popular)
//         const popularLanguage = String(Object.values(languages)[0]);
//         setLanguage(popularLanguage);

//         const llmResponse = await runPrompt("Give a short salutation for the provided country. Take the local time of the capital city into consideration. No explanation needed, give purely the salutation preferably with local language. COUNTRY:" + languageData[0].name.common)
        
//         if(llmResponse)
//         setSalutation(llmResponse);

        
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

    
//     getCountryAndLanguage().then(() => {
//       handleOpen();
//     });

//   }, []);

//   const Message = () => <><h2 style={{textAlign: 'center'}}>If you&apos;re from {country}, {salutation} 😊</h2><div> My new smart webpage with AI Resume Match feature is currently in development. Please check <a style={{color:'rgb(0 113 227)', textDecoration:'underline'}} href="https://my-profile-1ubas3rts-bryanronnie2712.vercel.app/">my old portfolio <div style={{height:'13px', width:'13px', display: 'inline-block'}}>{openInWindowSVG}</div></a> for the moment. </div></>

//   return (
//       <div id="notificationBanner" style={{position:'fixed', top:0, width:'100%', background:'green', height:'50px'}}><Message/></div>
//   );
// }
