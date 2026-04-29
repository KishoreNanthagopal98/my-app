import { Fragment } from 'react';
import styled from 'styled-components';

const AwardSectionContainer = styled.section`
  background: #1F1F1D;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const AwardTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;

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
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 50px;
  }
`;

const AwardSectionBg = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 20px;
  align-items: center;
  padding: 40px 0;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const CardDiv = styled.div`
  background: rgba(139, 92, 246, 0.1);
  border: 2px solid #8b5cf6;
  border-radius: 15px;
  padding: 25px;
  max-width: 350px;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
    background: rgba(139, 92, 246, 0.15);
  }

  @media (max-width: 767.98px) {
    padding: 20px;
  }
`;

const AboutData = styled.div`
  text-align: center;
`;

const AboutDataText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;

  @media (max-width: 767.98px) {
    font-size: 16px;
  }
`;

const DateSection = styled.p`
  font-size: 14px;
  color: #a0a0a0;
  margin-bottom: 0;

  @media (max-width: 767.98px) {
    font-size: 12px;
  }
`;

const AwardLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    width: 3px;
    height: 100%;
    background: linear-gradient(to right, #8b5cf6, #7c3aed);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background: #8b5cf6;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  border: 3px solid #1F1F1D;
`;

export default function AwardSection() {
  const awards = [
    {
      title: "Byju's Performer of the quarter",
      date: "Apr - June 2021"
    },
    {
      title: "Byju's Code Ninja of the Quarter",
      date: "July - Sept 2021"
    },
    {
      title: "Byju's Code Ninja of the Quarter",
      date: "Oct - Dec 2021"
    }
  ];

  return (
    <AwardSectionContainer id="awards-section">
      <ContentWrapper>
        <AwardTitle>My <span>Achievements</span></AwardTitle>
        <Subtitle>Recognition and awards throughout my career</Subtitle>
        
        <AwardSectionBg>
          {awards.map((award, index) => (
            <Fragment key={award.title}>
              <Div>
                <CardDiv>
                  <AboutData>
                    <AboutDataText>{award.title}</AboutDataText>
                    <DateSection>{award.date}</DateSection>
                  </AboutData>
                </CardDiv>
              </Div>
              {index < awards.length - 1 && (
                <AwardLine>
                  <Dot />
                </AwardLine>
              )}
            </Fragment>
          ))}
        </AwardSectionBg>
      </ContentWrapper>
    </AwardSectionContainer>
  );
}
