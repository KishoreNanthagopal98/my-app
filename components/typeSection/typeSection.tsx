import { useTypewriter, Cursor } from "react-simple-typewriter";
import styled from 'styled-components';

const TypingContainer = styled.div`
  margin-top: 20px;
  color: #8b5cf6;
`;

const CenterBox = styled.div`
  text-align: center;
`;

const Hey = styled.span`
  font-size: 30px;

  @media (max-width: 990px) {
    font-size: 25px;
  }

  @media (max-width: 520px) {
    font-size: 18px;
  }
`;

const Name = styled.span`
  font-size: 30px;

  @media (max-width: 990px) {
    font-size: 25px;
  }

  @media (max-width: 520px) {
    font-size: 18px;
  }
`;

const Destination = styled.span`
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 990px) {
    font-size: 25px;
    font-weight: 800;
  }

  @media (max-width: 520px) {
    font-size: 18px;
    font-weight: 600;
  }
`;

export default function TypeSection() {
  const { text } = useTypewriter({
    words: ["Full Stack Developer", "Senior Software Engineer", "Photographer"],
    loop: 0,
  });

  return (
    <TypingContainer>
      <CenterBox>
        <Hey>Hey There,</Hey>
        <br />
        <Name>I&rsquo;m Kishore N, </Name>
        <Destination>{text}</Destination>
        <Cursor />
      </CenterBox>
    </TypingContainer>
  );
}
