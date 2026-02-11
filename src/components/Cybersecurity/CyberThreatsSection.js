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
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#002d5c",
                mb: 6,
                textAlign: 'left',
              }}
            >
              Cyber Threats We Help Prevent
            </Typography>

            {/* Cards grid – no divider image anymore */}
            <Grid container spacing={3}>
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
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                        borderColor: "#004d99",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ position: 'relative', mb: 3, display: 'inline-block' }}>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: threat.color,
                            opacity: 0.7,
                          }}
                        />
                        <threat.icon sx={{ fontSize: 64, color: threat.color }} />
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#002d5c",
                          mb: 3,
                        }}
                      >
                        {threat.title}
                      </Typography>

                      <Box component="ul" sx={{ pl: 0, listStyle: 'none', textAlign: 'left' }}>
                        {threat.items.map((item, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              mb: 1.5,
                              display: 'flex',
                              alignItems: 'flex-start',
                              color: "#444444",
                              lineHeight: 1.6,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                backgroundColor: "#004d99",
                                mt: '10px',
                                mr: 2,
                                flexShrink: 0,
                              }}
                            />
                            {item}
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
