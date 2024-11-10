"use client";
import { Container, Box} from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import { SpringerBook } from '../assets';

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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 40px;

  & > * {
    flex: 1  50%;
    min-width: 50%;
  }
`

const LeftText = styled.div`
  font-size: 30px;
      padding: 80px 50px 80px 70px;
  line-height: 50px;

  @media (max-width: 1200px) {
    & {
      font-size: 30px;
      padding: 80px 50px 80px 70px;
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
`;

const PaperLinkDiv = styled.div`
  font-size: 20px; 
  line-height:30px;
  margin-top:20px;

  @media (max-width: 1200px) {
    & {
      font-size: 20px;
    }
  }

  @media (max-width: 800px) {
    & {
      font-size: 16px;
    }
  }
`;


export default function Publications() {
  return (
    <IContainer>
      <BannerText>Publication</BannerText>
      <Div>
        <LeftText>Published a conference paper on the topic <b>&quot;Exploring the Role of Entropy in Music Classification&quot;</b> as a part of Springer CCIS series. <PaperLinkDiv>Paper Link: <a style={{ textDecoration: "underline", color:"blue", cursor:"pointer"}} onClick={(e) => window.open("https://link.springer.com/chapter/10.1007/978-3-031-58495-4_24")}>Click Here</a></PaperLinkDiv> </LeftText>
        <Image src={SpringerBook} onClick={(e) => window.open("https://link.springer.com/chapter/10.1007/978-3-031-58495-4_24")} alt='Springer Book' style={{objectFit:"contain", minWidth: "260px", maxWidth:'330px', height: "auto",cursor:"pointer"}}/>
      </Div>
    </IContainer>
  );
}