import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #2b463c;
    color: bisque;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StyledA = styled.a`
    color: bisque;
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p>All Rights Reserved by Aibek Serikbay <StyledA href="#"> Credits</StyledA> &copy;</p>
            </StyledFooter>
        </>
    )
}