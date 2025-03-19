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

const List = styled.ul`
  list-style: none;
  padding-left: 1vw;
`;

const ListItem = styled.li`
  margin-top: 8px;
  font-size: calc(1px + 1.5vw);
  color: #555;
  line-height: 1.4;
`;

function Awards() {
    useEffect(() => {
        document.title = "Awards | Resume";
    }, []);

    return (
        <Main>
        <Title id="main-title">Awards & Interests</Title>
        <List>
            <ListItem>
            <strong>Altyn Belgi Award</strong> for academic excellence
            </ListItem>
            <ListItem>
            Championships in national science Olympiads
            </ListItem>
            <ListItem>
            <strong>Interests:</strong> Football, Table tennis, Gym, Swimming, Hiking
            </ListItem>
        </List>
        </Main>
    );
};

export default Awards;
