import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  ChatBubbleOutline,
  CloudUpload,
  Build,
  AccountTree,
  Star,
  Code,
  Storage,
  BarChart,
  Transform,
  Devices,
  Security,
  Error as ErrorIcon,
  CheckCircle as CheckIcon,
  ExpandMore,
  People,
  Settings,
  Assessment,
  GroupWork,
  Warning,
  TrendingUp,
  Description,
  Shield,
  Timeline,
  Calculate,
} from "@mui/icons-material";

import Consulting from "../../resources/images/Modernization/consulting.svg";
import CloudMigration from "../../resources/images/Modernization/migration_to_cloud.svg";
import Reengineering from "../../resources/images/Modernization/re-engineering.svg";
import Rearchitecting from "../../resources/images/Modernization/architecture-design.svg";
import Containerization from "../../resources/images/Modernization/containerization.svg";
import CrossPlatform from "../../resources/images/Modernization/cross-platform.svg";
import content from "../../components/Data/Modernization.json";
import ContactForm from "../../components/Main/MainContactUs/ContactUsHome";
import Share from "../../components/share/Share";

const iconMap = {
  ChatBubbleOutline: <ChatBubbleOutline sx={{ fontSize: 60, color: "#004d99" }} />,
  CloudUpload: <CloudUpload sx={{ fontSize: 60, color: "#004d99" }} />,
  Build: <Build sx={{ fontSize: 60, color: "#004d99" }} />,
  AccountTree: <AccountTree sx={{ fontSize: 60, color: "#004d99" }} />,
  Code: <Code sx={{ fontSize: 60, color: "#004d99" }} />,
  Storage: <Storage sx={{ fontSize: 60, color: "#004d99" }} />,
  BarChart: <BarChart sx={{ fontSize: 60, color: "#004d99" }} />,
  Transform: <Transform sx={{ fontSize: 60, color: "#004d99" }} />,
  Devices: <Devices sx={{ fontSize: 60, color: "#004d99" }} />,
  Security: <Security sx={{ fontSize: 60, color: "#004d99" }} />,
  People: <People sx={{ fontSize: 60, color: "#004d99" }} />,
  Settings: <Settings sx={{ fontSize: 60, color: "#004d99" }} />,
  Assessment: <Assessment sx={{ fontSize: 60, color: "#004d99" }} />,
  GroupWork: <GroupWork sx={{ fontSize: 60, color: "#004d99" }} />,
  Warning: <Warning sx={{ fontSize: 60, color: "#004d99" }} />,
  TrendingUp: <TrendingUp sx={{ fontSize: 60, color: "#004d99" }} />,
  Description: <Description sx={{ fontSize: 60, color: "#004d99" }} />,
  Shield: <Shield sx={{ fontSize: 60, color: "#004d99" }} />,
  Timeline: <Timeline sx={{ fontSize: 60, color: "#004d99" }} />,
  Calculate: <Calculate sx={{ fontSize: 60, color: "#004d99" }} />,
};

const competencySvgMap = {
  "consulting.svg": Consulting,
  "migration_to_cloud.svg": CloudMigration,
  "re-engineering.svg": Reengineering,
  "architecture-design.svg": Rearchitecting,
  "containerization.svg": Containerization,
  "cross-platform.svg": CrossPlatform,

};

const SquareBullet = () => (
  <Box component="span" sx={{ display: "inline-block", width: 8, height: 8, backgroundColor: "#005eb8", marginRight: 1.5, marginTop: 1.2, flexShrink: 0 }} />
);

