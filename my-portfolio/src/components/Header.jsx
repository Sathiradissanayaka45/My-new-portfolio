import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  backgroundColor: theme.palette.primary.main,
  transition: '0.3s',
  borderRadius: '0 0 20px 20px',
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  padding: theme.spacing(1.5, 3),
  borderRadius: '20px',
  fontWeight: 600,
  transition: '0.3s',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[6],
  },
}));

const Header = ({ onScrollTo }) => (
  <CustomAppBar position="fixed">
    <Toolbar>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <LogoTypography variant="h6">
          My Portfolio
        </LogoTypography>
        <div>
          <StyledButton color="inherit" onClick={() => onScrollTo('home')}>Home</StyledButton>
          <StyledButton color="inherit" onClick={() => onScrollTo('about')}>About</StyledButton>
          <StyledButton color="inherit" onClick={() => onScrollTo('skills')}>Skills</StyledButton>
          <StyledButton color="inherit" onClick={() => onScrollTo('services')}>My Services</StyledButton>
          <StyledButton color="inherit" onClick={() => onScrollTo('projects')}>Projects</StyledButton>
          <StyledButton color="inherit" onClick={() => onScrollTo('contact')}>Contact</StyledButton>
        </div>
      </Container>
    </Toolbar>
  </CustomAppBar>
);

export default Header;
