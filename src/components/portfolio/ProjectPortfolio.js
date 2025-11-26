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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import {
  industries,
  regions,
  projectData,
  country,
} from "../../components/Data/OurPartnersData";

const TabBasedFilter = ({ selectedValues, onChange }) => {
  const [activeTab, setActiveTab] = useState("industries");
  const [isOpen, setIsOpen] = useState(true); // Set to true by default
  const dropdownRef = useRef(null);

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
    // Always open dropdown when switching tabs
    setIsOpen(true);
  };

  const handleArrowClick = (e) => {
    e.stopPropagation(); // Prevent tab click when clicking arrow
    setIsOpen(!isOpen);
  };

  return (
    <Box ref={dropdownRef} sx={{ position: "relative", width: "100%" }}>
      {/* Tabs Only */}
      <Box sx={{ 
            display: "flex", 
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            backgroundColor: "#f3f4f6",
            overflow: "hidden",
          }}>
            {["industries", "regions"].map((tab) => (
              <Box
                key={tab}
                onClick={() => handleTabClick(tab)}
                sx={{
                  flex: 1,
                  padding: "16px 24px",
                  cursor: "pointer",
                  textAlign: "center",
                  borderBottom: activeTab === tab ? "3px solid #005eb8" : "3px solid transparent",
                  backgroundColor: activeTab === tab ? "white" : "transparent",
                  color: activeTab === tab ? "#005eb8" : "#6b7280",
                  fontWeight: activeTab === tab ? "600" : "500",
                  fontSize: "16px",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: activeTab === tab ? "white" : "#f9fafb",
                    color: "#005eb8",
                  },
                  position: "relative",
                  minWidth: "180px",
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
                    fontSize: "12px",
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
                      top: "8px",
                      right: "12px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#005eb8",
                      border: "2px solid white",
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>

      {/* Dropdown Content - Shows by default on page load */}
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            backgroundColor: "white",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* Tab Content */}
          <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
            <Grid container spacing={0}>
              {getTabContent().map((option, index) => (
                <Grid item xs={6} key={option.name}>
                  <Box
                    onClick={() => handleToggle(option)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "14px 16px",
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
                        padding: "0 12px 0 0",
                        color: "#d1d5db",
                        '&.Mui-checked': {
                          color: "#005eb8",
                        },
                      }}
                    />
                    {option.image && (
                      <img
                        src={option.image}
                        alt={option.name}
                        style={{
                          width: "24px",
                          height: "24px",
                          marginRight: "12px",
                          borderRadius: "6px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <Typography 
                      sx={{ 
                        fontSize: "14px",
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

          {/* Selected Filters Badges */}
          {hasSelectedFilters && (
            <Box sx={{ 
              padding: "16px",
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#f9fafb",
            }}>
              <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
                <Typography sx={{ fontSize: "14px", color: "#374151", mr: 1 }}>
                  Selected:
                </Typography>
                {selectedValues.map((value) => (
                  <Chip
                    key={value.name}
                    label={value.name}
                    onDelete={() => handleToggle(value)}
                    size="small"
                    sx={{
                      backgroundColor: "#005eb8",
                      color: "white",
                      fontSize: "12px",
                      '& .MuiChip-deleteIcon': {
                        color: "white",
                        fontSize: "16px",
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
                    fontSize: "12px",
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
    // Filter by selected industries/regions
    const filterMatch = selectedFilters.length === 0 || 
      selectedFilters.some((filter) => 
        project.industry === filter.name || project.region === filter.name
      );

    // Filter by search query
    const searchMatch = searchQuery === "" || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.clientDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.region.toLowerCase().includes(searchQuery.toLowerCase());

    return filterMatch && searchMatch;
  });

  // Function to truncate clientDescription to two lines
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
      if ((currentLine + word).length > 50) {
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

  // Function to get country name
  const getCountryName = (countryId) => {
    const countryObj = country.find((c) => c.name === countryId);
    return countryObj ? countryObj.name : "Unknown";
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} direction="row" justifyContent="center">
        <Grid item xs={12} sm={12} md={9.5}>
          <Box sx={{ textAlign: "center", mb: 7, pt: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "black",
                textAlign: "justify",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  display: "block",
                  backgroundColor: "#005eb8",
                  height: "5px",
                  width: "100px",
                  position: "absolute",
                  left: 0,
                  bottom: "-8px",
                },
              }}
            >
              Selected Success Stories From Our Project Portfolio
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Box sx={{ width: "100%", maxWidth: "800px" }}>
              <TextField
                fullWidth
                placeholder="Search projects by title, description, industry, or region..."
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                    fontSize: '16px',
                    padding: '8px 16px',
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
                      <SearchIcon sx={{ color: '#6b7280' }} />
                    </InputAdornment>
                  ),
                  endAdornment: searchQuery && (
                    <InputAdornment position="end">
                      <Button
                        onClick={clearSearch}
                        sx={{ 
                          minWidth: 'auto', 
                          padding: '4px',
                          color: '#6b7280',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#005eb8',
                          }
                        }}
                      >
                        <ClearIcon fontSize="small" />
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          {/* Tab-Based Filter */}
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center", 
            mb: 25 // Fixed margin since dropdown is open by default
          }}>
            <Box sx={{ width: "100%", maxWidth: "800px" }}>
              <TabBasedFilter
                selectedValues={selectedFilters}
                onChange={handleFilterChange}
              />
            </Box>
          </Box>

          {/* Projects Grid */}
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4} justifyContent="flex-start">
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={6} key={project.id}>
                  <Card sx={{ 
                    height: "100%",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    }
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "justify" }}
                      >
                        {project.title}
                      </Typography>

                      <Box sx={{ mb: 2 }}>
                        <Grid container spacing={1}>
                          <Grid item>
                            <Chip
                              label={`Industry: ${project.industry}`}
                              color="primary"
                              variant="outlined"
                              size="small"
                            />
                          </Grid>
                          <Grid item>
                            <Chip
                              label={`Region: ${project.region}`}
                              color="primary"
                              variant="outlined"
                              size="small"
                            />
                          </Grid>
                          <Grid item>
                            <Chip
                              label={`Country: ${getCountryName(project.country)}`}
                              color="primary"
                              variant="outlined"
                              size="small"
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
                          sx={{ 
                            textTransform: 'none',
                            fontWeight: '500',
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
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {selectedProject.title}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
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
                      label={`Country: ${getCountryName(selectedProject.country)}`}
                      color="primary"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Grid container spacing={1}>
                  {selectedProject.techStack.map((stack) => (
                    <Grid item key={stack}>
                      <Chip
                        label={`${stack}`}
                        color="success"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#0066cc",
                    mb: 2,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    "&::before": {
                      content: '""',
                      width: "4px",
                      height: "24px",
                      backgroundColor: "#0066cc",
                      marginRight: "10px",
                      borderRadius: "2px",
                    },
                  }}
                >
                  About Our Client
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pl: 3,
                    borderLeft: "1px solid #e0e0e0",
                  }}
                >
                  {selectedProject.clientDescription}
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#0066cc",
                    mb: 2,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    "&::before": {
                      content: '""',
                      width: "4px",
                      height: "24px",
                      backgroundColor: "#0066cc",
                      marginRight: "10px",
                      borderRadius: "2px",
                    },
                  }}
                >
                  The Challenge
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pl: 3,
                    borderLeft: "1px solid #e0e0e0",
                  }}
                >
                  {selectedProject.challenge}
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#0066cc",
                    mb: 2,
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    "&::before": {
                      content: '""',
                      width: "4px",
                      height: "24px",
                      backgroundColor: "#0066cc",
                      marginRight: "10px",
                      borderRadius: "2px",
                    },
                  }}
                >
                  The Transformation & Solution
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    pl: 3,
                    borderLeft: "1px solid #e0e0e0",
                    whiteSpace: "pre-line",
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