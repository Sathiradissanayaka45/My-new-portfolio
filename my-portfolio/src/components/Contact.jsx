import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaPhone } from 'react-icons/fa';

// Custom styles
const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: theme.shadows[10],
  borderRadius: '12px',
  // border: `2px solid ${theme.palette.secondary.main}`, // Red border for contrast
  // backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const ContactLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: '12px',
  border: `2px solid ${theme.palette.secondary.main}`, // Red border for contrast
  backgroundColor: theme.palette.background.default,
}));

const ContactRight = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  borderRadius: '12px',
  border: `2px solid ${theme.palette.secondary.main}`, // Red border for contrast
  backgroundColor: theme.palette.background.paper,
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  '& a': {
    color: theme.palette.text.primary,
    fontSize: '24px',
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    border: `1px solid ${theme.palette.secondary.main}`, // Red border
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: theme.spacing(1.5, 3),
  boxShadow: theme.shadows[4],
  border: `2px solid ${theme.palette.secondary.main}`, // Red border
  color: theme.palette.background.paper, // Button text color
  backgroundColor: theme.palette.secondary.main, // Button background color
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    boxShadow: theme.shadows[6],
  },
}));

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', { name, email, message });
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" color="textPrimary">
        Contact Me
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ContactLeft>
            <Typography variant="h6" color="textPrimary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaEnvelope /> sathiradissanayaka45@gmail.com
            </Typography>
            <Typography variant="h6" color="textPrimary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FaPhone /> 0774487666
            </Typography>
            <SocialIcons>
              <IconButton href="https://github.com/Sathiradissanayaka45" target="_blank">
                <FaGithub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/sathira-dissanayaka-973263226/" target="_blank">
                <FaLinkedin />
              </IconButton>
              <IconButton href="https://medium.com/@sathiradissanayaka45" target="_blank">
                <FaMedium />
              </IconButton>
            </SocialIcons>
            <StyledButton
              variant="contained"
              href="images/Sathira Dissanayaka1.pdf"
              download
            >
              Download My CV
            </StyledButton>
          </ContactLeft>
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactRight>
            <ContactPaper>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <StyledTextField
                  label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  fullWidth
                />
                <StyledTextField
                  label="Your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                />
                <StyledTextField
                  label="Your Message"
                  multiline
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  fullWidth
                />
                <StyledButton variant="contained" type="submit">
                  Submit
                </StyledButton>
                {status && <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>{status}</Typography>}
              </Box>
            </ContactPaper>
          </ContactRight>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
