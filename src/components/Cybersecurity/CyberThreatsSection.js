import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import ShieldIcon from '@mui/icons-material/Shield';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RouterIcon from '@mui/icons-material/Router';

const threats = [
  {
    title: "Malware-based attacks",
    icon: BugReportIcon,
    color: "#ff6b6b",
    items: [
      "Viruses, worms, and trojans",
      "Ransomware, worms, and trojans",
      "Spyware and keyloggers",
      "Advanced persistent threats (APTs)",
    ],
  },
  {
    title: "Identity and access-related attacks",
    icon: ShieldIcon,
    color: "#4ecdc4",
    items: [
      "Identity theft",
      "Brute-force attacks",
      "Unauthorized access",
      "Insider attacks",
    ],
  },
  {
    title: "Injection and code-based attacks",
    icon: CodeIcon,
    color: "#feca57",
    items: [
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Cross-Site Request Forgery (CSRF)",
      "Server-Side Request Forgery (SSRF)",
    ],
  },
  {
    title: "Social engineering attacks",
    icon: PsychologyIcon,
    color: "#ff9f43",
    items: [
      "Phishing",
      "Spear phishing",
      "Whaling",
      "Vishing",
      "Smishing",
      "Business Email Compromise (BEC)",
    ],
  },
  {
    title: "Network and infrastructure attacks",
    icon: RouterIcon,
    color: "#6ab04c",
    items: [
      "DoS and DDoS attacks",
      "Man-in-the-middle (MitM) attacks",
      "Packet sniffing and eavesdropping",
      "Session sniffing / hijacking",
      "Replay attacks",
      "Protocol exploitation and manipulation (e.g., DNS spoofing, IP spoofing)",
    ],
  },
];

export default function CyberThreatsSection() {
  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 } }}>
      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#002d5c",
                mb: { xs: 4, md: 6 },
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                px: { xs: 2, md: 0 }
              }}
            >
              Cyber Threats We Help Prevent
            </Typography>

            {/* Cards grid */}
            <Grid container spacing={{ xs: 3, sm: 4 }}>
              {threats.map((threat, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                      border: "1px solid #e1e8f0",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: { xs: "none", md: "translateY(-8px)" },
                        boxShadow: { xs: "none", md: "0 12px 32px rgba(0,0,0,0.12)" },
                        borderColor: { xs: "#e1e8f0", md: "#004d99" },
                      },
                    }}
                  >
                    <CardContent sx={{ 
                      p: { xs: 3, sm: 4 }, 
                      textAlign: 'center' 
                    }}>
                      {/* Icon with colored dot */}
                      <Box sx={{ 
                        position: 'relative', 
                        mb: { xs: 2, md: 3 }, 
                        display: 'inline-block' 
                      }}>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: { xs: -6, md: -8 },
                            right: { xs: -6, md: -8 },
                            width: { xs: 16, md: 20 },
                            height: { xs: 16, md: 20 },
                            borderRadius: '50%',
                            backgroundColor: threat.color,
                            opacity: 0.7,
                          }}
                        />
                        <threat.icon sx={{ 
                          fontSize: { xs: 48, sm: 56, md: 64 }, 
                          color: threat.color 
                        }} />
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#002d5c",
                          mb: { xs: 2, md: 3 },
                          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                          px: { xs: 1, md: 0 }
                        }}
                      >
                        {threat.title}
                      </Typography>

                      {/* Items List */}
                      <Box component="ul" sx={{ 
                        pl: 0, 
                        listStyle: 'none', 
                        textAlign: 'left',
                        m: 0
                      }}>
                        {threat.items.map((item, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              mb: { xs: 1, md: 1.5 },
                              display: 'flex',
                              alignItems: 'flex-start',
                              color: "#444444",
                              lineHeight: 1.6,
                            }}
                          >
                            <Box
                              sx={{
                                width: { xs: 5, md: 6 },
                                height: { xs: 5, md: 6 },
                                borderRadius: '50%',
                                backgroundColor: "#004d99",
                                mt: { xs: '8px', md: '10px' },
                                mr: { xs: 1.5, md: 2 },
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                                lineHeight: 1.6,
                                color: "#444444",
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}