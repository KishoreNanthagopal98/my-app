import { useState } from 'react';
import styled from 'styled-components';

const TopNavWrapper = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  animation: slideDown 0.5s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 768px) {
    top: 10px;
  }
`;

const NavContainer = styled.div`
  background: rgba(42, 42, 42, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 12px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 400px;

  @media (max-width: 768px) {
    padding: 10px 15px;
    width: 95%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    width: 95%;
  }
`;

const NavIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 4px;
  }

  @media (max-width: 480px) {
    gap: 2px;
  }
`;

const NavIcon = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? '#8b5cf6' : 'transparent'};
  border: none;
  color: ${props => props.active ? '#ffffff' : '#a0a0a0'};
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 30px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(139, 92, 246, 0.4)' : 'none'};

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background: ${props => props.active ? '#7c3aed' : 'rgba(139, 92, 246, 0.2)'};
    color: ${props => props.active ? '#ffffff' : '#8b5cf6'};
  }

  &:active {
    background: ${props => props.active ? '#6d28d9' : 'rgba(139, 92, 246, 0.3)'};
    color: ${props => props.active ? '#ffffff' : '#8b5cf6'};
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.4);
  }

  @media (max-width: 768px) {
    padding: 10px 12px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px 10px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const SECTION_DOM_IDS: Record<string, string> = {
  home: 'home-section',
  projects: 'awards-section',
  skills: 'skillSection',
  experience: 'journey-section',
  resume: 'download-pdf',
  contact: 'contact',
};

export default function TopNav() {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (sectionKey: keyof typeof SECTION_DOM_IDS) => {
    setActiveTab(sectionKey);
    const element = document.getElementById(SECTION_DOM_IDS[sectionKey]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <TopNavWrapper>
      <NavContainer>
        <NavIcons>
          <NavIcon 
            active={activeTab === 'home'}
            onClick={() => scrollToSection('home')}
            title="Home"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </NavIcon>
          
          <NavIcon 
            active={activeTab === 'projects'}
            onClick={() => scrollToSection('projects')}
            title="Projects"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
          </NavIcon>
          
          <NavIcon 
            active={activeTab === 'skills'}
            onClick={() => scrollToSection('skills')}
            title="Skills"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </NavIcon>
          
          <NavIcon 
            active={activeTab === 'experience'}
            onClick={() => scrollToSection('experience')}
            title="Experience"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </NavIcon>
          
          <NavIcon 
            active={activeTab === 'resume'}
            onClick={() => scrollToSection('resume')}
            title="Resume"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </NavIcon>
          
          <NavIcon 
            active={activeTab === 'contact'}
            onClick={() => scrollToSection('contact')}
            title="Contact"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </NavIcon>
        </NavIcons>
      </NavContainer>
    </TopNavWrapper>
  );
}
