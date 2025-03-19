import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #2b463c;
    color: bisque;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Aibek Serikbay</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}
