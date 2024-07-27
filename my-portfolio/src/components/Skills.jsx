import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Tabs, Tab, List, ListItem, ListItemIcon, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import photo from '../assets/DP00141.jpg'; // Ensure correct path to your image
import { Code, Storage, Web, Build, Assessment, BugReport, DesignServices, GitHub as GitHubIcon } from '@mui/icons-material'; // Import additional icons

const SkillsSection = styled('section')(({ theme }) => ({
    position: 'relative',
    backgroundColor: '#111', // Dark background
    color: '#eee', // Light text
    padding: theme.spacing(12, 2), // Responsive padding
    textAlign: 'center',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0), // Larger padding on medium screens and above
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, rgba(255, 0, 150, 0.3), rgba(0, 204, 255, 0.3))',
      zIndex: -1,
      opacity: 0.3,
      animation: 'gradientAnimation 10s ease infinite',
    },
    '@keyframes gradientAnimation': {
      '0%': { backgroundPosition: '0% 0%' },
      '50%': { backgroundPosition: '100% 100%' },
      '100%': { backgroundPosition: '0% 0%' },
    },
}));

const SkillPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background
  color: theme.palette.text.primary,
  transition: 'transform 0.3s, box-shadow 0.3s',
  boxShadow: theme.shadows[20],
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[30],
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const TabContent = styled('div')({
  padding: '1rem',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& ul': {
    listStyleType: 'none',
    padding: 0,
  },
  '& li': {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
});

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <SkillsSection>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom color="inherit">
          Skills
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <SkillPaper elevation={3}>
              <img
                src={photo}
                alt="My Photo"
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  border: '8px solid #fff',
                  boxShadow: '0 0 12px rgba(0, 0, 0, 0.7)',
                  objectFit: 'cover',
                }}
              />
              <Typography variant="h5" gutterBottom mt={2}>
                My Skills
              </Typography>
            </SkillPaper>
          </Grid>
          <Grid item xs={12} md={8}>
            <SkillPaper elevation={3}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                aria-label="skills tabs"
                centered
                textColor="inherit"
                indicatorColor="primary"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab label="Technical Skills" value="technical" />
                <Tab label="Familiar concept" value="Familiar concept" />
                <Tab label="Expertise" value="expertise" />
                <Tab label="Soft Skills" value="softSkills" />
                <Tab label="Education" value="education" />
              </Tabs>
              <TabContent>
                {activeTab === 'technical' && (
                  <div>
                    <Typography variant="h5" gutterBottom>Technical Skills</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Code />
                        </ListItemIcon>
                        <Typography>
                          <strong>Programming Languages:</strong> Java, C, C++, HTML, CSS, JavaScript, Flutter, Kotlin
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Storage />
                        </ListItemIcon>
                        <Typography>
                          <strong>Database Management:</strong> MySQL, Microsoft SQL Server, MongoDB, RoomDB
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Web />
                        </ListItemIcon>
                        <Typography>
                          <strong>Web Development:</strong> React.js, Express.js, Bootstrap, Spring, Node.js, Servlets, Docker
                        </Typography>
                      </ListItem>

                    </List>
                  </div>
                )}
                {activeTab === 'Familiar concept' && (
                  <div>
                    <Typography variant="h5" gutterBottom>Familiar concept</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <List>
                    <ListItem>
                        <ListItemIcon>
                          <Build />
                        </ListItemIcon>
                        <Typography>
                          <strong>Design Pattern and OOP:</strong> Design Patterns in Java, Object-Oriented Programming (OOP) in Java
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Assessment />
                        </ListItemIcon>
                        <Typography>
                          <strong>Data Structures and Algorithms:</strong> Data Structures and Algorithms in Python
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Web />
                        </ListItemIcon>
                        <Typography>
                          <strong>Database Concepts:</strong> Relational and Non-Relational Database Concepts
                        </Typography>
                      </ListItem>
                    </List>
                  </div>
                )}
                {activeTab === 'expertise' && (
                  <div>
                    <Typography variant="h5" gutterBottom>Expertise</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <DesignServices />
                        </ListItemIcon>
                        <Typography>
                          <strong>Testing:</strong> Unit Testing (Jest), Performance Testing (Artillery.io), Integration Testing, Security Testing (OWASP ZAP)
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Web />
                        </ListItemIcon>
                        <Typography>
                          <strong>Tools:</strong> Figma, Postman API, Visual Studio Code, Eclipse
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <GitHubIcon />
                        </ListItemIcon>
                        <Typography>
                          <strong>Version Control:</strong> GitHub, Git
                        </Typography>
                      </ListItem>
                    </List>
                  </div>
                )}
                {activeTab === 'softSkills' && (
                  <div>
                    <Typography variant="h5" gutterBottom>Soft Skills</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Web />
                        </ListItemIcon>
                        <Typography>
                          <strong>Skills:</strong> Problem-solving, Analytical Skills, Leadership, Teamwork, Time Management, Self-Motivation, Professional Working Proficiency in English, Native Proficiency in Sinhala and Tamil
                        </Typography>
                      </ListItem>
                    </List>
                  </div>
                )}
                {activeTab === 'education' && (
                  <div>
                    <Typography variant="h5" gutterBottom>Education</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Web />
                        </ListItemIcon>
                        <Typography>
                          <strong>Sri Lanka Institute of Information Technology (SLIIT):</strong> BSc (Hons) in Information Technology specializing in Software Engineering
                        </Typography>
                      </ListItem>
                    </List>
                  </div>
                )}
              </TabContent>
            </SkillPaper>
          </Grid>
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
