import React from 'react';
import Info from "../components/Home/Info";
import Projects from "../components/Home/Projects";
import styled from "styled-components";

const Home = () => {
    return (
        <Container>
            <Info />
            <Projects />
        </Container>
    )
}

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.2rem;
`;

export default Home;