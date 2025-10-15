import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  Select,
  MenuItem,
  Box,
  Typography,
  Chip,
} from '@mui/material';
import { Close, AccessTime, LocalOffer, Business } from '@mui/icons-material';
import serviceOptionsData from '../../components/Data/serviceOptions.json';
import serviceDetailsData from '../../components/Data/serviceDetails.json';

const DropdownModal = ({ open, onClose, service }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const getServiceOptions = (serviceTitle) => {
    return serviceOptionsData.serviceOptions[serviceTitle] || ['General Service', 'Standard Application'];
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (!service) return null;

  const serviceOptions = getServiceOptions(service.title);
  const serviceDetail = selectedOption ? serviceDetailsData.serviceDetails[selectedOption] : null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          maxWidth: '50vw',
          width: '100%',
          minHeight: '700px',
          p: 3,
          position: 'relative',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          borderRadius: '50%',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' }
        }}
      >
        <Close sx={{ fontSize: 24, color: '#333' }} />
      </IconButton>
      
      <DialogContent sx={{ p: 0, mt: 4 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Chip 
            label={service.title}
            sx={{ 
              backgroundColor: '#e3f2fd', 
              color: '#005eb8', 
              fontSize: '1.1rem',
              fontWeight: 600,
              px: 2,
              py: 2.5,
              height: 'auto',
              alignSelf: 'flex-start',
              borderRadius: 2,
            }} 
          />
          
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              color: '#555',
              fontWeight: 400,
              letterSpacing: 0.2,
            }}
          >
            Please select a service below to start an application.
          </Typography>
          
          <Box sx={{ pt: 2 }}>
            <Select
              value={selectedOption}
              onChange={handleOptionChange}
              displayEmpty
              sx={{
                width: { xs: '100%', sm: 300 },
                height: 50,
                fontSize: '1rem',
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                '& .MuiSelect-select': {
                  fontSize: '1rem',
                  py: 1.5,
                },
                '&:hover': {
                  backgroundColor: '#f9fafb',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#e0e0e0',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#005eb8',
                  borderWidth: 2,
                },
              }}
            >
              <MenuItem value="" disabled sx={{ fontSize: '1rem', color: '#999' }}>
                Select Service
              </MenuItem>
              {serviceOptions.map((option, index) => (
                <MenuItem
                  key={index}
                  value={option}
                  sx={{
                    fontSize: '1rem',
                    py: 1.5,
                    minHeight: '48px',
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                    },
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Box>

          {serviceDetail && (
            <Box sx={{ mt: 4 }}>
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2,
                    fontSize: '1.2rem',
                    color: '#333',
                    letterSpacing: 0.2,
                  }}
                >
                  About this Service
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#444', 
                    lineHeight: 1.8,
                    fontSize: '1rem',
                  }}
                >
                  {serviceDetail.description}
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <a 
                  href={serviceDetail.learnMoreUrl} 
                  style={{ 
                    color: '#005eb8', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Status
                </a>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <AccessTime sx={{ color: '#005eb8', fontSize: 28 }} />
                  <Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#666', 
                        fontSize: '0.9rem',
                        mb: 0.5
                      }}
                    >
                      Processing Time:
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.1rem'
                      }}
                    >
                      {serviceDetail.processingTime}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocalOffer sx={{ color: '#005eb8', fontSize: 28 }} />
                  <Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#666', 
                        fontSize: '0.9rem',
                        mb: 0.5
                      }}
                    >
                      Price:
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.1rem'
                      }}
                    >
                      {serviceDetail.price}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Business sx={{ color: '#005eb8', fontSize: 28 }} />
                  <Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#666', 
                        fontSize: '0.9rem',
                        mb: 0.5
                      }}
                    >
                      Provided by:
                    </Typography>
                    <Chip 
                      label={serviceDetail.provider}
                      sx={{ 
                        backgroundColor: 'transparent',
                        border: '1px solid #005eb8',
                        color: '#005eb8', 
                        fontSize: '1rem',
                        fontWeight: 500,
                        px: 1,
                        borderRadius: 2,
                      }} 
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default DropdownModal;