import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  Chip,
  Fade
} from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PRIMARY = "#004d99";
const PRIMARY_DARK = "#003d7a";

const notifications = [
  // February 15 services (most recent - should be on top)
  {
    id: 8,
    date: "Feb 15, 2026",
    timeStart: "12:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Onboarding System Maintenance",
    detailsUrl: "#",
    description:
      "Scheduled maintenance for Onboarding services. The system will be unavailable during this window as we deploy performance improvements and security updates.",
    status: "scheduled",
    platform: "Onboarding",
  },
  {
    id: 9,
    date: "Feb 15, 2026",
    timeStart: "12:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Background Checks Maintenance",
    detailsUrl: "#",
    description:
      "Background Check services will undergo scheduled maintenance. All background verification services will be temporarily unavailable during this period.",
    status: "scheduled",
    platform: "Background Checks",
  },
  {
    id: 10,
    date: "Feb 15, 2026",
    timeStart: "12:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Work Authorization Maintenance",
    detailsUrl: "#",
    description:
      "Work Authorization verification system is under scheduled maintenance. Document submission and verification services will be temporarily paused.",
    status: "scheduled",
    platform: "Work Authorization",
  },
  // March 15 services
  {
    id: 2,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Missed Collection Alerts 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Missed Collection Alerts 1.0.0 is being released into production. This feature automatically detects and notifies supervisors when scheduled collections are not completed.",
    status: "scheduled",
    platform: "Missed Collection Alerts",
  },
  {
    id: 4,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Route & Schedule Optimization 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Route & Schedule Optimization 1.0.0 is being released into production. This feature uses AI algorithms to optimize collection routes and schedule assignments for maximum efficiency.",
    status: "scheduled",
    platform: "Route & Schedule Optimization",
  },
  {
    id: 5,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Client Self Portal 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Client Self Portal 1.0.0 is being released into production. This portal allows clients to view their transaction history, make payments, and update personal information online.",
    status: "scheduled",
    platform: "Client Self Portal",
  },
  // March 29 services
  {
    id: 1,
    date: "Mar 29, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "GPS Traceability 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "GPS Traceability 1.0.0 is being released into production. This initial release enables real-time vehicle tracking, route history, and geofencing capabilities for fleet management.",
    status: "scheduled",
    platform: "GPS Traceability",
  },
  {
    id: 3,
    date: "Mar 29, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Client Risk Profile & Rating 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Client Risk Profile & Rating 1.0.0 is being released into production. This feature provides automated credit scoring, risk assessment, and client rating based on payment history.",
    status: "scheduled",
    platform: "Client Risk Profile & Rating",
  },
  {
    id: 6,
    date: "Mar 29, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "New Currency System (CDF) 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "New Currency System (CDF) 1.0.0 is being released into production. This update adds support for Congolese Franc (CDF) as a native currency option for all transactions.",
    status: "scheduled",
    platform: "New Currency System (CDF)",
  },
  {
    id: 7,
    date: "Mar 29, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Mobile Money 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Mobile Money 1.0.0 is being released into production. This integration enables mobile money payments through M-PESA, Airtel Money, and other popular mobile payment platforms.",
    status: "scheduled",
    platform: "Mobile Money",
  },
];

const services = [
  "All Services",
  "Onboarding",
  "Background Checks",
  "Work Authorization",
  "GPS Traceability",
  "Missed Collection Alerts",
  "Client Risk Profile & Rating",
  "Route & Schedule Optimization",
  "Client Self Portal",
  "New Currency System (CDF)",
  "Mobile Money",
];

const StyledCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  border: '1px solid #e2e8f0',
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  '&:hover': {
    borderColor: `${PRIMARY}66`,
    boxShadow: `0 8px 28px ${PRIMARY}1F`,
  },
}));

const LeftAccent = styled(Box)({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '3px',
  background: `linear-gradient(to bottom, ${PRIMARY}, ${PRIMARY_DARK})`,
  borderTopLeftRadius: '16px',
  borderBottomLeftRadius: '16px',
});

