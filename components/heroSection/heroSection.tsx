import styled from 'styled-components';

const HeroContainer = styled.div`
  min-height: 100vh;
  background: #1F1F1D;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 350px 1fr;
    gap: 50px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
`;

const ProfileCard = styled.div`
  background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
  border-radius: 30px;
  padding: 50px 40px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    max-width: 400px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const ProfileImageWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 20px;
  object-fit: cover;
  border: 4px solid #8b5cf6;
  box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const ProfileName = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ProfileTitle = styled.p`
  font-size: 16px;
  color: #a0a0a0;
  line-height: 1.5;
  margin-bottom: 15px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ProfileLocation = styled.p`
  font-size: 15px;
  color: #808080;
  margin-bottom: 30px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
  }

  .github-icon {
    width: 22px;
    height: 22px;
    filter: brightness(0) invert(1);
  }


  &:hover {
    background: #8b5cf6;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
  }

  &:active {
    background: #7c3aed;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
  }
`;

const LetsTalkBtn = styled.button`
  background: #8b5cf6;
  color: #ffffff;
  border: none;
  padding: 15px 50px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: auto;
  margin: 0 auto;

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
`;

const ContentSection = styled.div`
  color: #ffffff;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const MainContent = styled.div`
  max-width: 800px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const MainHeading = styled.h1`
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 30px;
  color: #ffffff;

  @media (max-width: 1200px) {
    font-size: 56px;
  }

  @media (max-width: 992px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  font-size: 18px;
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const StatItem = styled.div`
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-size: 56px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #808080;
  letter-spacing: 1px;
  line-height: 1.4;
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

const PrimaryBtn = styled.button`
  background: #8b5cf6;
  color: #ffffff;
  border: none;
  padding: 18px 45px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0;

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
`;

const SecondaryBtn = styled.button`
  background: transparent;
  color: #ffffff;
  border: none;
  padding: 18px 45px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: #8b5cf6;

    span {
      transform: translateX(5px);
    }
  }

  &:active {
    color: #7c3aed;
  }

  &:focus {
    outline: none;
    color: #8b5cf6;
  }

  span {
    font-size: 20px;
    transition: transform 0.3s ease;
  }
`;

const CompaniesSection = styled.div`
  margin-top: 40px;
`;

const CompaniesText = styled.p`
  font-size: 14px;
  color: #808080;
  margin-bottom: 25px;
`;

const CompanyLogos = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const CompanyLogo = styled.div`
  opacity: 0.6;
  transition: opacity 0.3s ease;

  img {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
  }

  &:hover {
    opacity: 1;
  }
`;

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home-section">
      <HeroContent>
        {/* Left Profile Card */}
        <ProfileCard>
          <ProfileImageWrapper>
            <ProfileImage 
              src="/profileImg-min.png" 
              alt="Kishore N"
            />
          </ProfileImageWrapper>
          <ProfileName>Kishore N</ProfileName>
          <ProfileTitle>Senior Software Engineer</ProfileTitle>
          <ProfileTitle>Uprise.us</ProfileTitle>
          <ProfileLocation>Coimbatore, India</ProfileLocation>
          <br />
          <SocialIcons>
            <SocialIcon href="https://github.com/kishoren-1" target="_blank" rel="noopener noreferrer">
              <img className="github-icon" src="/github.png" alt="GitHub" />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/kishore-n-7a2b3a1a0/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/_.kishore.n._/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" />
            </SocialIcon>
            <SocialIcon href="mailto:kishoren1999@gmail.com">
              <img src="/email.png" alt="Email" />
            </SocialIcon>
          </SocialIcons>
          
          <LetsTalkBtn onClick={() => scrollToSection('contact')}>{"Let's Talk"}</LetsTalkBtn>
        </ProfileCard>

        {/* Right Content Section */}
        <ContentSection>
          <MainContent>
            <MainHeading>
              Senior Software<br />
              <Highlight>Engineer</Highlight>
            </MainHeading>
            
            <Description>
              Passionate about creating intuitive and engaging user experiences.<br />
              Specialize in transforming ideas into beautifully crafted products.
            </Description>

            {/* Stats Section */}
            <StatsContainer>
              <StatItem>
                <StatNumber>+5</StatNumber>
                <StatLabel>YEARS OF<br />WORK EXPERIENCE</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>+30</StatNumber>
                <StatLabel>PROJECTS<br />WORKED ON</StatLabel>
              </StatItem>
            </StatsContainer>

            {/* Action Buttons */}
            <ActionButtons>
              <PrimaryBtn onClick={() => scrollToSection('contact')}>{"Let's Talk"}</PrimaryBtn>
              <SecondaryBtn onClick={() => scrollToSection('awards-section')}>
                My Work
                <span>→</span>
              </SecondaryBtn>
            </ActionButtons>

            {/* Company Logos */}
            {/* <CompaniesSection>
              <CompaniesText>Relied on by companies near, far, and worldwide</CompaniesText>
              <CompanyLogos>
                <CompanyLogo>
                  <img src="/byjus_learningapp_logo.svg" alt="BYJU'S" />
                </CompanyLogo>
                <CompanyLogo>
                  <img src="/cognizant_logo.png" alt="Cognizant" />
                </CompanyLogo>
                <CompanyLogo>
                  <img src="/jdlogosvg.svg" alt="John Deere" />
                </CompanyLogo>
              </CompanyLogos>
            </CompaniesSection> */}
          </MainContent>
        </ContentSection>
      </HeroContent>
    </HeroContainer>
  );
}
