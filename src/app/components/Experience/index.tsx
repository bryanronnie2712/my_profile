"use client";
import OutlinedTimeline from '../Timeline';
import { BannerText, Div, IContainer } from './styles';

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