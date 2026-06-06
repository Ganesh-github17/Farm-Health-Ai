import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  useTheme,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: 'Email',
      value: 'ganeshbairu629@gmail.com',
      link: 'mailto:ganeshbairu629@gmail.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: 'Phone',
      value: '8179276066',
      link: 'tel:+918179276066',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: 'Location',
      value: 'Hyderabad 500017',
      link: '#',
    },
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubscribe = () => {
    if (subscribeEmail) {
      setSubscribeMessage('Thank you for subscribing! Check your email for updates.');
      setSubscribeEmail('');
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)',
        minHeight: '100vh',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{
                mb: 6,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.1rem',
              }}
            >
              Get in touch with us for any inquiries or support. We'd love to hear from you!
            </Typography>
          </motion.div>
        </Box>

        {/* Contact Information Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  elevation={3}
                  component="a"
                  href={info.link}
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: theme.shadows[8],
                    },
                    textDecoration: 'none',
                    cursor: 'pointer',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{info.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        mb: 1,
                      }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.primary',
                        fontSize: '1rem',
                        fontWeight: 500,
                      }}
                    >
                      {info.value}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Section */}
        <Box sx={{ mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 6,
                background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              >
                Newsletter
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.05rem',
                }}
              >
                Subscribe to our newsletter for the latest updates and farming tips
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  maxWidth: '500px',
                  mx: 'auto',
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Your email address"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#fff',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubscribe}
                  sx={{
                    px: 4,
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}
                >
                  Subscribe
                </Button>
              </Box>

              {subscribeMessage && (
                <Alert severity="success" sx={{ mt: 2, maxWidth: '500px', mx: 'auto' }}>
                  {subscribeMessage}
                </Alert>
              )}
            </Paper>
          </motion.div>
        </Box>

        {/* Contact Form */}
        <Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card
              elevation={3}
              sx={{
                background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 6 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    mb: 4,
                  }}
                >
                  Send us a Message
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      variant="outlined"
                      multiline
                      rows={5}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '1.05rem',
                        px: 4,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
