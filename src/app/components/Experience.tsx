"use client";
import { Container, Box} from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import { SpringerBook } from '../assets';
import OutlinedTimeline from './Timeline';

const IContainer = styled(Container)`
  width: 100%;
  padding: 40px 10px;
  background: white;
  max-width: 100%;

  @media (max-width: 600px) {
    & {
      // height: 150px;
    }
  }
`;


const BannerText = styled.h1`
  color: black;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px; 

  @media (max-width: 600px) {
    & {
      font-size: 1.9em;
    }
  }
`;

const Div = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // align-items: center;
  // justify-content: center;
  // gap: 30px;
  // padding: 0 40px;

  // & > * {
  //   flex: 1  50%;
  //   min-width: 50%;
  // }


      /* display: flex; */
    flex-wrap: wrap;
    /* align-items: revert; */
    /* justify-content: left; */
    gap: 30px;
    /* padding: 0 40px; */
    // left: -20vw;
    position: relative;
`

const LeftText = styled.div`
  font-size: 40px;
  padding: 130px;
  line-height: 65px;


  @media (max-width: 1200px) {
    & {
      font-size: 30px;
      padding: 80px;
      line-height: 50px;
    }
  }

  @media (max-width: 800px) {
    & {
      font-size: 20px;
      line-height: 35px;
      padding: 0px;
    }
  }

  & > * {
    flex: 1  50%;
    min-width: 50%;
  }
`


export default function Experience() {
  return (
    <IContainer>
      <BannerText>Education & Experience</BannerText>
      <Div>
        <OutlinedTimeline/>
      </Div>
    </IContainer>
  );
}