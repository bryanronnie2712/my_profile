'use client';

import './globals.css'

import Image from 'next/image';
import javaLogo from '../images/java-logo-1.png';
import reactReduxLogo from '../images/react-redux-logo.jpg';
import reactLogo from '../images/react-logo.png';

import postgresLogo from '../images/postgresql_logo.png';
import fastapiLogo from '../images/fastapi-logo.png';
import nodejsLogo from '../images/nodejsLogo.jpg';
import graphqlLogo from '../images/graphql-logo.png';
import nextjsLogo from '../images/nextjsLogo.png';
import springBootLogo from  '../images/spring-boot-logo.png'
import gcpLogo from '../images/gcp-logo.png'
import mongodbLogo from '../images/mongodb-logo.png'
import muiLogo from '../images/material-ui-logo.jpg'
import d3Logo from '../images/d3Logo.png'
import ExpressJSLogo from '../images/ExpressJSLogo.png'
import LinkedInLogo from '../images/logo-linkedin-icon.png'
import XingLogo from '../images/xing-logo.png'
import PhoneLogo from '../images/phone-icon.png'
import Flow from '../images/flowdiagramanim.png';

// import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

// import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
import styled, { keyframes, css } from 'styled-components';


// Define the animation keyframes
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component with animation
const AnimatedText = styled.span`
  ${({ animate }) =>
    animate &&
    css`
      animation: ${fadeInAnimation} 1s ease-in-out;
    `};
`;





const Star = styled.div`
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 2px;
    background: white`;

const NavBar = styled.div`
height: 50px;
border-bottom: 2px solid #50505066;
position: sticky;
top: 0px;
background-color: #000000ab;
z-index: 1000;
backdrop-filter: saturate(110%) blur(5px);
`;

const CVDownloadButton = styled.button`
  float: right;
  padding: 5px 10px;
  margin: 11px 15px;
  cursor: pointer;
  background-color: #007AFF;
  color: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  width:125px;
`;

const LeftNavText = styled.h2`
  float:left;
  margin: 11px 15px;
  font-weight: 500;
  color: #ffffff;
`;

const Banner = styled.div`
  height:450px;
  background-size: cover;
  background-repeat: no-repeat; 
`;

const BannerText = styled.div`
  display:inline-block;
  margin:200px 10%;
  font-size:45px;
  font-family: 'Roboto-Regular';
  font-weight: 300;
  background: linear-gradient(360deg, black,black, transparent);
  filter: contrast(0.5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Page = styled.div`
  background: ${props => props.dark ? "black" : "white"};
  color: ${props => props.dark ? '#ccc' : "black"};
  padding: 50px 20px;
`;



const Title = styled.h1`
background: ${props => props.dark ? "linear-gradient(275deg,#757575,#e3e3e3, #676666)" : "none"};
-webkit-background-clip: ${props => props.dark ?   "text" : "none"};
-webkit-text-fill-color: ${props => props.dark ? "transparent": "none"};

  margin-bottom: 25px;
  text-align: center;
  color: black;
  font-weight: 300;
  font-size: 39px;
`;


const SiteLanguage = styled.div`
  float: left;
  margin: 5px 15px;
  color:#aaa
`;

const SubHeading = styled.span`
  margin: 20px;
  font-size:30px;
  font-weight: 300;
`;

const ProjectCard = styled.div`
  width:350px; 
  aspect-ratio: 3 / 4;
  border-width: 4px;
  border-style: solid;
  border-radius:10px;
  background: url(${props => 'images/' + props.background});
  background-size: 331px 372px;
  background-repeat: no-repeat;
  box-shadow: 4px 6px 3px ${props => props.dark? 'black' : 'white'};
  margin-bottom: 25px;
  cursor: pointer;
`;

const ProjectTitle = styled.div`
  text-align: center;
  font-size: 1.9rem;
  /* margin: 118% 0 0 0; */
  position: relative;
  top: 85%;
`;




const moveBackground = keyframes`
  0% {
    background-position: 15% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
`;

const moveStripes = keyframes`
  0% {
    transform: translateY(700%);
  }
  100% {
    transform: translateY(0%);
  }
`;



const StripesContainer = styled.div`

// width: 509px;
// height: 800px;

animation: ${moveBackground} 10s linear infinite;
background:url("https://images1.pixlis.com/background-image-stripes-and-lines-seamless-tileable-232prb.png");
background-size: 68px 56px;
  `;


const AlternatingStripes = () => {
  return (
    <div style={{"display":"flex","justifyContent":"center","minWidth":"200px","height":"500px"}}>
    <StripesContainer>
      <Image height={500} src={Flow} alt='gcpLogo'/>
    </StripesContainer>
    </div>
  );
};















export default function Home() {
  const [siteLanguage, setSiteLanguage] = useState('en');
  const [siteText, setSiteText] = useState({ language: '', bannerTitle: '', banner: "",resumeButton:'', subPageTitles: ["", "", "", "", "", ""], contactText:["",""] })

  const [flowView,setFlowView] = useState(true) 



  useEffect(() => {
    

    setTimeout(() => {
      if (siteLanguage == 'de') {
        setSiteText({ language: 'Deutsch', bannerTitle: 'Mein Portfolio',resumeButton:'Mein Lebenslauf', banner: "Hallo! Ich heiße Bryan", subPageTitles: ["Meine Tech-Stacks", "Mein Portfolio", "College-Projekte",'Professionell',"Freizeit","Kontaktieren Sie mich"], contactText:["Was ist Ihre größte Herausforderung, bei der ich Ihnen helfen kann? Schreiben Sie mir eine E-Mail an "," oder erreichen Sie mich unter:"] })
      }
      else if (siteLanguage == 'en') {
        setSiteText({ language: 'English', bannerTitle: 'My Portfolio',resumeButton:'My CV/Resume', banner: "Hello! My name is Bryan", subPageTitles: ["My Tech Stacks", "My Portfolio", "College Projects",'Professional',"Leisure","Contact Me"], contactText:["What is your greatest challenge that I can help you with? Drop me a mail at ", " or reach me at:"]  })
      }
    }, 0);
    // console.log(siteLanguage)
  }, [siteLanguage]);

  

  return (
    <main>
      <NavBar>

      <Transition in={siteText.language} key={siteText.language} timeout={1000}>
        {(state) => (
          <AnimatedText animate={state === 'entered'}>
            <LeftNavText>{siteText.bannerTitle}</LeftNavText>
          </AnimatedText>
        )}
      </Transition>
        
        

        <CVDownloadButton onClick={(e) => { window.open("https://docs.google.com/document/d/18KSUuTmtX56bwSar2Iv9vFYwiWKyB1m2Ziz3HkW5mQE/edit?usp=sharing"); }}>{siteText.resumeButton}</CVDownloadButton>

        <div className="toggleWrapper" style={{ float: 'right', margin: '10px 15px' }}>
          <SiteLanguage>{siteText.language}</SiteLanguage>
          <input type="checkbox" name="toggle1" className="mobileToggle" id="toggle1" onChange={(e) => setSiteLanguage(siteLanguage == 'en' ? 'de' : 'en')} />
          <label  htmlFor="toggle1"></label>
        </div>

      </NavBar>
      

      <Banner className='banner'>
      <div class="wave"></div>

      <Transition in={siteText.language} key={siteText.language} timeout={1000}>
        {(state) => (
          <AnimatedText animate={state === 'entered'}>
            <BannerText >{siteText.banner}</BannerText>
          </AnimatedText>
        )}
      </Transition>


      </Banner>

      <Page><Title>
      <Transition in={siteText.language} key={siteText.language} timeout={1000}>
        {(state) => (
          <AnimatedText animate={state === 'entered'}>{siteText.subPageTitles[0]}</AnimatedText>
          )}
      </Transition></Title>
        



        
          <SubHeading>
            <Transition in={siteText.language} key={siteText.language} timeout={1000}>
            {(state) => (
              <AnimatedText style={{ border:'1px solid', borderRadius:'35px',padding:'0 15px',   position: 'relative',background: 'white',top: '18px', top: '27px',fontSize:' 25px',margin: '70px'}} animate={state === 'entered'}>{siteText.subPageTitles[3]} </AnimatedText>
              )}
            </Transition>
          </SubHeading>

          {/* <input type="checkbox" name="toggle1" className="mobileToggle" id="toggle1" onChange={(e) => setFlowView(!flowView)} />
          <label  htmlFor="toggle1"></label> */}

        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', flexWrap: 'wrap', flexDirection:'row', justifyContent:'center', border: '1px solid black',borderRadius: '10px', padding: '3%'}}>
          {/* {flowView? <> */}
          <Image style={{animation: "fadeInAnimation 1s ease-in-out"}} height={120} src={reactReduxLogo} alt='React+Redux'/>
          <Image style={{margin: '12px 4px 10px 4px'}} height={93} src={muiLogo} alt='muiLogo'/>
          <Image style={{margin: '35px 12px 20px 12px'}} height={39} src={d3Logo} alt='d3Logo'/>
          <Image style={{margin: '18px'}} height={85} src={springBootLogo} alt='springBootLogo'/>
          <Image style={{margin: '4px 15px'}} height={110} src={nodejsLogo} alt='nodejsLogo'/>
          <Image style={{margin: '15px 20px'}} height={90} src={graphqlLogo} alt='graphqlLogo'/>
          <Image style={{margin: '-4px 4px'}} height={130} src={postgresLogo} alt='postgresLogo'/>
          <Image style={{margin: '0px 4px'}} height={130} src={gcpLogo} alt='gcpLogo'/>
{/* </> */}
          {/* : <AlternatingStripes/>} */}
        </div>
        </div>

        

          <SubHeading>
            <Transition in={siteText.language} key={siteText.language} timeout={1000}>
            {(state) => (
              <AnimatedText style={{    position: 'relative',background: 'white',top: '18px', top: '27px',fontSize:' 25px',margin: '70px'}} animate={state === 'entered'}>{siteText.subPageTitles[4]} </AnimatedText>
              )}
            </Transition>
          </SubHeading>

        <div style={{display:'flex', flexWrap: 'wrap', flexDirection:'row', justifyContent:'center',margin: '10px 40px', border: '1px solid black',borderRadius: '10px', padding: '3%'}}>
          <Image style={{margin: '13px 15px'}} height={85} src={nextjsLogo}/>
          <Image style={{margin: '14px 15px'}} height={80} src={reactLogo}/>
          <Image style={{margin: '35px 14px 40px 19px'}} height={40} src={ExpressJSLogo} alt='ExpressJSLogo'/>
          <Image style={{margin: '4px 15px'}} height={100} src={nodejsLogo}/>
          <Image style={{margin: '35px 10px'}} height={45} src={fastapiLogo}/>
          <Image style={{margin: '40px 0 40px 10px'}} height={33} src={mongodbLogo}/>
        </div>
      </Page>

      <Page dark>
        <Transition in={siteText.language} key={siteText.language} timeout={1000}>
          {(state) => (
            <AnimatedText animate={state === 'entered'}>
              <Title dark>{siteText.subPageTitles[1]}</Title>
            </AnimatedText>
          )}
        </Transition>

        <div style={{display:'flex', padding:'5%', flexWrap: 'wrap', flexDirection:'row', justifyContent:'center',gap: '5%'}}>
            <ProjectCard onClick={(e) =>  window.open("https://bryanronnie2712.github.io/brymeet-page/index.html")} style={{backgroundSize: '345px 372px'}} background={'video-conf.jpg'}> <ProjectTitle>BryMeet</ProjectTitle></ProjectCard>
            <ProjectCard onClick={(e) =>  window.open("https://github.com/bryanronnie2712/songs-entropy")} style={{backgroundSize: '345px 372px'}} background={'music.jpg'}> <ProjectTitle>Songs Entropy</ProjectTitle></ProjectCard>
            <ProjectCard onClick={(e) =>  window.open("https://bryanronnie2712.github.io/Covid19Tracker/index.html")} style={{backgroundSize: '611px 372px',backgroundPositionX: '-118px'}} background={'covid.png'}> <ProjectTitle>Covid-19 Tracker</ProjectTitle></ProjectCard>
        </div>
      </Page>

      <Page>
        <Transition in={siteText.language} key={siteText.language} timeout={1000}>
          {(state) => (
            <AnimatedText animate={state === 'entered'}>
              <Title>{siteText.subPageTitles[2]}</Title>
            </AnimatedText>
          )}
        </Transition>
      
        <div style={{display:'flex', padding:'5%', flexWrap: 'wrap', flexDirection:'row', justifyContent:'center',gap: '5%'}}>
            <ProjectCard dark onClick={(e) =>  window.open("https://bryanronnie2712.github.io/HTML/MyFirstWebPage.html")} style={{backgroundSize: '363px',backgroundPositionX: '-20px'}} background={'joynsteakslogo.png'}> <ProjectTitle>My First Web Project</ProjectTitle></ProjectCard>
            <ProjectCard dark onClick={(e) =>  window.open("https://instagram-clone-4d25d.web.app/")} style={{backgroundSize: '320px 320px '}} background={'insta.jpg'}> <ProjectTitle>Instagram Clone</ProjectTitle></ProjectCard>
            <ProjectCard  dark onClick={(e) =>  window.open("https://bryanronnie2712.github.io/text-editor/index.html")} background={'textEditor.png'}> <ProjectTitle>Text Editor</ProjectTitle></ProjectCard>
        </div>


      </Page>


      <Page dark style={{background: "rgb(2,0,36)", height:'400px'}}>
        <Title dark>{siteText.subPageTitles[5]}</Title> 

        <div>
          <p style={{textAlign:'center'}}>
          {siteText.contactText[0]}<a style={{textDecoration:'underline'}} href = "mailto: bryanronnie2000@gmail.com">bryanronnie2000@gmail.com</a>{siteText.contactText[1]}
          </p>
            
        <div style={{display:'flex', justifyContent:'center' ,margin:'40px 0 0 0'}}>

        <table>
          <tr style={{height:'30px'}}>
          <td  style={{marginRight: '12px'}}>
          <Image style={{cursor:'pointer',    margin: '-0 0'}} onClick={(e) =>  window.open("https://www.linkedin.com/in/bryan-ronnie")} height={40} src={LinkedInLogo}/>
          </td>
          <td style={{transform: 'translate(0px, -3px)'}}>
          <a style={{fontSize:'13px'}} onClick={(e) =>  window.open("https://www.linkedin.com/in/bryan-ronnie")}>https://www.linkedin.com/in/bryan-ronnie</a>
          </td>
          </tr>

          <tr style={{height:'30px'}}>
        <td >
          <Image style={{cursor:'pointer', margin: '0px 4px'}} onClick={(e) =>  window.open("https://www.xing.com/profile/Bryan_Ronnie")} height={34} src={XingLogo}/>
          </td>
          <td style={{transform: 'translate(0px, -3px)'}}>
          <a style={{fontSize:'13px'}} onClick={(e) =>  window.open("https://www.xing.com/profile/Bryan_Ronnie")}>https://www.xing.com/profile/Bryan_Ronnie</a>
          </td>
          </tr>

          <tr style={{marginBottom:'15px'}}>
          <td >
          <a href="tel:+91 9442242812"><Image style={{cursor:'pointer',margin: '0px 4px'}} height={35} src={PhoneLogo}/></a>
            </td>
            <td >
           <a style={{fontSize:'15px'}} href="tel:+91 9442242812">+91 9442242812</a>
          </td>
          </tr>
        </table>

        </div>

        </div>
      


      </Page>


      {/* <body style="background: black;" class="profile-page sidebar-collapse" data-new-gr-c-s-check-loaded="14.1027.0" data-gr-ext-installed="">
  <nav class="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent" color-on-scroll="100" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="">
          Bryan Ronnie </a>
      </div>
      
           <a style="
            position: absolute;
            right: 10%;
            background: #838a9440;
            border-radius: 5px;
            mix-blend-mode: difference;
            border: 1px solid;
            font-size: xx-large;
            padding: 0 18px;
            box-shadow: rgb(255 255 255 / 0%) 1px 1px, rgb(255 255 255 / 24%) 3px 3px, rgb(255 255 255 / 58%) 4px 4px, inset 5px 4px 5px white;
            " href="https://docs.google.com/document/d/18KSUuTmtX56bwSar2Iv9vFYwiWKyB1m2Ziz3HkW5mQE/edit?usp=sharing" class="btn btn-primary btn-round btn-lg">Resume<div class="ripple-container"></div></a>
  </div></nav>
  <div class="page-header header-filter" data-parallax="true" style="background-image: url(&quot;assets/img/bg5.jpg&quot;); transform: translate3d(0px, 31.2664px, 0px);"></div>
  <div class="main main-raised">
    <div style=" background: linear-gradient(0deg , #dacccc, transparent,#d4d4d4);" class="profile-content">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="profile">
              <div class="avatar">
                <img style="max-width: 250px;    border: 7px solid #51345e;" src="assets/img/faces/bryan_london_eye.png" alt="Circle Image" class="img-raised rounded-circle img-fluid">
              </div>
              <div class="name">
                <h2 class="title">Bryan Ronnie</h2>
                <h6 style="    font-size: large; text-transform:initial; font-weight: 400;">Full Stack Engineer</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="description text-center">
          <p style="color: black;">I love doing projects and learn stuff. So far, I know intermediate web development and developer operations.</p>
        </div>
      
        <div class="tab-content tab-space">
          <div class="tab-pane active text-center gallery" id="studio">
            <h1>My Portfolio</h1>
            


            

            <section class="cards-wrapper">
              <div class="card-grid-space">
                <a class="card" href="brymeet-page/index.html" style="--bg-img: url(https://www.kingsgaterecruitment.co.uk/wp-content/uploads/2020/04/Video-Conferencing-Hub_Header-Image-min.jpg);background-color: #4f983c;background-blend-mode: hard-light;">
                  <div style="margin:-40px -42px -32px -32px;">
                    <h1>BryMeet</h1>
                    <p>Video Conferencing + chat app using ReactJS, ExpressJS hosted on netlify and heroku.</p>
                    
                    <div class="tags">
                      <div style="color: black;background-color: grey;" class="tag">ExpressJS</div>
                      <div style="color: black;background-color: cyan;" class="tag">ReactJS</div>
                      <div style="color: white;background-color: #00c5b4;" class="tag">Netlify</div>
                      <div style="color: white;background-color: #6112ae;" class="tag">Heroku</div>
                      <div style="color: #a3f1f7;background-color: #2e3142;" class="tag">Electron JS</div>
                    </div>
                  </div>
                </a>
              </div>
              
              
              <div class="card-grid-space">
                <a class="card" href="https://github.com/bryanronnie2712/songs-entropy" style="--bg-img: url(https://i1.wp.com/stluciastar.com/wp-content/uploads/2019/06/country-1.jpg);background-color: #4f983c;background-blend-mode: hard-light;">
                  <div style="margin:-40px -42px -32px -32px;">
                    <h1>Songs Entropy</h1>
                    <p>Research project aimed to study the relation between entropy and genres in music.</p>
                    
                    <div class="tags">
                      <div style="color: black;background-color: whitesmoke;" class="tag">FastAPI</div>
                      <div style="color: black;background-color: #01d9fe;" class="tag">ReactJS</div>
                      <div style="color: #009687;background-color: #f5c825;" class="tag">Google Cloud Platform</div>
                      <div style="color: white;background-color: #429f46;" class="tag">SheetsAPI</div>
                    </div>
                  </div>
                </a>
              </div>
              
              <div class="card-grid-space">
                <a class="card" href="Covid19Tracker/index.html" style="--bg-img: url(assets/img/covid.png)">
                  <div>
                    <h1>Covid-19 Tracker</h1>
                    <p>Check Covid-19 cases globally and country wise count</p>
                    
                    <div class="tags">
                      <div class="tag">HTML</div>
                    </div>
                  </div>
                </a>
              </div>
              
              
             
              
              
              
              
              <!-- https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 -->
            </section> */}


















      {/* <div >
             
                <a  href="HTML/MyFirstWebPage.html" style="--bg-img: url(HTML/images/logo.png)">
                  <div>
                    <h1>My First Web Project</h1>
                    <p>My First College Web Project: webpage promo for a local gaming shop</p>
                    
                    <div >
                      <div style="background-color: brown;" >AngularJS</div>
                      <div style="background-color: #e44c25;" >HTML</div>
                      <div style="background-color: #1572b7;" >CSS</div>
                      <div style="background-color: #f19f0b;" >Javascript</div>
                    </div>
                  </div>
                </a>
              </div>
              
              
              <div >
             
                <a  href="text-editor/index.html" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&amp;resize_w=1500&amp;url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
                  <div>
                    <h1>Text Editor</h1>
                    <p>A simple text editor with mostly used features.</p>
                    
                    <div >
                      <div style="background-color: brown;" >AngularJS</div>
                    </div>
                  </div>
                </a>
              </div>
              
             
              <div >
                <a  href="https://instagram-clone-4d25d.web.app/" style="--bg-img: url(https://png.pngtree.com/png-clipart/20190927/ourmid/pngtree-social-media-rose-gold-logos-icon-set-png-image_1753856.jpg)">
                  <div>
                    <h1>Instagram clone</h1>
                    <p>Let's go social this time!</p>
                    
                    <div >
                      <div style="color: black;background-color: cyan;" >ReactJS</div>
                      <div style="background-color: green;" >NodeJS</div>
                      <div style="color: black; background-color: orange;" >Firebase</div>
                    </div>
                  </div>
                </a>
              </div>
              <div >
             
                <a  href="" style="--bg-img: url(https://i0.wp.com/quickfever.com/wp-content/uploads/2016/12/video-player.png)">
                  <div>
                    <h1>Video Player</h1>
                    <p>A stylish video player, with more options to come</p>
                    
                    <div >
                      <div >HTML</div>
                      <div style="    background-color: #f4e260; color: black;" >Javascript</div>
                    </div>
                  </div>
                </a>
              </div> */}


    </main>
  )
}
