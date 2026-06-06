import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const Contact = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <PersonIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: 'Name',
      value: 'B.Ganesh Goud',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: 'Email',
      value: 'ganeshbairu629@gmail.com',
      link: 'mailto:ganeshbairu629@gmail.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: 'Phone',
      value: '+91 8179276066',
      link: 'tel:+918179276066',
    },
  ];

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
        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  elevation={3}
                  component={info.link ? 'a' : 'div'}
                  href={info.link}
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: theme.shadows[8],
                    },
                    textDecoration: 'none',
                    cursor: info.link ? 'pointer' : 'default',
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
      </Container>
    </Box>
  );
};

export default Contact;
