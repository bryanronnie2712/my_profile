import { Card } from "./types";
import {
  AkilaCastings,
  AkilaCastings1,
  Covid,
  Instagram,
  MusicImage,
  TextEditorImg,
  VideoConferencing,
  Splitz
} from "../../assets";

export const cards: Card[] = [
  {
    title: "Splitz",
    description: "Split instacart expenses with ease",
    image: Splitz,
    background: "repeating-radial-gradient(circle at -10% -10%, #6bf027, #93dc2d 0.5px, #75e506 0.7px, #38d9b3 4px)",
    color: "white",
    tags: [
      { text: "ReactJS", color: "black", bgColor: "cyan" },
      { text: "FastAPI", color: "white", bgColor: "teal" },
      { text: "Vercel", color: "black", bgColor: "grey" },

    ],
    url: "https://splitz-ui.vercel.app/",
  },
  {
    title: "BryMeet",
    description: "Web conferencing with screen-sharing built using webRTC",
    image: VideoConferencing,
    background: "repeating-radial-gradient(circle at -10% -10%, #2b1616, #310045 0.5px, #2b063b 0.7px, #520f67 4px)",
    color: "white",
    tags: [
      { text: "ReactJS", color: "black", bgColor: "cyan" },
      { text: "node.js", color: "white", bgColor: "green" },
      { text: "Render", color: "white", bgColor: "black" },
      { text: "Netlify", color: "teal", bgColor: "white" },
      { text: "Socket.io", color: "black", bgColor: "teal" },
      { text: "WebRTC", color: "black", bgColor: "royalblue" },
    ],
    url: "https://bryanronnie2712.github.io/brymeet-page/index.html",
  },
  {
    title: "Client(AkilaCastings Pvt. Ltd.)",
    description: "Developed & deployed a portfolio website for a foundry",
    image: AkilaCastings1,
    background: "repeating-radial-gradient(circle at -10% -10%, #012eff, #120cff 0.5px, #123aff 0.7px, #3601ff 4px)",
    color: "white",
    tags: [
      { text: "HTML", color: "white", bgColor: "#da4c21" },
      { text: "CSS", color: "white", bgColor: "#1e5da9" },
      { text: "JS", color: "black", bgColor: "#edd61a" },
    ],
    url: "https://akilacastings.com/",
  },
  {
    title: "Songs Entropy",
    description: "Research project - FastAPI",
    color: "black",
    background: "repeating-radial-gradient(ellipse at -10% -10%, #ffdfa4, #ecc963 0.5px, #ffe2ae 0.7px, #ffe595 4px)",
    image: MusicImage,
    tags: [
      { text: "FastAPI", color: "white", bgColor: "teal" },
      { text: "SheetsAPI", color: "white", bgColor: "green" },
      { text: "Tensorflow", color: "black", bgColor: "orange" },
    ],
    url: "https://github.com/bryanronnie2712/songs-entropy",
  },
  {
    title: "Covid Tracker",
    description: "Daily Covid cases and deaths with chrome extension",
    color: "white",
    background: "repeating-radial-gradient(ellipse at -10% -10%, #2b2b2b, #2f2f2f 0.5px, #063f34 0.7px, #341069 4px)",
    image: Covid,
    tags: [
      { text: "HTML", color: "white", bgColor: "#da4c21" },
      { text: "CSS", color: "white", bgColor: "#1e5da9" },
      { text: "JS", color: "black", bgColor: "#edd61a" },
    ],
    url: "https://bryanronnie2712.github.io/Covid19Tracker/index.html",
  },
  {
    title: "Instagram clone",
    color: "black",
    background: "repeating-radial-gradient(ellipse at -10% -10%, #ff7de4, #ec91f7 0.5px, #ff997a 0.7px, #ff7ef9 4px)",
    image: Instagram,
    description: "Let's go social this time!",
    tags: [
      { text: "ReactJS", color: "black", bgColor: "cyan" },
      { text: "node.js", color: "white", bgColor: "green" },
      { text: "Firebase", color: "black", bgColor: "orange" },
    ],
    url: "https://instagram-clone-4d25d.web.app/",
  },
];