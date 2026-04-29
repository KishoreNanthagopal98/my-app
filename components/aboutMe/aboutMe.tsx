import styled, { keyframes } from 'styled-components';

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

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AboutMeContainer = styled.section`
  min-height: 100vh;
  background: #1F1F1D;
  padding: 50px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
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
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 50px;
  margin-top: 50px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const Card = styled.div<{ $delay?: number }>`
  background: linear-gradient(145deg, rgba(42, 42, 42, 0.9), rgba(31, 31, 31, 0.9));
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: all 0.4s ease;
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$delay || 0}s both;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #8b5cf6, #d946ef);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: #8b5cf6;
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 28px;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #b0b0b0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const MainBioCard = styled.div`
  background: linear-gradient(145deg, rgba(42, 42, 42, 0.95), rgba(31, 31, 31, 0.95));
  border-radius: 25px;
  padding: 50px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  animation: ${fadeInUp} 0.6s ease-out 0.8s both;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const BioText = styled.p`
  font-size: 18px;
  color: #e0e0e0;
  line-height: 1.8;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

const HighlightText = styled.span`
  color: #8b5cf6;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  animation: ${fadeInUp} 0.6s ease-out 1s both;
`;

const LetsTalkButton = styled.button`
  background: #8b5cf6;
  color: #ffffff;
  border: none;
  padding: 18px 60px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
  }

  &:active {
    background: #6d28d9;
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
  }

  @media (max-width: 768px) {
    padding: 15px 45px;
    font-size: 16px;
  }
`;

export default function AboutMe() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AboutMeContainer id="aboutMeId">
      <ContentWrapper>
        <SectionTitle>
          About <span>Me</span>
        </SectionTitle>
        <Subtitle>Get to know more about who I am and what I do</Subtitle>
        <br />
        <GridContainer>
          <Card $delay={0.3}>
            <CardIcon>💻</CardIcon>
            <CardTitle>Full Stack Developer</CardTitle>
            <CardDescription>
              Building scalable web applications with modern technologies including React, Next.js, Node.js, and more. Passionate about creating seamless user experiences.
            </CardDescription>
          </Card>

          <Card $delay={0.4}>
            <CardIcon>🚀</CardIcon>
            <CardTitle>Problem Solver</CardTitle>
            <CardDescription>
              Love tackling complex challenges and finding elegant solutions. Continuously learning and adapting to new technologies and best practices.
            </CardDescription>
          </Card>

          <Card $delay={0.5}>
            <CardIcon>📸</CardIcon>
            <CardTitle>Photographer</CardTitle>
            <CardDescription>
              Capturing fleeting moments and transforming them into cherished memories. Finding beauty in the details and freezing time through the lens.
            </CardDescription>
          </Card>

          <Card $delay={0.6}>
            <CardIcon>🌱</CardIcon>
            <CardTitle>Lifelong Learner</CardTitle>
            <CardDescription>
              Always exploring new horizons and expanding my knowledge. Thriving on meeting new people and embracing diverse perspectives.
            </CardDescription>
          </Card>
        </GridContainer>

        <MainBioCard>
          <BioText>
            Greetings! I{"'"}m <HighlightText>Kishore</HighlightText>, a 27-year-old software developer based in{' '}
            <HighlightText>Coimbatore, India</HighlightText>. Currently, I hold the position of{' '}
            <HighlightText>Senior Software Engineer at Uprise.us</HighlightText>, where I contribute to building 
            innovative solutions that make a difference. My journey in tech is driven by a passion for continuous 
            learning, creative problem-solving, and the art of crafting beautiful, functional experiences. 
            Beyond code, I find joy in photography—capturing the intangible beauty of fleeting moments and 
            transforming them into timeless memories.
          </BioText>

          <ButtonContainer>
            <LetsTalkButton onClick={() => scrollToSection('contact')}>
              {"Let's Talk"}
            </LetsTalkButton>
          </ButtonContainer>
        </MainBioCard>
      </ContentWrapper>
    </AboutMeContainer>
  );
}
