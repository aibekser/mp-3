import styled from 'styled-components';
import Skill from '../components/Skill';
import { useEffect } from 'react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #f4f1e9;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100vh;
  }
`;

const Title = styled.h3`
  margin: 2vw 0;
  text-align: center;
  font-size: calc(2px + 2vw);
  color: #2b463c;

  @media screen and (max-width: 900px) {
    text-align: center;
    color: maroon;
  }
`;

const skillsData = [
  { title: "HTML & CSS", percentage: "90%" },
  { title: "JavaScript", percentage: "65%" },
  { title: "VueJS", percentage: "60%" },
  { title: "Java", percentage: "65%" },
  { title: "PL/SQL", percentage: "60%" },
];

function Skills() {
    useEffect(() => {
        document.title = "Skills | Resume";
    }, []);

    return (
        <Main>
        <Title id="main-title">Skills</Title>
        {skillsData.map((skill, index) => (
            <Skill key={index} title={skill.title} percentage={skill.percentage} />
        ))}
        </Main>
    );
}

export default Skills;
