import Header from "./components/Header";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Awards from "./pages/Awards";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Lexend Deca", serif;
    font-weight: 300;
    font-style: normal;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }
`;

const PageWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100vh;
    flex-direction: column;
  }
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <Container>
          <Nav />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </Container>
        <Footer />
      </PageWrapper>
    </>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
