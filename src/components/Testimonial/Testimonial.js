import React, { useState, useEffect } from 'react';
import {
  Avatar, Box, Typography, Rating, Link,
  Modal, IconButton, AppBar, Toolbar,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';
import testimonialsData from '../../components/Data/TestimonialData.json';

function TestimonialCard({ testimonial }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!testimonial) {
    return <div>Loading testimonial...</div>;
  }

  return (
    <>
      <Box sx={{ 
        mb: 4,
        p: 3,
        backgroundColor: '#005EB8',
        borderRadius: 2
      }}>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          {/* Profile Info: Picture, Name, and Job Title */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Avatar 
              alt={testimonial.name} 
              src={testimonial.avatar}
              sx={{ width: 64, height: 64, mr: 2 }} 
            />
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Typography variant="h6" sx={{ mr: 1, fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>
                  {testimonial.name}
                </Typography>
                <Link
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer" 
                  color="inherit"
                >
                  <LinkedInIcon sx={{ color: 'white', fontSize: 30 }} />
                </Link>
              </Box>
              <Typography variant="body2" sx={{ fontSize: '1rem', color: 'white' }}>
                {testimonial.position}, {testimonial.company}
              </Typography>
            </Box>
          </Box>
  
          {/* 5-Star Rating */}
          <Rating 
            name="read-only" 
            value={testimonial.rating} 
            readOnly 
            sx={{ color: '#ffc107', mt: 0.5 }} 
            size="small"
          />
        </Box>
  
        {/* Description */}
        <Typography variant="body1" sx={{ 
          // fontStyle: 'italic', 
          lineHeight: 1.6,
          color: 'white',
          fontSize: '1.3rem',
          mb: 2
        }}>
          {testimonial.summary}
        </Typography>
        
        {/* Check original link */}
        <Box sx={{ textAlign: 'right' }}>
          <Link
            component="button"
            variant="body2"
            onClick={handleOpen}
            sx={{ 
              color: 'white',
              textDecoration: 'underline',
              fontWeight: 'medium',
              fontSize: '1rem',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Check the original
          </Link>
        </Box>
      </Box>

      {/* Modal with full testimonial */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="testimonial-modal-title"
        aria-describedby="testimonial-modal-description"
        sx={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box sx={{
          width: '100%',
          maxWidth: 800,
          maxHeight: '90vh',
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar variant="dense">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                Testimonial Letter
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          
          <Box sx={{ 
            p: 4, 
            overflow: 'auto',
            lineHeight: 1.7
          }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
              {testimonial.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'black'}}>
              {testimonial.position}, {testimonial.company}
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mt: 3, color: 'black', fontSize: '1.05rem' }}>
              {testimonial.fullText.greeting}
            </Typography>
            
            {testimonial.fullText.paragraphs.map((paragraph, index) => (
              <Typography key={index} variant="body1" paragraph sx={{ color: 'black', fontSize: '1.05rem' }}>
                {paragraph}
              </Typography>
            ))}
            
            <Typography variant="body1" paragraph sx={{ mt: 4, color: 'black', fontSize: '1.05rem' }}>
              {testimonial.fullText.closing}
            </Typography>
            
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black', fontSize: '1.05rem' }}>
              {testimonial.fullText.signature}
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              {testimonial.fullText.signatureTitle}
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              {testimonial.fullText.signatureCompany}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (testimonialsData && testimonialsData.testimonials) {
        setTestimonials(testimonialsData.testimonials);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error loading testimonials:", error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading testimonials...</div>;
  }

  return (
    <Box sx={{ width: '100%' }}>
      {testimonials.map((testimonial) => (
        <Box key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </Box>
      ))}
    </Box>
  );
}

export default Testimonial;
