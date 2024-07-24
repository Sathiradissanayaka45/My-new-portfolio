import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: theme.shadows[10],
  borderRadius: '12px',
  backgroundColor: theme.palette.background.paper,
}));

const Contact = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', { message });
      setStatus('Message sent successfully!');
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center" color="textPrimary">
        Contact
      </Typography>
      <ContactPaper>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Your message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                color: 'text.primary',
                backgroundColor: 'background.default',
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'text.secondary',
              },
            }}
          />
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
          {status && <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>{status}</Typography>}
        </Box>
      </ContactPaper>
    </Container>
  );
};

export default Contact;
