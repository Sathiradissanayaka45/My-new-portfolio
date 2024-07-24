import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Code, BrowserUpdated, CodeOff } from '@mui/icons-material'; // Import MUI icons

const ServicesSection = styled('section')(({ theme }) => ({
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

const ServicePaper = styled(Paper)(({ theme }) => ({
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

const ServiceIcon = styled('div')(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const Services = () => {
  return (
    <ServicesSection id="services">
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom color="inherit">
          My Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ServicePaper elevation={3}>
              <ServiceIcon>
                <Code />
              </ServiceIcon>
              <Typography variant="h5" gutterBottom>
                BACKEND Development
              </Typography>
              <Typography>
                Unleash the power of seamless functionality with my specialized backend development services.
                I excel in designing and optimizing server-side architectures,
                ensuring your web applications run smoothly and efficiently, powered by robust data processing.
              </Typography>
            </ServicePaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServicePaper elevation={3}>
              <ServiceIcon>
                <BrowserUpdated />
              </ServiceIcon>
              <Typography variant="h5" gutterBottom>
                FRONTEND Development
              </Typography>
              <Typography>
                Transforming visions into captivating digital experiences is my forte. Through my frontend development services,
                I breathe life into designs, creating visually stunning and user-friendly interfaces that leave a lasting impression on your audience.
              </Typography>
            </ServicePaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServicePaper elevation={3}>
              <ServiceIcon>
                <CodeOff />
              </ServiceIcon>
              <Typography variant="h5" gutterBottom>
                FULL STACK Development
              </Typography>
              <Typography>
                Embark on a comprehensive digital journey with my full stack development expertise.
                I seamlessly blend frontend aesthetics with backend functionality,
                offering end-to-end solutions that not only meet but exceed your expectations, bringing your unique ideas to life.
              </Typography>
            </ServicePaper>
          </Grid>
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