export default function LegacyModernization() {
  return (
    <>
      {/* HERO */}
      <Box sx={{ 
        background: "linear-gradient(to right, #004d99, #002d5c)", 
        color: "white", 
        minHeight: { xs: "85vh", md: "95vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 4, md: 6 }
      }}>
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 } }}>
          <Grid container spacing={6} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={9.5}>
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: "bold", fontSize: { xs: "2.8rem", md: "4rem" }, lineHeight: 1.2 }}>
                    {content.hero?.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 4, mb: 6, lineHeight: 1.7, opacity: 0.95, fontSize: { xs: "1.1rem", md: "1.4rem" } }}>
                    {content.hero?.description}
                  </Typography>
                  <Button variant="contained" size="large" sx={{ 
                    backgroundColor: "#fff", 
                    color: "#005EB8", 
                    "&:hover": { backgroundColor: "#004d99" }, 
                    px: 6, 
                    py: 2, 
                    fontWeight: "bold", 
                    fontSize: "1.3rem",
                    textTransform: "none", 
                    borderRadius: 2 
                  }}>
                    {content.hero?.buttonText}
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    height: { xs: 380, sm: 500, md: 620 }, 
                    borderRadius: 3, 
                    overflow: "hidden", 
                    bgcolor: "rgba(255,255,255,0.1)",
                    boxShadow: "0 16px 50px rgba(0,0,0,0.4)"
                  }}>
                    <img 
                      src={content.hero?.image} 
                      alt="Application Modernization" 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* WHY PARTNER */}
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: "#000", textAlign: { xs: "center", md: "start" } }}>
              {content.whyPartner?.title}
            </Typography>
            <List sx={{ columns: { xs: 1, md: 2 }, columnGap: 6 }}>
              {content.whyPartner?.points?.map((point, i) => (  
                <ListItem key={i} sx={{ alignItems: "flex-start", py: 1.2, pl: 0 }}>
                  <SquareBullet />
                  <ListItemText primary={point} primaryTypographyProps={{ fontSize: "1.05rem", lineHeight: 1.7, textAlign: "justify" }} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>

<Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
  <Grid container spacing={4} justifyContent="center">
    <Grid item xs={12} md={9.5}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: "#000", textAlign: { xs: "center", md: "start" } }}>
        {content.competencies?.title}
      </Typography>
      <Grid container spacing={4}>
        {content.competencies?.cards?.map((card, i) => {
          const SvgComponent = competencySvgMap[card.image];

          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height: "100%", textAlign: "center", p: 4, boxShadow: 3 }}>
                <Box sx={{ mb: 3, display: "flex", justifyContent: "center", alignItems: "center", height: 80 }}>
                  {SvgComponent ? (
                    <img 
                      src={SvgComponent} 
                      alt={card.title}
                      style={{ width: 70, height: 70 }}
                    />
                  ) : (
                    <Box sx={{ width: 70, height: 70, bgcolor: "#f0f0f0", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Typography variant="caption" color="text.secondary">Missing</Typography>
                    </Box>
                  )}
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#004d99" }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "pre-line", lineHeight: 1.8, textAlign: "justify" }}>
                  {card.description}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  </Grid>
</Container>

      {/* BENEFITS */}
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: "#000", textAlign: { xs: "center", md: "start" } }}>
              {content.benefits?.title}
            </Typography>
            <Grid container spacing={4}>
              {content.benefits?.cards?.map((card, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card sx={{ height: "100%", textAlign: "center", p: 4, boxShadow: 3 }}>
                    <Box sx={{ mb: 3 }}>
                      <Star sx={{ fontSize: 60, color: "#ffd700" }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
                      {card.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* CLOUD MIGRATION */}
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={9.5}>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: "#000", textAlign: { xs: "center", md: "start" } }}>
              {content.cloudMigration?.title}
            </Typography>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <List>
                  {content.cloudMigration?.leftColumn?.map((t, i) => (
                    <ListItem key={i} sx={{ alignItems: "flex-start", py: 1.4, pl: 0 }}>
                      <SquareBullet />
                      <ListItemText primary={t} primaryTypographyProps={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <List>
                  {content.cloudMigration?.rightColumn?.map((t, i) => (
                    <ListItem key={i} sx={{ alignItems: "flex-start", py: 1.4, pl: 0 }}>
                      <SquareBullet />
                      <ListItemText primary={t} primaryTypographyProps={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify", fontWeight: 500 }} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* CASE STUDY */}
      {content.caseStudy && (
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: "#000", textAlign: { xs: "center", md: "start" } }}>
                {content.caseStudy.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.7, textAlign: "justify" }}>
                {content.caseStudy.description}
              </Typography>
              <Box sx={{ border: "1px solid #e0e0e0", borderRadius: 2, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "#004d99" }}>
                        <TableCell sx={{ color: "white", fontWeight: "bold", py: 3 }}>Legacy Challenges</TableCell>
                        <TableCell sx={{ color: "white", fontWeight: "bold", py: 3 }}>IZSoftwares's Solution</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {content.caseStudy.challenges.map((challenge, i) => (
                        <TableRow key={i} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                          <TableCell sx={{ py: 3, pl: 4, borderRight: "1px solid #e0e0e0" }}>
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                              <ErrorIcon sx={{ color: "#d32f2f", fontSize: 22, mt: 0.3 }} />
                              <Typography sx={{ fontSize: "1rem", lineHeight: 1.6 }}>{challenge}</Typography>
                            </Box>
                          </TableCell>
                          <TableCell sx={{ py: 3, pl: 4 }}>
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                              <CheckIcon sx={{ color: "#2e7d32", fontSize: 22, mt: 0.3 }} />
                              <Typography sx={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: 500 }}>
                                {content.caseStudy.solutions[i]}
                              </Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}

      {/* 4-STEP STRATEGY */}
      {content.modernizationStrategy && (
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: "#000", textAlign: { xs: "center", md: "start" } }}>
                {content.modernizationStrategy.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.7, textAlign: "justify" }}>
                {content.modernizationStrategy.description}
              </Typography>
              <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
                <img src={content.modernizationStrategy.image} alt="4-Step Strategy" style={{ width: "100%", height: "auto", display: "block" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}

      {/* METHODOLOGY */}
      {content.methodology && (
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 } }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 4, color: "#000", textAlign: { xs: "center", md: "start" } }}>
                {content.methodology.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.7, textAlign: "justify" }}>
                {content.methodology.description}
              </Typography>
              <Grid container spacing={4}>
                {content.methodology.cards.map((card, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Card sx={{ height: "100%", p: 4, boxShadow: 3, textAlign: "center" }}>
                      <Box sx={{ mb: 3, color: "#004d99" }}>{iconMap[card.icon]}</Box>
                      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#004d99" }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify", lineHeight: 1.7 }}>
                        {card.description}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}

      {/* TIMELINES & COSTS */}
      {content.timelines && (
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: "#000", textAlign: { xs: "center", md: "start" } }}>
                {content.timelines.title}
              </Typography>
              <Grid container spacing={6} justifyContent="center">
                {content.timelines.items.map((item, i) => (
                  <Grid item xs={12} sm={4} key={i}>
                    <Box sx={{ textAlign: "center", p: 4, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
                      <Typography variant="h3" sx={{ color: "#004d99", fontWeight: "bold" }}>
                        {item.duration}
                      </Typography>
                      <Typography variant="body1" sx={{ mt: 2, lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Typography variant="body1" sx={{ mt: 6, mb: 4, lineHeight: 1.7, textAlign: "justify" }}>
                {content.timelines.costDescription}
              </Typography>
              <List>
                {content.timelines.costFactors.map((factor, i) => (
                  <ListItem key={i} sx={{ py: 0.5 }}>
                    <SquareBullet />
                    <ListItemText primary={factor} primaryTypographyProps={{ textAlign: "justify" }} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      )}

     {/* DIGITAL TRANSFORMATION vs APP MODERNIZATION */}
{content.difference && (
  <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 } }}>
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={9.5}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: "#000", textAlign: { xs: "center", md: "start" } }}>
          {content.difference.title}
        </Typography>
        <Box sx={{ border: "1px solid #e0e0e0", borderRadius: 2, overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#004d99" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold", py: 3, fontSize: "1.1rem" }}></TableCell>
                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", py: 3, fontSize: "1.1rem" }}>Digital Transformation</TableCell>
                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", py: 3, fontSize: "1.1rem" }}>Application Modernization</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {content.difference.rows.map((row, i) => (
                  <TableRow key={i} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                    <TableCell sx={{ 
                      fontWeight: "bold", 
                      bgcolor: i % 2 === 0 ? "#f8f9fa" : "white", 
                      py: 3,
                      fontSize: "1rem"
                    }}>
                      {row.label}
                    </TableCell>
                    <TableCell sx={{ 
                      whiteSpace: "pre-line", 
                      bgcolor: i % 2 === 0 ? "#f8f9fa" : "white", 
                      py: 3,
                      fontSize: "0.95rem",
                      lineHeight: 1.6
                    }}>
                      {row.digital}
                    </TableCell>
                    <TableCell sx={{ 
                      whiteSpace: "pre-line", 
                      bgcolor: i % 2 === 0 ? "#f8f9fa" : "white", 
                      py: 3,
                      fontSize: "0.95rem",
                      lineHeight: 1.6
                    }}>
                      {row.modernization}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  </Container>
)}
      {/* FAQ */}
      {content.faq && (
        <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: { xs: 8, md: 12 }, bgcolor: "#f8f9fa" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={9.5}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 6, color: "#000", textAlign: { xs: "center", md: "start" } }}>
                {content.faq.title}
              </Typography>
              {content.faq.questions.map((q, i) => (
                <Accordion key={i} sx={{ mb: 2, boxShadow: "none", border: "1px solid #e0e0e0", borderRadius: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMore sx={{ color: "#004d99" }} />}>
                    <Typography fontWeight="medium" sx={{ color: "#004d99" }}>{q.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ textAlign: "justify", lineHeight: 1.7, color: "text.secondary" }}>{q.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      )}

      {/* CONTACT AND SHARE */}
      <Container maxWidth={false} sx={{ px: { xs: 5, sm: 3, md: 0 }, py: 8, backgroundColor: "#f8f9fa" }}>
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} md={12}>
            <ContactForm />
            <Box sx={{ width: "100%" }}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={9.5}>
                  <Share />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
