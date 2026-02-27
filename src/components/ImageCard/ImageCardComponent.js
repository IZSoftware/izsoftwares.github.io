import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const ImageCardComponent = ({ title, description, imageUrl }) => {
  return (
    <Box sx={{ width: '100%', position: 'relative', height: '100%' }}>
      {/* Blue line at the top */}
      <Box
        sx={{
          backgroundColor: '#005eb8',
          width: '100%',
          height: { xs: '6px', sm: '7px', md: '8px', lg: '9px' },
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Card */}
      <Card sx={{ 
        textAlign: 'center', 
        p: { xs: 1.5, sm: 2, md: 2.5, lg: 3 }, 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
      }}>
        {/* Image section - responsive height */}
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          sx={{ 
            objectFit: 'contain', 
            mb: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
            p: { xs: 0.5, sm: 0.75, md: 1, lg: 1 },
            height: { xs: '100px', sm: '120px', md: '150px', lg: '180px' },
          }}
        />

        {/* Card Content */}
        <CardContent sx={{ 
          flexGrow: 1, 
          p: { xs: 0.5, sm: 1, md: 1.5, lg: 2 },
          '&:last-child': { pb: { xs: 0.5, sm: 1, md: 1.5, lg: 2 } }
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2, md: 3, lg: 4 }, 
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
                height: { xs: '40px', sm: '45px', md: '50px', lg: '55px' }, 
                display: 'flex',
                alignItems: 'center',
                fontSize: { 
                  xs: '0.9rem', 
                  sm: '1rem', 
                  md: '1.1rem', 
                  lg: '1.2rem' 
                },
                lineHeight: 1.3,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: { xs: 2, sm: 2, md: 2, lg: 2 },
                WebkitBoxOrient: 'vertical',
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
                height: { xs: '50px', sm: '55px', md: '60px', lg: '65px' }, 
                display: 'flex',
                alignItems: 'center',
                fontSize: { 
                  xs: '0.75rem', 
                  sm: '0.8rem', 
                  md: '0.875rem', 
                  lg: '0.9rem' 
                },
                lineHeight: 1.5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitLineClamp: { xs: 2, sm: 2, md: 3, lg: 3 },
                WebkitBoxOrient: 'vertical',
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