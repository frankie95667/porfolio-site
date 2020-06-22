import React from "react";
import styled from "styled-components";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
} from "@material-ui/lab";
import { Work, School } from "@material-ui/icons";
import { Typography, Paper } from "@material-ui/core";
import { connect } from "react-redux";

import BlockType from "../components/BlockType";

const Resume = (props) => {
  return (
    <Container>
      <section>
        <Timeline align="left">
          <SectionHeader>
            <Typography variant="h4" component="h2">
              Work Experience
            </Typography>
          </SectionHeader>
          {props.works.map((work) => {
            return (
              <TimelineItemSection key={work.id}>
                <TimelineOppositeContent
                  style={{ flex: "none" }}
                ></TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <Work />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <StyledPaper elevation={3}>
                    <Typography variant="h6" component="h3">
                      {work.company}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${work.start_date} - ${work.end_date ? work.end_date : "Present"}`}
                    </Typography>
                    <Typography variant="body1">{work.title}</Typography>
                    {work.description.blocks.map((block, idx) => (
                      <BlockType
                        key={idx}
                        type={block.type}
                        data={block.data}
                      />
                    ))}
                  </StyledPaper>
                </TimelineContent>
              </TimelineItemSection>
            );
          })}
          <SectionHeader>
            <Typography variant="h4" component="h2">
              Education
            </Typography>
          </SectionHeader>
          {props.educations.map((education) => (
            <TimelineItemSection key={education.id}>
              <TimelineOppositeContent
                style={{ flex: "none" }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <School />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <StyledPaper elevation={3}>
                  <Typography variant="h6" component="h3">
                    {education.school_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${education.start_date} - ${education.end_date ? education.end_date : "Present"}`}
                  </Typography>
                  <Typography variant="body1">{education.major}</Typography>
                  {education.description.blocks.map((block, idx) => (
                    <BlockType key={idx} type={block.type} data={block.data} />
                  ))}
                </StyledPaper>
              </TimelineContent>
            </TimelineItemSection>
          ))}
        </Timeline>
      </section>
    </Container>
  );
};

const StyledPaper = styled(Paper)`
  padding: 15px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  padding: 15px 0;
  margin-bottom: 30px;
  color: #999;
  box-shadow: 0px 6px 5px -6px #d2d2d2;
`;

const TimelineItemSection = styled(TimelineItem)`
  h3 {
    margin-bottom: 3px;
    line-height: 1.4rem;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 5px;

    &.MuiTypography-body1 {
      font-weight: 600;
    }
  }

  li {
    font-size: .8rem;
  }
`;

const mapStateToProps = ({ resume }) => {
  return {
    educations: resume.education,
    works: resume.work,
  };
};

export default connect(mapStateToProps, {})(Resume);
