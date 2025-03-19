import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  width: 30%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #688f4e;
  font-size: calc(2px + 2vw);
  text-align: center;
  list-style: none;
  padding-left: 0;

  @media screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledLi = styled.li`
  font-size: calc(3px + 3vw);
  width: 90%;
  background-color: #b1d182;
  padding: 2vh 0;
  margin: 2vh auto;

  @media screen and (max-width: 900px) {
    font-size: calc(2px + 1.5vw);
    padding: 1% 0.5%;
    margin: 1% 0.5%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/education">Education</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/experience">Experience</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/projects">Projects</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/skills">Skills</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/awards">Awards &amp; Interests</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
