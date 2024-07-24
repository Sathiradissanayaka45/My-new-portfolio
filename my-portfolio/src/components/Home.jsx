import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import photo from '../assets/DP00141.jpg';
import cv from '../assets/Sathira Dissanayaka CV.pdf';

// Background section styling with animated gradient
const HomeSection = styled('section')(({ theme }) => ({
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

// Card styling with large shadow, border radius, and white border
const HomeCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Stacks items vertically for better responsiveness
  alignItems: 'center',
  boxShadow: theme.shadows[25],
  borderRadius: '24px',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '1200px',
  margin: 'auto',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backgroundColor: '#1e1e1e',
  border: `4px solid #fff`, // White border
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', // Horizontal layout for larger screens
  },
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[30],
  },
}));

// Enhanced Image styling with advanced effects
const HomeImage = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: '150px', // Responsive size
  height: '150px',
  marginBottom: theme.spacing(2),
  border: `8px solid ${theme.palette.primary.main}`,
  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.3)`,
  objectFit: 'cover',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  [theme.breakpoints.up('md')]: {
    width: '250px',
    height: '250px',
    marginRight: theme.spacing(4),
  },
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4)`,
  },
}));

// Content styling with centered text and responsive padding
const HomeContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#1e1e1e',
  color: '#eee',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

// Animated Typewriter Text
const TypewriterText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem', // Responsive font size
  fontWeight: 700,
  color: theme.palette.primary.main,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: `0.15em solid ${theme.palette.primary.main}`,
  animation: `typing 4s steps(40, end) infinite, blink-caret 0.75s step-end infinite`,
  '@keyframes typing': {
    from: { width: 0 },
    to: { width: '100%' },
  },
  '@keyframes blink-caret': {
    from: { borderRightColor: 'transparent' },
    to: { borderRightColor: theme.palette.primary.main },
  },
}));

// Styled Button with hover effect and responsive size
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1, 4),
  borderRadius: '24px',
  background: theme.palette.primary.main,
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem', // Smaller font size on small screens
    padding: theme.spacing(1, 2),
  },
  '&:hover': {
    background: theme.palette.primary.dark,
    transform: 'scale(1.05)',
  },
}));

const Home = () => (
  <HomeSection>
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <HomeCard>
            <Box>
              <HomeImage src={photo} alt="My Photo" />
            </Box>
            <HomeContent>
              <TypewriterText variant="h3" gutterBottom>
                Hello! I'm Sathira Dissanayaka
              </TypewriterText>
              <Typography variant="h6" paragraph>
                I’m a passionate software engineer with a love for building impactful and efficient applications. With experience in a variety of technologies and a strong foundation in software development, I’m always eager to tackle new challenges and contribute to innovative projects.
              </Typography>
              <StyledButton variant="contained" href={cv} download>
                Download My CV
              </StyledButton>
            </HomeContent>
          </HomeCard>
        </Grid>
      </Grid>
    </Container>
  </HomeSection>
);

export default Home;