const NotificationCard = ({ notification }) => {
  const [linkHover, setLinkHover] = useState(false);
  
  const getStatusIcon = (status) => {
    switch(status) {
      case 'scheduled':
        return <CheckCircleIcon sx={{ color: PRIMARY, fontSize: 20 }} />;
      default:
        return null;
    }
  };

  return (
    <StyledCard>
      <LeftAccent />
      <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
        {/* Desktop Grid Layout */}
        <Grid container spacing={2}>
          {/* Date/Time Section */}
          <Grid item xs={12} lg={2}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'row', lg: 'column' },
              alignItems: { xs: 'center', lg: 'flex-start' },
              justifyContent: { xs: 'space-between', lg: 'flex-start' },
              gap: { xs: 1.5, lg: 1 }
            }}>
              <Typography 
                sx={{ 
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  fontWeight: 600,
                  letterSpacing: '0.13em',
                  color: '#94a3b8',
                  textTransform: 'uppercase'
                }}
              >
                {notification.date}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: { xs: '1.1rem', sm: '1.4rem' }, fontWeight: 600, color: '#1e293b' }}>
                  {notification.timeStart}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, color: '#94a3b8', fontWeight: 600 }}>
                  to
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.1rem', sm: '1.4rem' }, fontWeight: 600, color: '#1e293b' }}>
                  {notification.timeEnd}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Arrow Connector - Desktop */}
          <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'flex' }, justifyContent: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: `${PRIMARY}1A`,
                border: `1px solid ${PRIMARY}33`,
                mt: 0.5
              }}
            >
              <ArrowForwardIcon sx={{ color: PRIMARY, fontSize: 20 }} />
            </Box>
          </Grid>

          {/* Mobile Arrow Connector */}
          <Grid item xs={12} sx={{ display: { lg: 'none' }, textAlign: 'center' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: `${PRIMARY}1A`,
                border: `1px solid ${PRIMARY}33`,
              }}
            >
              <ArrowForwardIcon sx={{ color: PRIMARY, fontSize: 18 }} />
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
              <Chip
                icon={getStatusIcon(notification.status)}
                label="Scheduled"
                size="small"
                sx={{
                  backgroundColor: `${PRIMARY}1A`,
                  color: PRIMARY,
                  borderColor: `${PRIMARY}33`,
                  fontWeight: 600,
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  height: { xs: 24, sm: 28 },
                  '& .MuiChip-icon': { color: PRIMARY, fontSize: 16 }
                }}
                variant="outlined"
              />
              <Chip
                label={notification.platform}
                size="small"
                sx={{
                  backgroundColor: '#f1f5f9',
                  color: '#64748b',
                  borderColor: '#e2e8f0',
                  fontWeight: 600,
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  height: { xs: 24, sm: 28 }
                }}
                variant="outlined"
              />
            </Box>

            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                color: '#1e293b',
                mb: 1.5,
                lineHeight: 1.4,
                transition: 'color 0.2s',
                '&:hover': { color: PRIMARY }
              }}
            >
              {notification.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexWrap: 'wrap' }}>
              <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, fontWeight: 600, color: '#475569' }}>
                For details, see
              </Typography>
              <Button
                href={notification.detailsUrl}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                sx={{
                  color: linkHover ? PRIMARY_DARK : PRIMARY,
                  fontWeight: 600,
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  textTransform: 'none',
                  p: 0,
                  minWidth: 'auto',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline'
                  }
                }}
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
              >
                release notes
              </Button>
            </Box>
          </Grid>

          {/* Description */}
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                p: { xs: 2, sm: 2.5 },
                backgroundColor: '#f8fafb',
                border: '1px solid #eaf3ef',
                borderRadius: 2
              }}
            >
              <Typography sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem' }, color: '#475569', lineHeight: 1.5, fontWeight: 500 }}>
                {notification.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </StyledCard>
  );
};

