import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  background: rgba(139, 92, 246, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 767.98px) {
    bottom: 20px;
    right: 20px;
    padding: 12px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 767.98px) {
    gap: 12px;
  }
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: transparent;
  padding: 0;
  display: block;
  
  &:hover {
    transform: scale(1.15);
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
  }

  /* Tooltip */
  &:after {
    content: attr(data-label);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translate(-50%, 5px);
    background: #111;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
    z-index: 10;
  }

  &:hover:after {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }

  @media (max-width: 767.98px) {
    width: 35px;
    height: 35px;
  }
`;

const Icon = styled.i`
  color: #ffffff;
  font-size: 20px;

  @media (max-width: 767.98px) {
    font-size: 18px;
  }
`;

export default function menuBar() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div>
        <Nav>
          <Ul>
            <Li onClick={() => handleScroll('downArrow')} role="button" aria-label="About">
                <IconContainer data-label="About">
                  <Icon className="uil uil-user-nurse"></Icon>
                </IconContainer>
              </Li>
            <Li onClick={() => handleScroll('download-pdf')} role="button" aria-label="Download">
                <IconContainer data-label="Download CV">
                  <Icon className="uil uil-books"></Icon>
                </IconContainer>
              </Li>
            <Li onClick={() => handleScroll('journey-section')} role="button" aria-label="Journey">
                <IconContainer data-label="Journey">
                  <Icon className="uil uil-copy-alt"></Icon>
                </IconContainer>
              </Li>
            <Li onClick={() => handleScroll('contact')} role="button" aria-label="Contact">
                <IconContainer data-label="Contact">
                  <Icon className="uil uil-message"></Icon>
                </IconContainer>
              </Li>
          </Ul>
        </Nav>
      </div>
    </>
  );
}
