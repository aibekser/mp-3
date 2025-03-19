import styled from 'styled-components';
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

const CardItem = styled.div`
  margin: 24px 0 0 24px;
  display: flex;
  align-items: flex-start;
`;

const VerticalBar = styled.div`
  width: 5px;
  height: 100%;
  background-color: #2b463c;
  margin-right: 15px;
`;

const CardContent = styled.div`
  h2 {
    font-size: calc(2px + 2vw);
    font-weight: bold;
    margin: 0;
  }
  ul {
    padding: 0 0 0 10px;
  }
`;

const ItalicSpan = styled.span`
  font-style: italic;
  text-decoration: underline;
`;

const DateText = styled.p`
  font-style: italic;
  margin-top: 5px;
  font-size: calc(1px + 2vw);
`;

const Description = styled.li`
  margin-top: 8px;
  font-size: calc(1px + 1.5vw);
  color: #555;
  line-height: 1.4;
`;

function Experience() {
    useEffect(() => {
        document.title = "Experience | Resume";
    }, []);

    return (
        <Main>
        <Title>Experience</Title>
        <CardItem>
            <VerticalBar />
            <CardContent>
            <h2>Teaching Assistant</h2>
            <h2>
                <ItalicSpan>Suleyman Demirel University</ItalicSpan>
            </h2>
            <DateText>Jan 2023 - May 2023</DateText>
            <ul>
                <Description>
                Served as a teaching assistant for Web Programming course, providing assistance to 105 students.
                </Description>
                <Description>
                Assisted the course instructor in developing and delivering course content, including designing and grading assignments and exams.
                </Description>
            </ul>
            </CardContent>
        </CardItem>
        <CardItem>
            <VerticalBar />
            <CardContent>
            <h2>Front End Developer (Trainee)</h2>
            <h2>
                <ItalicSpan>ABM Co</ItalicSpan>
            </h2>
            <DateText>Jul 2022 - Aug 2022</DateText>
            <ul>
                <Description>
                Built several user interface components and features, using Vue and other front-end technologies.
                </Description>
                <Description>
                Worked with version control systems such as Git, and collaborated with team members to ensure that code was properly documented and committed.
                </Description>
                <Description>
                Conducted thorough testing and debugging of code to ensure that all applications were free of errors and bugs.
                </Description>
            </ul>
            </CardContent>
        </CardItem>
        </Main>
    );
};

export default Experience;