export default function UpcomingMaintenance() {
  const [selectedService, setSelectedService] = useState("All Services");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Sort notifications by date (most recent first - FEB SHOULD BE ON TOP)
  const sortedNotifications = [...notifications].sort((a, b) => {
    // Parse dates for proper comparison
    const parseDate = (dateStr) => {
      const [month, day, year] = dateStr.split(' ');
      const monthMap = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 };
      return new Date(parseInt(year), monthMap[month], parseInt(day));
    };
    
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    
    // Sort by date (MOST RECENT FIRST - DESCENDING)
    // Feb 15 (earliest) should be on top, then Mar 15, then Mar 29
    if (dateA < dateB) return -1; // Earlier dates first (ascending)
    if (dateA > dateB) return 1;
    
    // If same date, sort alphabetically by platform
    return a.platform.localeCompare(b.platform);
  });

  const filtered = sortedNotifications.filter(
    (n) => selectedService === "All Services" || n.platform === selectedService
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (service) => {
    if (service) {
      setSelectedService(service);
    }
    setAnchorEl(null);
  };

  // Group notifications by month for display
  const groupedByMonth = filtered.reduce((acc, notification) => {
    const month = notification.date.split(' ')[0] + ' ' + notification.date.split(' ')[2];
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(notification);
    return acc;
  }, {});

  const months = Object.keys(groupedByMonth).sort((a, b) => {
    const monthOrder = { 'Feb': 1, 'Mar': 2 };
    const monthA = a.split(' ')[0];
    const monthB = b.split(' ')[0];
    return monthOrder[monthA] - monthOrder[monthB]; // Feb (1) before Mar (2)
  });

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc', pt: { xs: '20px', sm: '30px', md: '40px' } }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12}>
                <Box sx={{ py: { xs: 1, sm: 2 } }}>

                  {/* Top Bar */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'stretch', sm: 'center' },
                    gap: 2,
                    mb: { xs: 3, sm: 4 }
                  }}>
                    {/* Service Dropdown */}
                    <Box>
                      <Button
                        onClick={handleClick}
                        variant="outlined"
                        startIcon={<NotificationsNoneIcon sx={{ color: open ? PRIMARY : '#94a3b8', fontSize: { xs: 18, sm: 20 } }} />}
                        endIcon={<KeyboardArrowDownIcon sx={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', fontSize: { xs: 18, sm: 20 } }} />}
                        sx={{
                          borderColor: open ? PRIMARY : '#e2e8f0',
                          color: '#334155',
                          fontWeight: 600,
                          fontSize: { xs: '0.8rem', sm: '0.9rem' },
                          py: { xs: 1, sm: 1.5 },
                          px: { xs: 2, sm: 3 },
                          borderRadius: 2,
                          width: { xs: '100%', sm: 'auto' },
                          '&:hover': {
                            borderColor: PRIMARY,
                            backgroundColor: 'transparent'
                          }
                        }}
                      >
                        <Typography sx={{ maxWidth: { xs: '180px', sm: 'none' }, overflow: 'hidden', textOverflow: 'ellipsis', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                          {selectedService}
                        </Typography>
                      </Button>
                      
                      <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => handleClose()}
                        TransitionComponent={Fade}
                        PaperProps={{
                          sx: {
                            mt: 1,
                            width: { xs: '100%', sm: '256px' },
                            maxHeight: 320,
                            borderRadius: 2,
                            boxShadow: '0 12px 32px rgba(0,0,0,0.11)',
                            border: '1px solid #e2e8f0'
                          }
                        }}
                      >
                        {services.map((service) => (
                          <MenuItem
                            key={service}
                            onClick={() => handleClose(service)}
                            selected={selectedService === service}
                            sx={{
                              py: { xs: 1, sm: 1.5 },
                              px: { xs: 2, sm: 2.5 },
                              gap: 1.5,
                              backgroundColor: selectedService === service ? `${PRIMARY}1A` : 'transparent',
                              color: selectedService === service ? PRIMARY : '#475569',
                              '&:hover': {
                                backgroundColor: selectedService === service ? `${PRIMARY}1A` : '#f8fafc'
                              }
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: selectedService === service ? PRIMARY : 'transparent',
                                border: selectedService === service ? 'none' : '1.5px solid #cbd5e1'
                              }}
                            />
                            <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {service}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>

                    {/* Notification Count */}
                    <Chip
                      icon={<Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: PRIMARY, ml: 0.5 }} />}
                      label={`${filtered.length} release${filtered.length !== 1 ? 's' : ''} scheduled`}
                      sx={{
                        backgroundColor: `${PRIMARY}1A`,
                        color: PRIMARY,
                        borderColor: `${PRIMARY}33`,
                        fontWeight: 600,
                        fontSize: { xs: '0.75rem', sm: '0.85rem' },
                        height: { xs: 32, sm: 36 },
                        '& .MuiChip-label': { px: { xs: 1.5, sm: 2 } },
                        width: { xs: '100%', sm: 'auto' }
                      }}
                      variant="outlined"
                    />
                  </Box>

                  {/* Month Headers and Cards - FEB FIRST, then MAR */}
                  {months.map((month) => (
                    <Box key={month} sx={{ mb: { xs: 4, sm: 5 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: { xs: 2, sm: 3 } }}>
                        <Typography 
                          variant="h4" 
                          sx={{ 
                            fontSize: { xs: '1.5rem', sm: '2rem' },
                            fontWeight: 600,
                            color: '#334155',
                            letterSpacing: '-0.025em',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {month}
                        </Typography>
                        <Box sx={{ flex: 1, height: '1px', background: 'linear-gradient(to right, #cbd5e1, transparent)' }} />
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
                        {groupedByMonth[month].map((notification, index) => (
                          <Fade in={true} timeout={500} style={{ transitionDelay: `${index * 90}ms` }} key={notification.id}>
                            <Box>
                              <NotificationCard notification={notification} />
                            </Box>
                          </Fade>
                        ))}
                      </Box>
                    </Box>
                  ))}

                  {filtered.length === 0 && (
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      py: { xs: 8, sm: 10 },
                      px: 3
                    }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 56, sm: 64 },
                          height: { xs: 56, sm: 64 },
                          backgroundColor: `${PRIMARY}1A`,
                          borderRadius: 3,
                          mb: 2
                        }}
                      >
                        <NotificationsNoneIcon sx={{ color: PRIMARY, fontSize: { xs: 28, sm: 32 }, opacity: 0.5 }} />
                      </Box>
                      <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, fontWeight: 600, color: '#64748b', textAlign: 'center' }}>
                        No releases scheduled for this feature
                      </Typography>
                      <Typography sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem' }, color: '#94a3b8', mt: 0.5, textAlign: 'center' }}>
                        Try selecting a different service from the dropdown
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}