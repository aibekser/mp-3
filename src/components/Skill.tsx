import styled from 'styled-components';

const SkillContainer = styled.div`
  margin: 16px;
  font-size: calc(2px + 2vw);
`;

const SkillTitle = styled.h3`
  margin: 0;
`;

const Progress = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 8px;
  height: 20px;

  @media screen and (max-width: 900px) {
    height: 10px;
  }
`;

interface ProgressBarProps {
  width: string;
}

const ProgressBar = styled.div<ProgressBarProps>`
  background: #2b463c;
  height: 100%;
  width: ${(props) => props.width};
`;

interface SkillProps {
  title: string;
  percentage: string;
}

function Skill({ title, percentage }: SkillProps) {
  return (
    <SkillContainer>
      <SkillTitle>{title}</SkillTitle>
      <Progress>
        <ProgressBar width={percentage} />
      </Progress>
    </SkillContainer>
  );
}

export default Skill;
