import styled, { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.8);
  }
`;

const JourneyContainer = styled.section`
  min-height: 100vh;
  background: #1F1F1D;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const Title = styled.h2`
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

const TimelineWrapper = styled.div`
  position: relative;
  padding: 50px 0;

  /* Center line */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #8b5cf6, #7c3aed, #8b5cf6);
    transform: translateX(-50%);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
  }

  @media (max-width: 968px) {
    &::before {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div<{ $index: number }>`
  display: flex;
  justify-content: ${props => props.$index % 2 === 0 ? 'flex-start' : 'flex-end'};
  padding: 30px 0;
  position: relative;
  width: 100%;
  animation: ${props => props.$index % 2 === 0 ? fadeInLeft : fadeInRight} 0.6s ease-out ${props => props.$index * 0.2}s both;

  @media (max-width: 968px) {
    justify-content: flex-end;
    padding-left: 80px;
    animation: ${fadeInRight} 0.6s ease-out ${props => props.$index * 0.2}s both;
  }
`;

const TimelineCard = styled.div<{ $index: number }>`
  width: 45%;
  max-width: 400px;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 30px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  position: relative;
  transition: all 0.4s ease;
  text-align: center;

  /* Arrow pointing to the center line */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.$index % 2 === 0 ? 'right: -20px' : 'left: -20px'};
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${props => props.$index % 2 === 0 
      ? '15px 0 15px 20px' 
      : '15px 20px 15px 0'};
    border-color: ${props => props.$index % 2 === 0 
      ? 'transparent transparent transparent rgba(139, 92, 246, 0.3)' 
      : 'transparent rgba(139, 92, 246, 0.3) transparent transparent'};
  }

  &:hover {
    border-color: #8b5cf6;
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.4);

    &::before {
    border-color: ${props => props.$index % 2 === 0 
        ? 'transparent transparent transparent #8b5cf6' 
        : 'transparent #8b5cf6 transparent transparent'};
    }
  }

  @media (max-width: 968px) {
    width: 100%;

    &::before {
      left: -20px;
      right: auto;
      border-width: 15px 20px 15px 0;
      border-color: transparent rgba(139, 92, 246, 0.3) transparent transparent;
    }

    &:hover::before {
      border-color: transparent #8b5cf6 transparent transparent;
    }
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  border-radius: 50%;
  border: 4px solid #1F1F1D;
  z-index: 2;
  animation: ${pulse} 2s ease-in-out infinite;

  /* Inner glow */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: #ffffff;
    border-radius: 50%;
  }

  @media (max-width: 968px) {
    left: 30px;
  }
`;

const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  min-height: 80px;

  img {
    max-width: 180px;
    max-height: 80px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    min-height: 60px;

    img {
      max-width: 150px;
      max-height: 60px;
    }
  }
`;

const PositionGroup = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const PositionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DateBadge = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 20px;
  font-size: 13px;
  color: #8b5cf6;
  font-weight: 500;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 12px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(139, 92, 246, 0.3), transparent);
  margin: 15px 0;
`;

export default function Journey() {
  const journeyData = [
    {
      logo: "/KCT_logo_Header.svg",
      title: "B.Tech Information Technology",
      date: "2016 - 2020"
    },
    {
      logo: "/cognizant_logo.png",
      title: "Non Functional Testing - Intern",
      date: "2019 - 2020"
    },
    {
      logo: "/byjus_learningapp_logo.svg",
      positions: [
        { title: "Associate Software Engineer - Intern", date: "2019 - 2020" },
        { title: "Associate Software Engineer", date: "2020 - 2021" },
        { title: "Software Engineer", date: "2021 - 2022" },
        { title: "Senior Software Engineer", date: "2022 - 2023" }
      ]
    },
    {
      logo: "/jdlogosvg.svg",
      title: "Senior Software Engineer",
      date: "April 2023 -  Dec 2024"
    },
    {
      logo: "/uprise-logo.png",
      title: "Senior Software Engineer",
      date: "Dec 2024 - Present"
    }
  ];

  return (
    <JourneyContainer id="journey-section">
      <ContentWrapper>
        <Title>
          My <span>Journey</span>
        </Title>
        <Subtitle>My professional path and career milestones</Subtitle>
    <br /><br />
        <TimelineWrapper>
          {journeyData.map((item, index) => (
            <TimelineItem key={index} $index={index}>
              <TimelineDot />
              <TimelineCard $index={index}>
                <CompanyLogo>
                  <img src={item.logo} alt={item.title || "Company logo"} />
                </CompanyLogo>

                {item.positions ? (
                  item.positions.map((position, posIndex) => (
                    <div key={posIndex}>
                      <PositionGroup>
                        <PositionTitle>{position.title}</PositionTitle>
                        <DateBadge>{position.date}</DateBadge>
                      </PositionGroup>
                      {posIndex < item.positions.length - 1 && <Divider />}
                    </div>
                  ))
                ) : (
                  <PositionGroup>
                    <PositionTitle>{item.title}</PositionTitle>
                    <DateBadge>{item.date}</DateBadge>
                  </PositionGroup>
                )}
              </TimelineCard>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </ContentWrapper>
    </JourneyContainer>
  );
}
