import React, { useState, useEffect } from 'react';
import {
  Avatar, Box, Typography, Rating, Card, CardContent, Link,
  Modal, IconButton, AppBar, Toolbar,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';
import testimonialsData from '../../components/Data/testimonialData.json';

function TestimonialCard({ testimonial }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Add a check to ensure testimonial data exists
  if (!testimonial) {
    return <div>Loading testimonial...</div>;
  }

  return (
    <>
      <Card sx={{ maxWidth: 1400, margin: 'auto', boxShadow: 3, mb: 4 }}>
        <CardContent sx={{ p: 3 }}>
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
                  <Typography variant="h6" sx={{ mr: 1, fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {testimonial.name}
                  </Typography>
                  <Link
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer" 
                    color="inherit"
                  >
                    <LinkedInIcon sx={{ color: '#0077b5', fontSize: 20 }} />
                  </Link>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
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
            fontStyle: 'italic', 
            lineHeight: 1.6,
            color: 'text.primary',
            fontSize: '0.95rem',
            pt: 1,
            borderTop: '1px solid',
            borderColor: 'divider',
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
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 'medium',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Check the original
            </Link>
          </Box>
        </CardContent>
      </Card>

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
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              {testimonial.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {testimonial.position}, {testimonial.company}
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              {testimonial.fullText.greeting}
            </Typography>
            
            {testimonial.fullText.paragraphs.map((paragraph, index) => (
              <Typography key={index} variant="body1" paragraph>
                {paragraph}
              </Typography>
            ))}
            
            <Typography variant="body1" paragraph sx={{ mt: 4 }}>
              {testimonial.fullText.closing}
            </Typography>
            
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {testimonial.fullText.signature}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {testimonial.fullText.signatureTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
    // Simulate loading data (in case of async loading in the future)
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
    <Box>
      {testimonials.map((testimonial) => (
        <Box key={testimonial.id} sx={{ mb: 4 }}>
          <TestimonialCard testimonial={testimonial} />
        </Box>
      ))}
    </Box>
  );
}

export default Testimonial;