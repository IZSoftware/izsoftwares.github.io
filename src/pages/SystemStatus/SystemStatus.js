import React from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import CancelIcon from '@mui/icons-material/Cancel';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Status = () => {
  const PRIMARY = '#004d99';

  // ZetScore Services
  const zetScoreServices = [
    {
      service: 'Peer Review',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Assessment',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Employee Wellbeing',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Net Promoter System',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Personal Development',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Workforce Analytics',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Onboarding',
      status: 'Under Maintenance',
      reason: 'Scheduled maintenance in progress'
    },
    {
      service: 'Background Checks',
      status: 'Under Maintenance',
      reason: 'Scheduled maintenance in progress'
    },
    {
      service: 'Work Authorization',
      status: 'Under Maintenance',
      reason: 'Scheduled maintenance in progress'
    }
  ];

  // ZetCollect Services (Combined Current + Upcoming)
  const zetCollectServices = [
    // Current Services
    {
      service: 'Client Management',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Collector Management',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Branch Setup',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Mobile Collection',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Booklet System',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Transaction History',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'Reports & Analytics',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'User Access & Roles',
      status: 'Operational',
      reason: 'All systems operational'
    },
    {
      service: 'SMS Notifications',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    },
    {
      service: 'Daily Synchronization',
      status: 'Operational',
      reason: 'All systems operational'
    },
    // Upcoming Features
    {
      service: 'GPS Traceability',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    },
    {
      service: 'Missed Collection Alerts',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    },
    {
      service: 'Client Risk Profile & Rating',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    },
    {
      service: 'Route & Schedule Optimization',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    },
    {
      service: 'Client Self Portal',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    },
    {
      service: 'New Currency System (CDF)',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    },
    {
      service: 'Mobile Money',
      status: 'Under Maintenance',
      reason: 'System under maintenance'
    }
  ];

  const zetScoreWithProduct = zetScoreServices.map((item, index) => ({ 
    ...item, 
    product: index === 0 ? 'ZetScore' : ''
  }));
  
  const zetCollectWithProduct = zetCollectServices.map((item, index) => ({ 
    ...item, 
    product: index === 0 ? 'ZetCollect' : ''
  }));

  // Combine all services
  const allServices = [...zetScoreWithProduct, ...zetCollectWithProduct];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Operational':
        return <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 32 }} />;
      case 'Under Maintenance':
        return <SettingsIcon sx={{ color: PRIMARY, fontSize: 32 }} />;
      case 'Major Outage':
        return <CancelIcon sx={{ color: '#d32f2f', fontSize: 32 }} />;
      default:
        return null;
    }
  };

  // Calculate counts
  const zetScoreOperational = zetScoreServices.filter(item => item.status === 'Operational').length;
  const zetScoreMaintenance = zetScoreServices.filter(item => item.status === 'Under Maintenance').length;
  const zetScoreTotal = zetScoreServices.length;

  const zetCollectOperational = zetCollectServices.filter(item => item.status === 'Operational').length;
  const zetCollectMaintenance = zetCollectServices.filter(item => item.status === 'Under Maintenance').length;
  const zetCollectTotal = zetCollectServices.length;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa', pt: { xs: '20px', sm: '30px', md: '40px' } }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={9.5}>
            <Grid container spacing={6} alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Box sx={{ py: { xs: 1, sm: 2 } }}>

                  {/* Status Indicators - Single column on mobile, row on desktop */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center', 
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    gap: { xs: 2, sm: 4, md: 6, lg: 8 }, 
                    mb: { xs: 4, sm: 5 }, 
                    flexWrap: 'wrap',
                    width: '100%'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: { xs: '100%', sm: 'auto' } }}>
                      <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 28 }} />
                      <Typography sx={{ color: '#374151', fontWeight: 600, fontSize: '1.2rem' }}>Operational</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: { xs: '100%', sm: 'auto' } }}>
                      <SettingsIcon sx={{ color: PRIMARY, fontSize: 28 }} />
                      <Typography sx={{ color: '#374151', fontWeight: 600, fontSize: '1.2rem' }}>Under Maintenance</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: { xs: '100%', sm: 'auto' } }}>
                      <CancelIcon sx={{ color: '#d32f2f', fontSize: 28 }} />
                      <Typography sx={{ color: '#374151', fontWeight: 600, fontSize: '1.2rem' }}>Major Outage</Typography>
                    </Box>
                  </Box>

                  {/* Current Status Banner - High visibility */}
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: { xs: 3, sm: 4, md: 5 }, 
                      mb: { xs: 4, sm: 5 }, 
                      bgcolor: '#f0f7ff',
                      border: '1px solid',
                      borderColor: '#e0e7ff',
                      borderRadius: 2
                    }}
                  >
                    <Grid container spacing={3} alignItems="center" justifyContent="space-between">
                      <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: '#111827', mb: 1, fontSize: { xs: '2rem', sm: '2.5rem' } }}>
                          System Health Overview
                        </Typography>
                        <Typography sx={{ color: '#4b5563', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                          Last updated: {new Date().toLocaleString()}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, flexWrap: 'wrap', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#2e7d32' }} />
                            <Typography sx={{ color: '#374151', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                              ZetScore: {zetScoreOperational}/{zetScoreTotal} Operational
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: PRIMARY }} />
                            <Typography sx={{ color: '#374151', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                              ZetCollect: {zetCollectOperational}/{zetCollectTotal} Operational
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>

                  {/* Combined Status Table */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: '#374151' }}>
                        Service Status Details
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Box sx={{ px: { xs: 2, sm: 3 }, py: 1, bgcolor: '#e8f5e9', borderRadius: 5 }}>
                          <Typography sx={{ color: '#2e7d32', fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>
                            ZetScore: {zetScoreOperational} Operational • {zetScoreMaintenance} Maintenance
                          </Typography>
                        </Box>
                        <Box sx={{ px: { xs: 2, sm: 3 }, py: 1, bgcolor: '#e6f0ff', borderRadius: 5 }}>
                          <Typography sx={{ color: PRIMARY, fontSize: { xs: '0.9rem', sm: '1.1rem' }, fontWeight: 600 }}>
                            ZetCollect: {zetCollectOperational} Operational • {zetCollectMaintenance} Maintenance
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    
                    <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: 2 }}>
                      <Table>
                        <TableHead>
                          <TableRow sx={{ bgcolor: '#f9fafb' }}>
                            <TableCell sx={{ fontWeight: 700, color: '#4b5563', py: { xs: 2, sm: 3 }, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>Product</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: '#4b5563', py: { xs: 2, sm: 3 }, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>Service</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 700, color: '#4b5563', py: { xs: 2, sm: 3 }, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 700, color: '#4b5563', py: { xs: 2, sm: 3 }, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>Details</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {allServices.map((item, index) => {
                            // Check if this is the first ZetCollect service (after ZetScore)
                            const isFirstZetCollect = index === zetScoreServices.length;
                            
                            return (
                              <React.Fragment key={`service-${index}`}>
                                {/* Thicker diagonal line separator between ZetScore and ZetCollect */}
                                {isFirstZetCollect && (
                                  <TableRow>
                                    <TableCell 
                                      colSpan={4} 
                                      sx={{ 
                                        p: 0, 
                                        borderBottom: 'none',
                                        position: 'relative',
                                        height: '24px',
                                        '&::before': {
                                          content: '""',
                                          position: 'absolute',
                                          top: '50%',
                                          left: 0,
                                          right: 0,
                                          height: '3px',
                                          background: 'linear-gradient(135deg, transparent 49.5%, #94a3b8 49.5%, #94a3b8 50.5%, transparent 50.5%)',
                                          backgroundSize: '20px 20px',
                                          backgroundRepeat: 'repeat-x',
                                        }
                                      }}
                                    />
                                  </TableRow>
                                )}
                                <TableRow sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
                                  <TableCell sx={{ 
                                    fontWeight: 600, 
                                    color: item.product === 'ZetScore' ? '#2e7d32' : PRIMARY, 
                                    py: { xs: 2, sm: 3 }, 
                                    fontSize: { xs: '0.9rem', sm: '1.1rem' } 
                                  }}>
                                    {item.product}
                                  </TableCell>
                                  <TableCell sx={{ fontWeight: 500, color: '#111827', py: { xs: 2, sm: 3 }, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
                                    {item.service}
                                  </TableCell>
                                  <TableCell align="center" sx={{ py: { xs: 2, sm: 3 } }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                      {getStatusIcon(item.status)}
                                    </Box>
                                  </TableCell>
                                  <TableCell sx={{ color: '#6b7280', py: { xs: 2, sm: 3 }, fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
                                    {item.reason}
                                  </TableCell>
                                </TableRow>
                              </React.Fragment>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>

                  {/* Full Overview Title and Buttons below the table */}
                  <Box sx={{ mt: 4, mb: 2, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', fontSize: { xs: '1.8rem', sm: '2.2rem' }, mb: 3 }}>
                      Full Overview
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        href="https://zetscore.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<OpenInNewIcon />}
                        sx={{
                          bgcolor: '#2e7d32',
                          '&:hover': {
                            bgcolor: '#1b5e20',
                          },
                          fontWeight: 600,
                          textTransform: 'none',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem'
                        }}
                      >
                        Visit ZetScore
                      </Button>
                      <Button
                        variant="contained"
                        href="https://zetcollect.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<OpenInNewIcon />}
                        sx={{
                          bgcolor: PRIMARY,
                          '&:hover': {
                            bgcolor: '#003366',
                          },
                          fontWeight: 600,
                          textTransform: 'none',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem'
                        }}
                      >
                        Visit ZetCollect
                      </Button>
                    </Box>
                  </Box>

                  {/* Footer */}
                  <Box sx={{ mt: { xs: 4, sm: 5 }, textAlign: 'center' }}>
                    <Typography sx={{ color: '#9ca3af', fontSize: { xs: '0.9rem', sm: '1.1rem' } }}>
                      For support inquiries, please contact your system administrator
                    </Typography>
                  </Box>

                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Status;