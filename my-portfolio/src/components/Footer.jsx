import React from 'react';
import { Container, Typography, Box, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaPhone } from 'react-icons/fa';

// Custom styles for the footer
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#d32f2f', // Red background for footer
  color: '#ffffff', // White text color for contrast
  padding: theme.spacing(2, 0), // Smaller padding for a compact look
  borderTop: `2px solid ${theme.palette.common.white}`, // White border for contrast
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const FooterSocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  '& a': {
    color: '#ffffff',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'color 0.3s, transform 0.3s',
    '&:hover': {
      color: theme.palette.common.black,
      transform: 'scale(1.1)', // Slightly enlarge icons on hover
    },
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent maxWidth="lg">
        <FooterSocialIcons>
          <IconButton href="https://github.com/Sathiradissanayaka45" target="_blank">
            <FaGithub />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/sathira-dissanayaka-973263226/" target="_blank">
            <FaLinkedin />
          </IconButton>
          <IconButton href="https://medium.com/@sathiradissanayaka45" target="_blank">
            <FaMedium />
          </IconButton>
          <IconButton href="mailto:sathiradissanayaka45@gmail.com">
            <FaEnvelope />
          </IconButton>
          <IconButton href="tel:0774487666">
            <FaPhone />
          </IconButton>
        </FooterSocialIcons>
        <Divider sx={{ width: '100%', mt: 1, mb: 1, bgcolor: 'divider' }} />
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Sathira Dissanayaka. All rights reserved.
        </Typography>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
