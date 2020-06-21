import React from "react";
import styled from "styled-components";
import { Chip } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { Link } from "react-scroll";

const Info = () => {

  return (
    <Container>
      <AboutSection>
        <h1>Hello, I'm a Full Stack developer.</h1>
        <p>Below are some of my favorite tech stacks I'm most comfortable with. To learn more about me and my previous work, feel free to scroll down.</p>
        <h4>Frontend</h4>
        <SkillsContainer>
          <Chip label="JavaScript" variant="outlined" color="secondary" /> <Chip label="React" variant="outlined" color="secondary" /> <Chip label="Redux" variant="outlined" color="secondary" /> <Chip label="SCSS" variant="outlined" color="secondary" /> <Chip label="JSX" variant="outlined" color="secondary" />
        </SkillsContainer>
        <h4>Back End</h4>
        <SkillsContainer>
          <Chip label="NodeJS" variant="outlined" color="primary" /> <Chip label="Express" variant="outlined" color="primary" /> <Chip label="SQL" variant="outlined" color="primary" />
        </SkillsContainer>
      </AboutSection>
        <Link to="projects" smooth={true} duration={500}><HeroScroll /></Link>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 86px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2.5rem;
`;

const AboutSection = styled.section`
  h1 {
    font-weight: 400;
  }
`;

const HeroScroll = styled(ArrowBackIos)`
  transform: rotate(-90deg);
  font-size: 2rem !important;
  position: absolute;
  bottom: 3rem;
  cursor: pointer;
`;

const SkillsContainer = styled.div`
  margin-bottom: 15px;

  div.MuiChip-root {
    margin-right: 6px;
  }
`;


export default Info;
