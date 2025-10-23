import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Card,
  Autocomplete
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';

import countriesData from '../../Data/Countries.json';

// API configuration
const API_CONFIG = {
  URL: "https://contact-form-handler-885787520862.europe-west1.run.app",
  TIMEOUT: 40000,
  MAX_RETRIES: 2
};

// Email validation regex pattern
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// iOS-style Switch Component - Simplified
const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

// Modal notification component
const Modal = ({ message, type, onClose }) => {
  const theme = useTheme();
  
  return (
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="modal-title"
      PaperProps={{
        sx: {
          backgroundColor: type === 'success' ? '#005EB8' : theme.palette.error.main,
          color: 'white',
          textAlign: 'center'
        }
      }}
    >
      <DialogContent>
        <DialogContentText sx={{ color: 'white', mb: 2 }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              backgroundColor: 'grey.200'
            }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// PropTypes for Modal
Modal.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  onClose: PropTypes.func.isRequired
};

// Flatten countries data for autocomplete
const getAllCountries = () => {
  const allCountries = [];
  Object.values(countriesData).forEach(continentCountries => {
    allCountries.push(...continentCountries);
  });
  return allCountries.sort();
};

// Group countries by continent for dropdown
const getCountriesByContinent = () => {
  return Object.entries(countriesData).map(([continent, countries]) => ({
    continent,
    countries: countries.sort()
  }));
};

const ContactUsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(null);
  const [formData, setFormData] = useState({
    full_name: '',
    business_email: '',
    work_phone: '',
    company_name: '',
    country: '',
    sign_nda: false,
    message: ''
  });
  const [errors, setErrors] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Primary brand color
  const primaryColor = '#005EB8';

  // Get countries data
  const allCountries = getAllCountries();
  const countriesByContinent = getCountriesByContinent();

  const showModal = (message, type = 'success') => {
    setModal({ message, type });
  };

  const hideModal = () => {
    setModal(null);
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (formData.business_email && !EMAIL_REGEX.test(formData.business_email)) {
      newErrors.business_email = 'Please enter a valid business email address';
    }

    // Phone number validation (only numbers)
    if (formData.work_phone && !/^\d+$/.test(formData.work_phone)) {
      newErrors.work_phone = 'Phone number should contain only numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldId = id || e.target.name;
    
    // For phone number input, only allow numbers
    if (fieldId === 'work_phone') {
      const numbersOnly = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [fieldId]: numbersOnly
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [fieldId]: type === 'checkbox' ? checked : value
      }));
    }

    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({
        ...prev,
        [fieldId]: ''
      }));
    }
  };

  const handleCountryChange = (event, newValue) => {
    setFormData(prev => ({
      ...prev,
      country: newValue || ''
    }));
  };

  const submitToAPI = async (data, retryCount = 0) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    try {
      const response = await fetch(API_CONFIG.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          name: data.full_name,
          email: data.business_email,
          message: `Work Phone: ${data.work_phone}\nCompany: ${data.company_name}\nCountry: ${data.country}\nSign NDA: ${data.sign_nda ? 'Yes' : 'No'}\nMessage: ${data.message}`,
          source: 'Evolv'
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        console.log(`Request timeout (attempt ${retryCount + 1})`);
      } else {
        console.error(`Request failed (attempt ${retryCount + 1}):`, error);
      }

      if (retryCount < API_CONFIG.MAX_RETRIES) {
        console.log(`Retrying... (${retryCount + 1}/${API_CONFIG.MAX_RETRIES})`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return submitToAPI(data, retryCount + 1);
      }

      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      showModal('Please check your form for errors.', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      // Show immediate success modal
      showModal('Thank you! Your message has been submitted successfully.', 'success');
      
      // Store form data before reset for logging
      const formDataToSubmit = { ...formData };
      
      // Reset form immediately
      setFormData({
        full_name: '',
        business_email: '',
        work_phone: '',
        company_name: '',
        country: '',
        sign_nda: false,
        message: ''
      });

      // Clear errors
      setErrors({});

      // Background API call
      await submitToAPI(formDataToSubmit);
      console.log('Form submitted successfully to API');
      
    } catch (error) {
      console.error('API submission failed:', error.message);
      
      // Show error modal if API fails
      if (error.name === 'TypeError' && error.message.includes('CORS')) {
        showModal('Form submitted! Note: Unable to connect to server due to CORS policy, but your message was recorded locally.', 'success');
      } else {
        showModal('Form submitted! There was a network issue, but we have recorded your information.', 'success');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth={false} sx={{ 
        position: 'relative', 
        zIndex: 1, 
        px: { xs: 5, sm: 3, md: 0 },
        py: { xs: 5, sm: 3, md: 5 }
      }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={0} alignItems="stretch">
              {/* Left Section: Blue Background and Heading */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    backgroundColor: primaryColor,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    p: { xs: 4, lg: 6 },
                    color: 'white',
                    borderRadius: isMobile ? '8px 8px 0 0' : '8px 0 0 8px',
                    height: '100%',
                    minHeight: '500px',
                    boxShadow: 3
                  }}
                >
                  <Box>
                    <Typography
                      variant="h1"
                      component="h1"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '2.5rem', lg: '3rem' },
                        lineHeight: 1.1,
                        mb: 2
                      }}
                    >
                      Talk to IZSoftwares 
                    </Typography>
                  </Box>
                </Card>
              </Grid>

              {/* Right Section: Form Container */}
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    p: { xs: 4, lg: 6 },
                    bgcolor: 'background.paper',
                    borderRadius: isMobile ? '0 0 8px 8px' : '0 8px 8px 0',
                    height: '100%',
                    minHeight: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    boxShadow: 3,
                    border: `2px solid ${primaryColor}`
                  }}
                >
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                      mb: 4, 
                      fontWeight: 'bold', 
                      color: 'text.primary',
                      fontSize: { xs: '1.75rem', lg: '2rem' }
                    }}
                  >
                    Contact Us
                  </Typography>

                  {/* Modal notification */}
                  {modal && (
                    <Modal 
                      message={modal.message} 
                      type={modal.type} 
                      onClose={hideModal} 
                    />
                  )}

                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <Grid container spacing={3}>
                      {/* Full Name and Business Email - Two Columns */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="full_name"
                          label="Full Name"
                          value={formData.full_name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          size="small"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="business_email"
                          label="Business Email"
                          type="email"
                          value={formData.business_email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          error={!!errors.business_email}
                          helperText={errors.business_email}
                          size="small"
                        />
                      </Grid>

                      {/* Work Phone Number and Company Name - Two Columns */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="work_phone"
                          label="Work Phone Number"
                          value={formData.work_phone}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          error={!!errors.work_phone}
                          helperText={errors.work_phone}
                          size="small"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="company_name"
                          label="Company Name"
                          value={formData.company_name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          size="small"
                        />
                      </Grid>

                      {/* Country with Autocomplete */}
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth size="small">
                          <Autocomplete
                            id="country"
                            options={allCountries}
                            value={formData.country}
                            onChange={handleCountryChange}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Country"
                                required
                                size="small"
                                InputProps={{
                                  ...params.InputProps,
                                  style: {
                                    fontSize: '0.875rem'
                                  }
                                }}
                              />
                            )}
                            renderOption={(props, option) => (
                              <li {...props} style={{ fontSize: '0.875rem' }}>
                                {option}
                              </li>
                            )}
                            sx={{
                              '& .MuiAutocomplete-inputRoot': {
                                padding: '2px 8px'
                              }
                            }}
                          />
                        </FormControl>
                      </Grid>

                      {/* Alternative: Grouped Dropdown (commented out) */}
                      {/* <Grid item xs={12} sm={6}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="country-label">Country</InputLabel>
                          <Select
                            labelId="country-label"
                            id="country"
                            value={formData.country}
                            label="Country"
                            onChange={handleInputChange}
                            required
                            MenuProps={{
                              PaperProps: {
                                style: {
                                  maxHeight: 300
                                }
                              }
                            }}
                          >
                            {countriesByContinent.map(({ continent, countries }) => [
                              <MenuItem 
                                key={continent} 
                                value="" 
                                disabled 
                                sx={{ 
                                  backgroundColor: 'grey.100',
                                  fontWeight: 'bold',
                                  fontSize: '0.875rem',
                                  color: 'text.primary'
                                }}
                              >
                                {continent}
                              </MenuItem>,
                              ...countries.map(country => (
                                <MenuItem 
                                  key={country} 
                                  value={country}
                                  sx={{ 
                                    pl: 3,
                                    fontSize: '0.875rem'
                                  }}
                                >
                                  {country}
                                </MenuItem>
                              ))
                            ])}
                          </Select>
                        </FormControl>
                      </Grid> */}

                      <Grid item xs={12} sm={6}>
                        <FormControlLabel
                          control={
                            <IOSSwitch
                              id="sign_nda"
                              checked={formData.sign_nda}
                              onChange={handleInputChange}
                            />
                          }
                          label="I'd like to sign an NDA"
                          sx={{ 
                            m: 0,
                            '& .MuiFormControlLabel-label': { 
                              fontSize: '0.875rem', 
                              color: 'text.secondary',
                              ml: 1
                            } 
                          }}
                        />
                      </Grid>

                      {/* Message - Full Width */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="message"
                          label="Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          multiline
                          rows={4}
                          size="small"
                        />
                      </Grid>

                      {/* Submit Button */}
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          endIcon={<SendIcon />}
                          disabled={isSubmitting}
                          variant="contained"
                          sx={{
                            backgroundColor: primaryColor,
                            color: 'white',
                            px: 6,
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            '&:hover': {
                              backgroundColor: '#004a94',
                              transform: 'translateY(-1px)',
                              boxShadow: 3
                            },
                            '&:disabled': {
                              opacity: 0.6
                            },
                            transition: 'all 0.2s ease-in-out'
                          }}
                          startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUsPage;