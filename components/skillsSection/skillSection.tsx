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

const SkillsContainer = styled.section`
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
  margin-bottom: 80px;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 50px;
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const CategoryRow = styled.div<{ $delay?: number }>`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  align-items: center;
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$delay || 0}s both;
  padding-bottom: 50px;
  border-bottom: 2px solid rgba(139, 92, 246, 0.2);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  animation: ${float} 3s ease-in-out infinite;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
`;

const CategoryTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 50px;
  background: linear-gradient(145deg, rgba(42, 42, 42, 0.9), rgba(31, 31, 31, 0.9));
  border: 2px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #8b5cf6;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);

    img {
      transform: scale(1.1);
    }

    ${() => SkillIcon} {
      background: linear-gradient(135deg, #7c3aed, #6d28d9);
      box-shadow: 0 8px 25px rgba(139, 92, 246, 0.5);
    }
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    gap: 10px;
  }
`;

const SkillIcon = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  flex-shrink: 0;
  position: relative;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    transition: transform 0.3s ease;
    display: block;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const SkillName = styled.span`
  font-size: 15px;
  color: #e0e0e0;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export default function SkillSection() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", image: "/react.png" },
        { name: "Next.js", image: "/nextjs.png" },
        { name: "TypeScript", image: "/icons8-typescript-48.png" },
        { name: "JavaScript", image: "/icons8-javascript-48.png" },
        { name: "HTML5", image: "/icons8-html-5-48.png" },
        { name: "CSS3", image: "/icons8-css3-48.png" },
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", image: "/icons8-nodejs-48.png" },
        { name: "Express", image: "/expressjs.png" },
        { name: "Java", image: "/icons8-java-48.png" },
      ]
    },
    {
      name: "Database",
      icon: "💾",
      skills: [
        { name: "MongoDB", image: "/icons8-mongodb-96.png" },
        { name: "MySQL", image: "/icons8-mysql-logo-50.png" },
        { name: "PostgreSQL", image: "/postgresql.png" },
      ]
    },
    {
      name: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", image: "/github.png" },
        { name: "GitHub Copilot", image: "/githubcopilot.svg" },
        { name: "Cursor AI", image: "/cursor.svg" },
        { name: "Kafka", image: "/kafka.png" },
        { name: "Hadoop", image: "/icons8-hadoop-distributed-file-system-96.png" },
        { name: "Hive", image: "/icons8-wasp-96.png" },
        { name: "ML", image: "/icons8-machine-learning-64.png" },
        { name: "Datadog", image: "/pngwing.com.png" },
      ]
    }
  ];

  return (
    <SkillsContainer id="skillSection">
      <ContentWrapper>
        <Title>
          My <span>Skills</span>
        </Title>
        <Subtitle>Technologies and tools I work with</Subtitle>

        <CategoriesWrapper>
          {skillCategories.map((category, categoryIndex) => (
            <CategoryRow key={categoryIndex} $delay={0.3 + categoryIndex * 0.1}>
              <CategoryHeader>
                <CategoryIcon>{category.icon}</CategoryIcon>
                <CategoryTitle>{category.name}</CategoryTitle>
              </CategoryHeader>

              <SkillsGrid>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillIcon>
                      <img src={skill.image} alt={skill.name} />
                    </SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsGrid>
            </CategoryRow>
          ))}
        </CategoriesWrapper>
      </ContentWrapper>
    </SkillsContainer>
  );
}
