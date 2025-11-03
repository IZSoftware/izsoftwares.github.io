import React from 'react';
import { Modal, Box, Typography, Button, Divider, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AttachmentIcon from '@mui/icons-material/Attachment';

const InfoModal = ({ open, onClose, service }) => {
  const handleApply = () => {
    console.log(`Applying for ${service?.title}`);
    onClose();
  };

  if (!service) return null;

  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)', p: 6, maxWidth: '800px', width: '90%', maxHeight: '90vh', overflow: 'auto', position: 'relative' }}>
        <Button onClick={onClose} sx={{ position: 'absolute', top: 16, right: 16, minWidth: 'auto', p: 1, color: '#666' }}>
          <CloseIcon />
        </Button>
        <Typography variant="h4" component="h1" sx={{ mb: 4, color: '#005eb8', fontWeight: 600, fontSize: '2.5rem' }}>
          {service.title}
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600, fontSize: '1.5rem' }}>
          About this Service
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
          {service.description}
        </Typography>
        <Link href={service.learnMoreLink} sx={{ mb: 4, display: 'block', fontSize: '1.1rem', color: '#005eb8', textDecoration: 'none' }}>
          Learn more about this service.
        </Link>
        <Divider sx={{ mb: 4 }} />
        <List sx={{ mb: 4 }}>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon />
            </ListItemIcon>
            <ListItemText primary={`Processing Time : ${service.processingTime}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon sx={{ color: '#005eb8' }} />
            </ListItemIcon>
            <ListItemText primary={`Price : ${service.price}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <RadioButtonUncheckedIcon />
            </ListItemIcon>
            <ListItemText primary={`Provided by : ${service.providedBy}`} />
          </ListItem>
        </List>
        {service.attachments && service.attachments.length > 0 && (
          <>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontSize: '1.3rem' }}>
              Conditional attachments ({service.attachments.length})
            </Typography>
            <List sx={{ mb: 4 }}>
              {service.attachments.map((attachment, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <AttachmentIcon />
                  </ListItemIcon>
                  <ListItemText primary={`${index + 1}. ${attachment}`} />
                </ListItem>
              ))}
            </List>
          </>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            onClick={handleApply}
            sx={{ 
              px: 8, 
              py: 2, 
              fontSize: '1.2rem', 
              fontWeight: 600, 
              textTransform: 'none', 
              borderRadius: '8px', 
              backgroundColor: '#005eb8',
              '&:hover': {
                backgroundColor: '#003d7a'
              }
            }}
          >
            Apply
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default InfoModal;
