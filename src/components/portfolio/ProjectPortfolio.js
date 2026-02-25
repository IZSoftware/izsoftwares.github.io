import React, { useState, useRef, useEffect } from "react";
import {
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
  Chip,
  Checkbox,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  industries,
  regions,
  projectData,
  country,
} from "../../components/Data/OurPartnersData";
import ReactMarkdown from 'react-markdown';

const TabBasedFilter = ({ selectedValues, onChange }) => {
  const [activeTab, setActiveTab] = useState("industries");
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (option) => {
    const isSelected = selectedValues.some((item) => item.name === option.name);
    let newValue;
    
    if (isSelected) {
      newValue = selectedValues.filter((item) => item.name !== option.name);
    } else {
      newValue = [...selectedValues, option];
    }
    
    onChange(null, newValue);
  };

  const isSelected = (option) => {
    return selectedValues.some((item) => item.name === option.name);
  };

  const getTabContent = () => {
    switch (activeTab) {
      case "industries":
        return industries;
      case "regions":
        return regions;
      default:
        return [];
    }
  };

  const getTabLabel = (tab) => {
    const labels = {
      industries: "Industries",
      regions: "Regions"
    };
    return labels[tab];
  };

  const hasSelectedFilters = selectedValues.length > 0;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(true);
  };

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <Box ref={dropdownRef} sx={{ position: "relative", width: "100%" }}>
      {/* Tabs  */}
      <Box sx={{ 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        backgroundColor: "#e5f2fe",
        overflow: "hidden",
      }}>
        {["industries", "regions"].map((tab) => (
          <Box
            key={tab}
            onClick={() => handleTabClick(tab)}
            sx={{
              flex: 1,
              padding: isMobile ? "12px 16px" : "16px 24px",
              cursor: "pointer",
              textAlign: "center",
              borderBottom: activeTab === tab 
                ? isMobile ? "none" : "3px solid #005eb8"
                : isMobile ? "none" : "3px solid transparent",
              borderLeft: isMobile && activeTab === tab ? "3px solid #005eb8" : "none",
              backgroundColor: activeTab === tab ? "white" : "transparent",
              color: activeTab === tab ? "#005eb8" : "#6b7280",
              fontWeight: activeTab === tab ? "600" : "500",
              fontSize: isMobile ? "14px" : "16px",
              transition: "all 0.2s",
              "&:hover": {
                backgroundColor: activeTab === tab ? "white" : "#f9fafb",
                color: "#005eb8",
              },
              position: "relative",
              minWidth: isMobile ? "auto" : "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {getTabLabel(tab)}
            <span 
              onClick={handleArrowClick}
              style={{ 
                transform: isOpen && activeTab === tab ? "rotate(180deg)" : "rotate(0deg)", 
                transition: "transform 0.3s",
                fontSize: isMobile ? "10px" : "12px",
                color: activeTab === tab ? "#005eb8" : "#6b7280",
                cursor: "pointer"
              }}
            >
              ▼
            </span>
            {selectedValues.some(item => 
              getTabContent().some(opt => opt.name === item.name)
            ) && activeTab !== tab && (
              <Box
                sx={{
                  position: "absolute",
                  top: isMobile ? "4px" : "8px",
                  right: isMobile ? "4px" : "12px",
                  width: isMobile ? "8px" : "12px",
                  height: isMobile ? "8px" : "12px",
                  borderRadius: "50%",
                  backgroundColor: "#005eb8",
                  border: "2px solid white",
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Dropdown Content  */}
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            backgroundColor: "white",
            border: "1px solid #e5f2fe",
            borderRadius: "8px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* Tab Content */}
          <Box sx={{ maxHeight: isMobile ? "300px" : "400px", overflowY: "auto" }}>
            <Grid container spacing={0}>
              {getTabContent().map((option, index) => (
                <Grid item xs={isMobile ? 12 : 6} key={option.name}>
                  <Box
                    onClick={() => handleToggle(option)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: isMobile ? "12px 14px" : "14px 16px",
                      cursor: "pointer",
                      borderBottom: "1px solid #f3f4f6",
                      "&:hover": {
                        backgroundColor: "#f8fafc",
                      },
                      backgroundColor: isSelected(option) ? "#f0f7ff" : "transparent",
                      transition: "background-color 0.2s",
                    }}
                  >
                    <Checkbox
                      checked={isSelected(option)}
                      sx={{ 
                        padding: isMobile ? "0 8px 0 0" : "0 12px 0 0",
                        color: "#d1d5db",
                        '&.Mui-checked': {
                          color: "#005eb8",
                        },
                      }}
                      size={isMobile ? "small" : "medium"}
                    />
                    {option.image && (
                      <img
                        src={option.image}
                        alt={option.name}
                        style={{
                          width: isMobile ? "20px" : "24px",
                          height: isMobile ? "20px" : "24px",
                          marginRight: isMobile ? "8px" : "12px",
                          borderRadius: "6px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <Typography 
                      sx={{ 
                        fontSize: isMobile ? "13px" : "14px",
                        color: isSelected(option) ? "#005eb8" : "#374151",
                        fontWeight: isSelected(option) ? "600" : "400",
                        flex: 1,
                      }}
                    >
                      {option.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Selected Filters Badges  */}
          {hasSelectedFilters && (
            <Box sx={{ 
              padding: isMobile ? "12px" : "16px",
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#f9fafb",
            }}>
              <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
                <Typography sx={{ fontSize: isMobile ? "13px" : "14px", color: "#374151" }}>
                  Selected:
                </Typography>
                {selectedValues.map((value) => (
                  <Chip
                    key={value.name}
                    label={value.name}
                    onDelete={() => handleToggle(value)}
                    size={isMobile ? "small" : "small"}
                    sx={{
                      backgroundColor: "#005eb8",
                      color: "white",
                      fontSize: isMobile ? "11px" : "12px",
                      height: isMobile ? "24px" : "28px",
                      '& .MuiChip-deleteIcon': {
                        color: "white",
                        fontSize: isMobile ? "14px" : "16px",
                        '&:hover': {
                          color: "#f3f4f6",
                        },
                      },
                    }}
                  />
                ))}
                <Button
                  size="small"
                  onClick={() => onChange(null, [])}
                  sx={{
                    fontSize: isMobile ? "11px" : "12px",
                    color: "#dc2626",
                    textTransform: "none",
                    ml: 1,
                    minWidth: "auto",
                    '&:hover': {
                      backgroundColor: "transparent",
                      color: "#b91c1c",
                    },
                  }}
                >
                  Clear all
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

const ProjectPortfolio = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleFilterChange = (event, newValue) => {
    setSelectedFilters(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
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
    const filterMatch = selectedFilters.length === 0 || 
      selectedFilters.some((filter) => 
        project.industry === filter.name || project.region === filter.name
      );

    const searchMatch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.clientDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.region.toLowerCase().includes(searchQuery.toLowerCase());

    return filterMatch && searchMatch;
  });

  const truncateClientDescription = (text) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    const words = lines.join(" ").split(" ");
    let result = "";
    let lineCount = 0;
    let currentLine = "";

    for (let word of words) {
      if (lineCount >= 2) {
        return result + "...";
      }
      if ((currentLine + word).length > (isMobile ? 30 : 50)) {
        result += currentLine.trim() + " ";
        currentLine = word + " ";
        lineCount++;
      } else {
        currentLine += word + " ";
      }
    }

    if (currentLine.trim()) {
      result += currentLine.trim();
    }
    return result.trim();
  };

  const getCountryName = (countryId) => {
    const countryObj = country.find((c) => c.name === countryId);
    return countryObj ? countryObj.name : "Unknown";
  };

  return (
    <Box sx={{ width: "100%", px: isMobile ? 2 : 0 }}>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xs={12} sm={12} md={9.5}>
          <Box sx={{ textAlign: "left", mb: 5, pt: isMobile ? 2 : 4 }}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              gutterBottom
              sx={{
                color: "black",
                textAlign: "left",
                position: "relative",
                display: "inline-block",
                fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2.125rem",
                "&::after": {
                  content: '""',
                  display: "block",
                  backgroundColor: "#005eb8",
                  height: isMobile ? "3px" : "5px",
                  width: isMobile ? "60px" : "100px",
                  position: "absolute",
                  left: 0,
                  bottom: isMobile ? "-4px" : "-8px",
                },
              }}
            >
              Selected Success Stories From Our Project Portfolio
            </Typography>
          </Box>

          {/* Search Bar  */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Box sx={{ width: "100%", maxWidth: isMobile ? "100%" : "800px" }}>
              <TextField
                fullWidth
                placeholder={isMobile ? "Search projects..." : "Search projects by title, description, industry, or region..."}
                value={searchQuery}
                onChange={handleSearchChange}
                size={isMobile ? "small" : "medium"}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    fontSize: isMobile ? '14px' : '16px',
                    padding: isMobile ? '4px 12px' : '8px 16px',
                    '&:hover fieldset': {
                      borderColor: '#005eb8',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#005eb8',
                    },
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#6b7280', fontSize: isMobile ? 20 : 24 }} />
                    </InputAdornment>
                  ),
                  endAdornment: searchQuery && (
                    <InputAdornment position="end">
                      <Button
                        onClick={clearSearch}
                        sx={{ 
                          minWidth: 'auto', 
                          padding: isMobile ? '2px' : '4px',
                          color: '#6b7280',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#005eb8',
                          }
                        }}
                      >
                        <ClearIcon fontSize={isMobile ? "small" : "medium"} />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          {/* Tab-Based Filter  */}
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            mb: isMobile ? 35 : 25
          }}>
            <Box sx={{ width: "100%", maxWidth: isMobile ? "100%" : "800px" }}>
              <TabBasedFilter
                selectedValues={selectedFilters}
                onChange={handleFilterChange}
              />
            </Box>
          </Box>

          {/* Projects Grid  */}
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={isMobile ? 2 : 4} justifyContent="flex-start">
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={6} key={project.id}>
                  <Card sx={{ 
                    height: "100%",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: isMobile ? "none" : "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height={isMobile ? "150" : "200"}
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ p: isMobile ? 2 : 3 }}>
                      <Typography
                        variant={isMobile ? "subtitle1" : "h6"}
                        gutterBottom
                        sx={{ 
                          fontWeight: "bold", 
                          textAlign: "justify",
                          fontSize: isMobile ? "1rem" : "1.25rem",
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Grid container spacing={0.5}>
                          <Grid item xs={12}>
                            <Chip
                              label={`Industry: ${project.industry}`}
                              color="primary"
                              variant="outlined"
                              size={isMobile ? "small" : "small"}
                              sx={{ 
                                mr: 0.5, 
                                mb: 0.5,
                                fontSize: isMobile ? '10px' : '11px',
                                height: isMobile ? '20px' : '24px',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Chip
                              label={`Region: ${project.region}`}
                              color="primary"
                              variant="outlined"
                              size={isMobile ? "small" : "small"}
                              sx={{ 
                                mr: 0.5, 
                                mb: 0.5,
                                fontSize: isMobile ? '10px' : '11px',
                                height: isMobile ? '20px' : '24px',
                              }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Chip
                              label={`Country: ${getCountryName(project.country)}`}
                              color="primary"
                              variant="outlined"
                              size={isMobile ? "small" : "small"}
                              sx={{ 
                                mr: 0.5, 
                                mb: 0.5,
                                fontSize: isMobile ? '10px' : '11px',
                                height: isMobile ? '20px' : '24px',
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "1.5",
                            fontSize: isMobile ? '0.875rem' : '0.9rem',
                          }}
                        >
                          {truncateClientDescription(project.clientDescription)}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleOpenDialog(project)}
                          size={isMobile ? "small" : "medium"}
                          sx={{ 
                            textTransform: 'none',
                            fontWeight: '500',
                            fontSize: isMobile ? '0.8rem' : '0.9rem',
                          }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Dialog  */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
        scroll="paper"
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ p: isMobile ? 2 : 3 }}>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {selectedProject.title}
              </Typography>
            </DialogTitle>
            <DialogContent dividers sx={{ p: isMobile ? 2 : 3 }}>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: "100%",
                    height: isMobile ? "200px" : "300px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Grid container spacing={0.5}>
                  <Grid item xs={12} sm={4}>
                    <Chip
                      label={`Industry: ${selectedProject.industry}`}
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Chip
                      label={`Region: ${selectedProject.region}`}
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Chip
                      label={`Country: ${getCountryName(selectedProject.country)}`}
                      color="primary"
                      variant="outlined"
                      size="small"
                      sx={{ width: '100%' }}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Grid container spacing={0.5}>
                  {selectedProject.techStack.map((stack) => (
                    <Grid item key={stack}>
                      <Chip
                        label={`${stack}`}
                        color="success"
                        size="small"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  sx={{
                    color: "#0066cc",
                    mb: 1,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    fontSize: isMobile ? "1rem" : "1.25rem",
                    "&::before": {
                      content: '""',
                      width: isMobile ? "3px" : "4px",
                      height: isMobile ? "18px" : "24px",
                      backgroundColor: "#0066cc",
                      marginRight: "8px",
                      borderRadius: "2px",
                    },
                  }}
                >
                  About Our Client
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    pl: 2,
                    borderLeft: "1px solid #e0e0e0",
                    fontSize: isMobile ? '0.875rem' : '1rem',
                  }}
                >
                  <ReactMarkdown> 
                    {selectedProject.clientDescription}
                  </ReactMarkdown> 
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  sx={{
                    color: "#0066cc",
                    mb: 1,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    fontSize: isMobile ? "1rem" : "1.25rem",
                    "&::before": {
                      content: '""',
                      width: isMobile ? "3px" : "4px",
                      height: isMobile ? "18px" : "24px",
                      backgroundColor: "#0066cc",
                      marginRight: "8px",
                      borderRadius: "2px",
                    },
                  }}
                >
                  The Challenge
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    pl: 2,
                    borderLeft: "1px solid #e0e0e0",
                    fontSize: isMobile ? '0.875rem' : '1rem',
                  }}
                >
                  <ReactMarkdown> 
                    {selectedProject.challenge}
                  </ReactMarkdown>
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant={isMobile ? "subtitle1" : "h6"}
                  sx={{
                    color: "#0066cc",
                    mb: 1,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    fontSize: isMobile ? "1rem" : "1.25rem",
                    "&::before": {
                      content: '""',
                      width: isMobile ? "3px" : "4px",
                      height: isMobile ? "18px" : "24px",
                      backgroundColor: "#0066cc",
                      marginRight: "8px",
                      borderRadius: "2px",
                    },
                  }}
                >
                  The Transformation & Solution
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    pl: 2,
                    borderLeft: "1px solid #e0e0e0",
                    whiteSpace: "pre-line",
                    fontSize: isMobile ? '0.875rem' : '1rem',
                  }}
                >
                  <ReactMarkdown>
                    {selectedProject.description}
                  </ReactMarkdown>
                </Typography>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: isMobile ? 2 : 3 }}>
              <Button
                onClick={handleCloseDialog}
                variant="contained"
                color="primary"
                size={isMobile ? "small" : "medium"}
                fullWidth={isMobile}
                sx={{ mb: isMobile ? 1 : 0 }}
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