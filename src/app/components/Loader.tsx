import styled from "styled-components";
import Image from "next/image";
import { FullLogo } from "../assets";

interface LoaderProps {
  size?: number;
  text?: string;
}

export default function Loader({ size = 200, text }: LoaderProps) {
  return (
    <LoaderContainer>
      <SpinningLogo src={FullLogo} alt="Loading..." width={size} height={size} />
      {text && <LoaderText>{text}</LoaderText>}
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SpinningLogo = styled(Image)`
  animation: rotate 1.5s cubic-bezier(1, 0, 0, 1) infinite;
  filter: drop-shadow(0px 0px 0.3px goldenrod);

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderText = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
