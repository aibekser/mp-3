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

function Education() {
    useEffect(() => {
        document.title = "Education | Resume";
    }, []);

    return (
        <Main>
        <Title>Educational Background</Title>
        <CardItem>
            <VerticalBar />
            <CardContent>
            <h2>M.S. in Computer Information Systems</h2>
            <h2>
                <ItalicSpan>Boston University, MA.</ItalicSpan>
            </h2>
            <DateText>August 2024 - Present</DateText>
            </CardContent>
        </CardItem>
        <CardItem>
            <VerticalBar />
            <CardContent>
            <h2>B.A. in Information Systems</h2>
            <h2>
                <ItalicSpan>SDU University, Kazakhstan</ItalicSpan>
            </h2>
            <DateText>August 2019 - May 2023</DateText>
            </CardContent>
        </CardItem>
        </Main>
    );
};

export default Education;
