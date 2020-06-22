import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Chip } from "@material-ui/core";
import {GitHub, Link} from "@material-ui/icons";
import styled from 'styled-components';
import {} from "../../../actions/index";

import BlockType from "../../BlockType";

const url = process.env.REACT_APP_BACKEND_URL || 'localhost';

const Index = (props) => {
    useEffect(() => {
        console.log(props.projects)
    }, [props.projects])

    return (
        <ProjectsContainer id="projects">
            {props.projects.map(project => {
                return (
                    <ProjectWrapper key={project.id}>
                        <Img bgUrl={`${url}${project.main_image.formats.small.url}`} />
                        <h3>{project.name}</h3>
                        <BlockType type={project.description.blocks[0].type} data={project.description.blocks[0].data} />
                        <ChipsContainer>
                            {project.skills.map(skill => {
                                return (
                                    <StyledChip key={skill.id} label={skill.skill_name} variant="outlined" />
                                )
                            })}
                        </ChipsContainer>
                        <LinksContainer>
                            <a className="github-link" href={project.github_link} target="_blank" rel="noopener noreferrer"><GitHub /></a>
                            {project.deployed_link && 
                                <a className="deployed-link" href={project.deployed_link} target="_blank" rel="noopener noreferrer"><Link /></a>
                            }
                        </LinksContainer>
                    </ProjectWrapper>
                )
            })}
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProjectWrapper = styled.div`
    width: 49%;
    
    p {
        margin-bottom: 10px;
    }

    @media (max-width: 780px){
        width: 100%;
        margin-bottom: 2rem;
    }
`;

const Img = styled.div`
    width: 100%;
    padding-bottom: 56%;
    margin-bottom: 10px;
    background-size: cover;
    background-image: url(${props => props.bgUrl});
`;

const ChipsContainer = styled.div`
    margin-bottom: 10px;
`;

const StyledChip = styled(Chip)`
    margin-right: 7px;
    margin-bottom: 5px;
`;

const LinksContainer = styled.div`
    a {
        margin-right: 7px;
    }

    a.github-link {
        svg{
            color: #e2e2e2;
        }

        &:hover {
            svg{
                color: #404040;
            }
        }
    }

    a.deployed-link {
        svg {
            background-color: #e2e2e2;
            border-radius: 24px;
            color: #fff;
            padding: 2px;
            border: none;
        }

        &:hover {
            svg {
                background-color: #404040;
            }
        }
    }

    a:visited {
        color: initial;
    }
`;

const mapStateToProps = ({projects}) => {
    return {
        projects
    }
}

export default connect(mapStateToProps, {})(Index);
