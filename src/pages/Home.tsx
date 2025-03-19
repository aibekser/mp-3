import styled from 'styled-components';
import profileImage from '../assets/profile.jpg';
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

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2vh 2vw;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const MainImage = styled.div`
  width: 40%;
  margin: 1vh 1vw;

  @media screen and (max-width: 900px) {
    margin: 1vh auto;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
`;

const MainText = styled.div`
  align-self: center;
  width: 60%;
  margin: 1vh 1vw;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  margin: 0 1vw;
  font-size: calc(1.75px + 1.75vw);

  @media screen and (max-width: 900px) {
    margin: 2% 2%;
    font-size: calc(2px + 3vw);
  }
`;

function Home() {
    useEffect(() => {
        document.title = "Home | Resume";
    }, []);

    return (
        <Main>
        <Title>Home</Title>
        <MainContainer>
            <MainImage>
            <ProfileImage src={profileImage} alt="Aibek Serikbay" />
            </MainImage>
            <MainText>
            <Paragraph>
                My name is Aibek Serikbay, and I am a web developer currently pursuing a Master of Science in Computer Information Systems at Boston University, specializing in Web Application Development. I am passionate about building web applications and continuously improving my skills.
            </Paragraph>
            </MainText>
        </MainContainer>
        <Paragraph>
            I have experience as a trainee in web development and am eager to expand my expertise. I am open to new opportunities where I can apply and enhance my skills. On this website, you’ll find information about my <strong><em><u>education</u></em></strong>, <strong><em><u>experience</u></em></strong>, and <strong><em><u>projects</u></em></strong>. Feel free to explore and connect with me!
        </Paragraph>
        </Main>
    );
};

export default Home;
