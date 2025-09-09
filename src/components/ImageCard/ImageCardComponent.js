import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const ImageCardComponent = ({ title, description, imageUrl }) => {
  return (
    <Box sx={{ maxWidth: 350, position: 'relative' }}>
      {/* Blue line at the top */}
      <Box
        sx={{
          backgroundColor: '#005eb8',
          width: '100%',
          height: '9px',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      {/* Card */}
      <Card sx={{ textAlign: 'center', padding: 2 }}>
        {/* Image section */}
        <CardMedia
          component="img"
          height="130"
          image={imageUrl}
          alt={title}
          sx={{ objectFit: 'contain', marginBottom: 2 }}
        />

        {/* Card Content  */}
        <CardContent>
         
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 5, 
            }}
          >
            {/* Title */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                textAlign: 'justify',
                textDecoration: 'none',
                height: '70px', 
                display: 'flex',
                alignItems: 'center', 
              }}
            >
              {title}
            </Typography>

            {/* Description */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: 'justify',
                height: '80px', 
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ImageCardComponent;
