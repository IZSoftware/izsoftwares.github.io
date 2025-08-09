import React, { useState } from 'react';
import { 
  FormControl, 
  Autocomplete, 
  TextField, 
  Checkbox, 
  ListItemText, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from '@mui/material';
import { industries, regions, projectData } from '../../components/Data/OurPartnersData';

const ProjectPortfolio = () => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleIndustryChange = (event, newValue) => {
    setSelectedIndustries(newValue);
  };

  const handleRegionChange = (event, newValue) => {
    setSelectedRegions(newValue);
  };

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const filteredProjects = projectData.filter((project) => {
    const industryMatch = 
      selectedIndustries.length === 0 || 
      selectedIndustries.some((industry) => project.industry === industry.name);
      
    const regionMatch = 
      selectedRegions.length === 0 || 
      selectedRegions.some((region) => project.region === region.name);

    return industryMatch && regionMatch;
  });

  // Function to truncate clientDescription to two lines
  const truncateClientDescription = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const words = lines.join(' ').split(' ');
    let result = '';
    let lineCount = 0;
    let currentLine = '';

    for (let word of words) {
      if (lineCount >= 2) {
        return result + '...';
      }
      if ((currentLine + word).length > 50) {
        result += currentLine.trim() + ' ';
        currentLine = word + ' ';
        lineCount++;
      } else {
        currentLine += word + ' ';
      }
    }

    if (currentLine.trim()) {
      result += currentLine.trim();
    }
    return result.trim();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xs={12} sm={12} md={9.5}>
          <Box sx={{ textAlign: 'center', mb: 7, pt: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: 'black',
                textAlign: "justify",
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  display: 'block',
                  backgroundColor: '#005eb8',
                  height: '5px',
                  width: '100px',
                  position: 'absolute',
                  left: 0,
                  bottom: '-8px',
                },
              }}
            >
              Selected Success Stories From Our Project Portfolio
            </Typography>
          </Box>

          <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mb: 8 }}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <Autocomplete
                  multiple
                  value={selectedIndustries}
                  onChange={handleIndustryChange}
                  options={industries}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  renderTags={(selected) => selected.map((opt) => opt.name).join(', ')}
                  renderInput={(params) => <TextField {...params} label="Industry" />}
                  renderOption={(props, option, { selected }) => (
                    <li {...props} style={{ display: 'flex', alignItems: 'center' }}>
                      <Checkbox checked={selected} />
                      <img
                        src={option.image}
                        alt={option.name}
                        style={{ width: 30, height: 30, marginRight: 10, borderRadius: '50%' }}
                      />
                      <ListItemText primary={option.name} />
                    </li>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth>
                <Autocomplete
                  multiple
                  value={selectedRegions}
                  onChange={handleRegionChange}
                  options={regions}
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.name}
                  renderTags={(selected) => selected.map((opt) => opt.name).join(', ')}
                  renderInput={(params) => <TextField {...params} label="Region" />}
                  renderOption={(props, option, { selected }) => (
                    <li {...props} style={{ display: 'flex', alignItems: 'center' }}>
                      <Checkbox checked={selected} />
                      <img
                        src={option.image}
                        alt={option.name}
                        style={{ width: 20, height: 20, marginRight: 10, borderRadius: '50%' }}
                      />
                      <ListItemText primary={option.name} />
                    </li>
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={4} justifyContent="flex-start">
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={6} key={project.id}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: "justify" }}>
                      {project.title}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Chip 
                            label={`Industry: ${project.industry}`}
                            color="primary"
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item>
                          <Chip 
                            label={`Region: ${project.region}`}
                            color="primary"
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {truncateClientDescription(project.clientDescription)}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        onClick={() => handleOpenDialog(project)}
                      >
                        Read More
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        {selectedProject && (
          <>
            <DialogTitle>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {selectedProject.title}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ 
                    width: '100%', 
                    height: '300px', 
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <Grid container spacing={1}>
                  <Grid item>
                    <Chip 
                      label={`Industry: ${selectedProject.industry}`}
                      color="primary"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item>
                    <Chip 
                      label={`Region: ${selectedProject.region}`}
                      color="primary"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item>
                    <Chip 
                      label={`Language: ${selectedProject.language}`}
                      color="primary"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#0066cc',
                    mb: 2,
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      width: '4px',
                      height: '24px',
                      backgroundColor: '#0066cc',
                      marginRight: '10px',
                      borderRadius: '2px'
                    }
                  }}
                >
                  About Our Client
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    pl: 3,
                    borderLeft: '1px solid #e0e0e0'
                  }}
                >
                  {selectedProject.clientDescription}
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#0066cc',
                    mb: 2,
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      width: '4px',
                      height: '24px',
                      backgroundColor: '#0066cc',
                      marginRight: '10px',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Challenge
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    pl: 3,
                    borderLeft: '1px solid #e0e0e0'
                  }}
                >
                  {selectedProject.challenge}
                </Typography>
              </Box>
            
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#0066cc',
                    mb: 2,
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '""',
                      width: '4px',
                      height: '24px',
                      backgroundColor: '#0066cc',
                      marginRight: '10px',
                      borderRadius: '2px'
                    }
                  }}
                >
                  Solution & Results
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    pl: 3,
                    borderLeft: '1px solid #e0e0e0',
                    whiteSpace: 'pre-line' 
                  }}
                >
                  {selectedProject.description}
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button 
                onClick={handleCloseDialog} 
                variant="contained" 
                color="primary"
                sx={{ mb: 2, mr: 2 }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectPortfolio;