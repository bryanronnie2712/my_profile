'use client';

import Image from 'next/image';
import javaLogo from '../images/java-logo-1.png';
import reactReduxLogo from '../images/react-redux-logo.jpg';
import postgresLogo from '../images/postgresql_logo.png';
import fastapiLogo from '../images/fastapi-logo.png';
import nodejsLogo from '../images/nodejsLogo.jpg';
import graphqlLogo from '../images/graphql-logo.png';
import nextjsLogo from '../images/nextjsLogo.png';

import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


const NavBar = styled.div`
  height:50px;
  background-color:white;
  color:black;
  border-bottom:2px solid #eee;
  // box-shadow: inset -1px 1px 1px black;
`;

const CVDownloadButton = styled.button`
  float: right;
  padding: 5px 10px;
  margin: 11px 15px;
  font-weight: 300px;
  cursor: pointer;
  background-color: #007AFF;
  color: #ffffff;
  border-radius: 4px;
  font-size: 14px;
  border: none;
`;

const LeftNavText = styled.h2`
  float:left;
  margin: 11px 15px;
  font-weight: 600;
  color:#333333;
`;

const Banner = styled.div`
  height:450px;
  background-size: cover;
  background-repeat: no-repeat; 
  background:url("https://images.hdqwalls.com/download/star-sky-5k-fg-1920x1080.jpg");
`;

const BannerText = styled.div`
  display:inline-block;
  margin:200px 10%;
  font-size:50px;
  font-family: 'Inter';
  font-weight: 200;
  font-family: 'Inter';
`;

const Page = styled.div`
  background: ${props => props.dark ? "black" : "white"};
  color: ${props => props.dark ? '#ccc' : "black"};

  padding: 50px 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  font-weight: 300;
  font-size: xxx-large;
`;


const SiteLanguage = styled.div`
  float: left;
  margin: 5px 15px;
  color:#aaa
`;

const SubHeading = styled.h2`
  margin: 20px;
  font-size:40px;
  font-weight: 300;
`;


export default function Home() {
  const [siteLanguage, setSiteLanguage] = useState('en');
  const [siteText, setSiteText] = useState({ language: '', bannerTitle: '', banner: "", subPageTitles: ["", "", "", "", ""] })

  useEffect(() => {
    if (siteLanguage == 'de') {
      setSiteText({ language: 'Deutsch', bannerTitle: 'Mein Portfolio', banner: "Hallo! Ich heiße Bryan", subPageTitles: ["Meine Tech-Stacks", "My Portfolio", "College Projects",'Professionell',"Freizeit"] })
    }
    else if (siteLanguage == 'en') {
      setSiteText({ language: 'English', bannerTitle: 'My Portfolio', banner: "Hello! My name is Bryan", subPageTitles: ["My Tech Stacks", "My Portfolio", "College Projects",'Professional',"Leisure"] })
    }
    // console.log(siteLanguage)
  }, [siteLanguage]);


  return (
    <main className={inter.className}>
      <NavBar>
        <LeftNavText>{siteText.bannerTitle}</LeftNavText>

        <CVDownloadButton onClick={(e) => { window.open("https://docs.google.com/document/d/18KSUuTmtX56bwSar2Iv9vFYwiWKyB1m2Ziz3HkW5mQE/edit?usp=sharing"); }}>My CV/Resume</CVDownloadButton>

        <div className="toggleWrapper" style={{ float: 'right', margin: '10px 15px' }}>
          <SiteLanguage>{siteText.language}</SiteLanguage>
          <input type="checkbox" name="toggle1" className="mobileToggle" id="toggle1" onChange={(e) => setSiteLanguage(siteLanguage == 'en' ? 'de' : 'en')} />
          <label htmlFor="toggle1"></label>
        </div>

      </NavBar>
      

      <Banner>
        <BannerText>{siteText.banner}</BannerText>
      </Banner>

      <Page>
        <Title>{siteText.subPageTitles[0]}</Title>
        
        <SubHeading>{siteText.subPageTitles[3]}</SubHeading>
        {/* <div style={{background:'black',display:'',width:'150px', height:'5px'}}></div> */}
        <Image height={120} src={reactReduxLogo} alt='React+Redux'/>
        <Image style={{margin: '18px'}} height={85} src={javaLogo} alt='Java'/>
        <Image style={{margin: '4px 15px'}} height={110} src={nodejsLogo}/>
        <Image style={{margin: '15px 20px'}} height={90} src={graphqlLogo}/>
        <Image style={{margin: '-4px 4px'}} height={130} src={postgresLogo}/>
        
        <SubHeading>{siteText.subPageTitles[4]}</SubHeading>
        <Image style={{margin: '13px 15px'}} height={85} src={nextjsLogo}/>
        <Image style={{margin: '4px 15px'}} height={100} src={nodejsLogo}/>
        <Image style={{margin: '35px 10px'}} height={45} src={fastapiLogo}/>
      
      </Page>

      <Page dark>
        <Title style={{ color: '#ccc' }}>{siteText.subPageTitles[1]}</Title>
      </Page>

      <Page>
        <Title>{siteText.subPageTitles[2]}</Title>
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
