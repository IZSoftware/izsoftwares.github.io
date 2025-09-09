import * as React from 'react';
import { Avatar, Box, Typography, Rating, Card, CardContent, Link, } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function TestimonialCard() {
  return (
    <Card>
      <CardContent>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          {/* Profile Info: Picture, Name, and Job Title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar 
              alt="Collins Shem" 
              src="https://via.placeholder.com/150"
              sx={{ width: 64, height: 64, mr: 2 }} 
            />
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                <Typography variant="h6" sx={{ mr: 1, fontWeight: 'bold' }}>
                  Collins Shem
                </Typography>
                
                <Link
                  href="https://www.linkedin.com/in/shem-collins-448a24217/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  color="inherit"
                >
                  <LinkedInIcon sx={{ color: '#0077b5', fontSize: 20 }} />
                </Link>
                
              </Box>
              <Typography variant="body2" color="text.secondary">
                Frontend Developer
              </Typography>
            </Box>
          </Box>
  
          {/* 5-Star Rating */}
          <Rating 
            name="read-only" 
            value={5} 
            readOnly 
            sx={{ color: 'primary.main' }} 
          />
        </Box>
  
        {/* Description */}
        <Typography variant="body1">
          We appreciate proactive approach and ability to suggest improvements to a 
          prospective solution on both architectural and business levels.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;