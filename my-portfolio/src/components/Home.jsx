import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import photo from '../assets/DP00141.jpg';
import cv from '../assets/Sathira Dissanayaka CV.pdf';

const HomeSection = styled('section')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#111',
  color: '#eee',
  padding: theme.spacing(12, 2),
  textAlign: 'center',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 0),
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

const HomeCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: theme.shadows[25],
  borderRadius: '24px',
  overflow: 'hidden',
  width: '100%',
  maxWidth: '1200px',
  margin: 'auto',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  backgroundColor: '#1e1e1e',
  border: `4px solid #fff`,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[30],
  },
}));

const HomeImage = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: '150px',
  height: '150px',
  marginBottom: theme.spacing(2),
  border: `8px solid ${theme.palette.primary.main}`,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  objectFit: 'cover',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  [theme.breakpoints.up('md')]: {
    width: '250px',
    height: '250px',
    marginRight: theme.spacing(4),
  },
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
  },
}));

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

const TypewriterText = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: `0.15em solid ${theme.palette.primary.main}`,
  animation: 'typing 4s steps(40, end) infinite, blink-caret 0.75s step-end infinite',
  '@keyframes typing': {
    from: { width: 0 },
    to: { width: '100%' },
  },
  '@keyframes blink-caret': {
    from: { borderRightColor: 'transparent' },
    to: { borderRightColor: theme.palette.primary.main },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1, 4),
  borderRadius: '24px',
  background: theme.palette.primary.main,
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
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
            <HomeImage src={photo} alt="Your Name" />
            <HomeContent>
              <Typography variant="h3" component="h1" gutterBottom>
                Sathira Dissanayaka
              </Typography>
              <TypewriterText variant="h5">
                Software Engineer | Full Stack Developer
              </TypewriterText>
              <StyledButton href={cv} download="Sathira_Dissanayaka_CV.pdf">
                Download CV
              </StyledButton>
            </HomeContent>
          </HomeCard>
        </Grid>
      </Grid>
    </Container>
  </HomeSection>
);

export default Home;
