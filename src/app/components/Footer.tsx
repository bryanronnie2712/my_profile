"use client";
import { Container, Box} from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import { LinkedInLogo, PhoneLogo, SpringerBook, XingLogo } from '../assets';



const IContainer = styled(Container)`
  background: black;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 40px !important;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    & {
      // height: 150px;
    }
  }
`;

export default function Footer() {
  return (
    <IContainer>
            {/* <Page dark style={{background: "rgb(2,0,36)", height:'400px'}}> */}
        <h2>Contact Me</h2> 

        <div style={{marginTop: "20px"}}>
          <p style={{textAlign:'center'}}>
          What is your greatest challenge that I can help you with? Drop me a mail at <a style={{textDecoration:'underline'}} href = "mailto: bryanronniej@gmail.com">bryanronniej@gmail.com</a> or reach me at:
          </p>
            
        <div style={{display:'flex', justifyContent:'center' ,margin:'40px 0 0 0'}}>

        <table>
          <tbody>
          <tr style={{height:'30px'}}>
          <td  style={{marginRight: '12px'}}>
          <Image style={{ cursor: 'pointer', margin: '-0 0' }} onClick={(e) => window.open("https://www.linkedin.com/in/bryan-ronnie")} height={40} src={LinkedInLogo} alt={''}/>
          </td>
          <td style={{transform: 'translate(10px, -3px)', textAlign: "left"}}>
          <a style={{fontSize:'13px'}} onClick={(e) =>  window.open("https://www.linkedin.com/in/bryan-ronnie")}>https://www.linkedin.com/in/bryan-ronnie</a>
          </td>
          </tr>

          <tr style={{height:'30px'}}>
        <td >
          <Image style={{ cursor: 'pointer', margin: '0px 4px' }} onClick={(e) => window.open("https://www.xing.com/profile/Bryan_Ronnie")} height={34} src={XingLogo} alt={''}/>
          </td>
          <td style={{transform: 'translate(10px, -3px)', textAlign: "left"}}>
          <a style={{fontSize:'13px'}} onClick={(e) =>  window.open("https://www.xing.com/profile/Bryan_Ronnie")}>https://www.xing.com/profile/Bryan_Ronnie</a>
          </td>
          </tr>

          <tr style={{marginBottom:'15px'}}>
          <td >
          <a href="tel:+91 9442242812"><Image style={{ cursor: 'pointer', margin: '0px 4px' }} height={35} src={PhoneLogo} alt={''}/></a>
            </td>
            <td style={{transform: 'translate(10px, -3px)', textAlign: "left"}}>
           <a style={{fontSize:'15px', textAlign: "left"}} href="tel:+91 9442242812">+91 9442242812</a>
          </td>
          </tr>
          </tbody>
        </table>

        </div>

        </div>
      


      {/* </Page> */}
    </IContainer>
  );
}