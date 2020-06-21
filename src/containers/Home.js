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
`;

export default Home;