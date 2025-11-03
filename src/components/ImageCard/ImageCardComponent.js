import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const ImageCardComponent = ({ title, description, imageUrl }) => {
  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
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
      <Card sx={{ textAlign: 'center', padding: 3, height: '100%' }}>
        {/* Image section - made much bigger */}
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
          sx={{ 
            objectFit: 'contain', 
            marginBottom: 2,
            padding: 1
          }}
        />

        {/* Card Content  */}
        <CardContent sx={{ flexGrow: 1 }}>
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
              variant="h5" 
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
              variant="body1"
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
