import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled section with a dark background and padding
const AboutSection = styled('section')(({ theme }) => ({
  backgroundColor: '#111',
  color: '#eee',
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 4px 8px ${theme.palette.grey[700]}`,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 2),
  },
}));

// Styled card for content with shadow and border
const AboutCard = styled(Card)(({ theme }) => ({
  maxWidth: '600px',
  margin: 'auto',
  backgroundColor: '#1e1e1e',
  color: '#eee',
  borderRadius: '12px',
  boxShadow: theme.shadows[10],
  padding: theme.spacing(4),
  textAlign: 'left',
}));

// Enhanced typography for section headings and text
const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontSize: '2.5rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const SectionText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  lineHeight: 1.6,
  '& .emoji': {
    fontSize: '1.8rem',
  },
}));

const About = () => (
  <AboutSection>
    <Container maxWidth="md">
      <SectionTitle variant="h3" gutterBottom>
        About Me
      </SectionTitle>
      <AboutCard>
        <CardContent>
          <SectionText paragraph>
            <span className="emoji">💻</span> As a software engineering undergraduate, I have developed a strong foundation in technologies like Java, React.js, and Node.js through various projects. My tech journey started with curiosity and has grown into a solid skill set in development and problem-solving.
          </SectionText>
          <SectionText paragraph>
            <span className="emoji">🤝</span> I excel in collaborative environments, leveraging teamwork to achieve goals. My skills also include software testing and debugging, with a passion for continuous learning and contributing to the field of software engineering.
          </SectionText>
        </CardContent>
      </AboutCard>
    </Container>
  </AboutSection>
);

export default About;
