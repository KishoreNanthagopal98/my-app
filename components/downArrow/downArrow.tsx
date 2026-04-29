import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const ArrowBounce = styled.div`
  text-align: center;
  margin: 40px 0;
  position: relative;
`;

const Animated = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-left: 3px solid #8b5cf6;
  border-bottom: 3px solid #8b5cf6;
  transform: rotate(-45deg);
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #7c3aed;
    animation-duration: 1s;
  }

  @media (max-width: 767.98px) {
    width: 30px;
    height: 30px;
    border-width: 2px;
  }
`;

function downArray() {
  return (
    <>
      <ArrowBounce id="downArrow">
        <Animated />
      </ArrowBounce>
    </>
  );
}

export default downArray;
