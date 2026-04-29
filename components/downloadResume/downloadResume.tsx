import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ResumeContainer = styled.section`
  background: #1F1F1D;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
  animation: ${fadeInUp} 0.6s ease-out;

  span {
    background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    span {
      font-size: 36px;
    }
  }

  @media (max-width: 480px) {
    font-size: 28px;
    span {
      font-size: 28px;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #a0a0a0;
  margin-bottom: 60px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const ButtonWrapper = styled.div`
  animation: ${fadeInUp} 0.6s ease-out 0.4s both;
  margin-top: 40px;
`;

const DownloadButton = styled.button<{ $isDownloading?: boolean }>`
  background: ${props => props.$isDownloading 
    ? 'linear-gradient(135deg, #7c3aed, #6d28d9)' 
    : 'linear-gradient(135deg, #8b5cf6, #7c3aed)'};
  color: #ffffff;
  border: none;
  padding: 20px 60px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  cursor: ${props => props.$isDownloading ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(139, 92, 246, 0.5);

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 16px 40px;
    font-size: 16px;
  }
`;

const DownloadIcon = styled.svg<{ $isDownloading?: boolean }>`
  width: 24px;
  height: 24px;
  ${props => props.$isDownloading && css`
    animation: ${rotate} 1s linear infinite;
  `}
`;

const ProgressBar = styled.div<{ $show?: boolean }>`
  width: 100%;
  height: 4px;
  background: rgba(139, 92, 246, 0.2);
  border-radius: 2px;
  margin-top: 30px;
  overflow: hidden;
  opacity: ${props => props.$show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const ProgressFill = styled.div<{ $progress?: number }>`
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #d946ef);
  width: ${props => props.$progress}%;
  transition: width 0.3s ease;
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
`;

const SuccessMessage = styled.div<{ $show?: boolean }>`
  display: ${props => props.$show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  color: #10b981;
  font-weight: 600;
  animation: ${fadeInUp} 0.4s ease-out;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default function DownloadResume() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadComplete(false);
    setProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            setDownloadComplete(true);
            // Open resume in new tab
            window.open('/Kishore_N_Senior_Software_Engineer_Resume.pdf', '_blank');
            
            // Reset after 3 seconds
            setTimeout(() => {
              setDownloadComplete(false);
              setProgress(0);
            }, 3000);
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  return (
    <ResumeContainer id="download-pdf">
      <ContentWrapper>
        <Title>
          Download My <span>Resume</span>
        </Title>
        <Subtitle>Get a detailed overview of my experience and skills</Subtitle>

        <ButtonWrapper>
          <DownloadButton
            onClick={handleDownload}
            disabled={isDownloading}
            $isDownloading={isDownloading}
          >
            {isDownloading ? (
              <>
                <DownloadIcon
                  $isDownloading={isDownloading}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </DownloadIcon>
                Downloading...
              </>
            ) : (
              <>
                <DownloadIcon
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </DownloadIcon>
                Download Resume
              </>
            )}
          </DownloadButton>

          <ProgressBar $show={isDownloading}>
            <ProgressFill $progress={progress} />
          </ProgressBar>

          <SuccessMessage $show={downloadComplete}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Download Complete!
          </SuccessMessage>
        </ButtonWrapper>
      </ContentWrapper>
    </ResumeContainer>
  );
}
