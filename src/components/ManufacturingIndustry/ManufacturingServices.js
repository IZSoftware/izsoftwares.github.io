import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import manufacturingData from '../Data/ManufacturingServices.json';

const css = `
  /* ── Outer shell: white card, only right side rounded ── */
  .sli-shell {
    display: flex;
    align-items: stretch;
    border-radius: 0 10px 10px 0;
    overflow: visible;
    box-shadow: 0 6px 32px rgba(0, 28, 70, 0.10);
    background: #ffffff;
    min-height: 440px;
  }

  /* ── Sidebar: no border-radius, no padding, starts at very top ── */
  .sli-sidebar {
    width: 280px;
    flex-shrink: 0;
    background-color: #0b2d55;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    overflow: visible;
    position: relative;
    z-index: 2;
    padding: 0;
    margin: 0;
  }

  /* ── Tabs: no borders, no dividers, just free rows ── */
  .sli-tab {
    position: relative;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  .sli-tab-pill {
    display: flex;
    align-items: center;
    padding: 20px 24px;
    background: transparent;
    transition: background 0.18s ease, transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s ease;
    position: relative;
    z-index: 3;
  }

  .sli-tab:hover .sli-tab-pill {
    background: rgba(255,255,255,0.05);
  }

  /* Active tab protrudes 20px right beyond sidebar edge */
  .sli-tab.active .sli-tab-pill {
    background: #1557a0;
    transform: translateX(20px);
    box-shadow: 6px 0 20px rgba(0, 0, 0, 0.20);
    border-radius: 0 6px 6px 0;
  }

  .sli-tab-label {
    color: #7da8cc;
    font-size: 0.88rem;
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
    font-family: 'Segoe UI', sans-serif;
    letter-spacing: 0.01em;
    transition: color 0.18s ease;
  }

  .sli-tab.active .sli-tab-label {
    color: #ffffff;
    font-weight: 700;
  }

  /* ── Content panel: no top padding gap, title starts at top ── */
  .sli-content {
    flex: 1;
    padding: 36px 52px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;
    border-radius: 0 10px 10px 0;
    overflow: hidden;
  }

  .sli-article {
    display: none;
    flex-direction: column;
    animation: sliFade 0.2s ease;
  }
  .sli-article.active { display: flex; }

  @keyframes sliFade {
    from { opacity: 0; transform: translateY(5px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .sli-article-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #002d5c;
    margin: 0 0 16px 0;
    font-family: 'Segoe UI', sans-serif;
    letter-spacing: -0.2px;
  }

  .sli-article-desc {
    font-size: 1rem;
    color: #4a5568;
    line-height: 1.7;
    margin: 0 0 20px 0;
    font-family: 'Segoe UI', sans-serif;
    max-width: 700px;
  }

  .sli-divider {
    width: 40px;
    height: 4px;
    background: #1557a0;
    border-radius: 2px;
    margin-bottom: 24px;
    flex-shrink: 0;
  }

  /* True 2-column bullet grid */
  .sli-bullets {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 14px;
    column-gap: 40px;
  }

  .sli-bullet-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.95rem;
    font-weight: 500;
    color: #1a2e4a;
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.5;
  }

  .sli-bullet-sq {
    display: inline-block;
    width: 10px;
    height: 10px;
    min-width: 10px;
    background-color: #1557a0;
    border-radius: 2px;
    margin-top: 4px;
    flex-shrink: 0;
  }

  /* ── Mobile ── */
  .sli-mobile-stack {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sli-mobile-card {
    background: #ffffff;
    border-radius: 10px;
    padding: 28px 24px;
    box-shadow: 0 4px 20px rgba(0,28,70,0.08);
    border-left: 4px solid #1557a0;
  }

  @media (max-width: 700px) {
    .sli-bullets { 
      grid-template-columns: 1fr; 
    }
    .sli-content { 
      padding: 28px 24px; 
    }
    .sli-sidebar { 
      width: 240px; 
    }
  }

  @media (max-width: 480px) {
    .sli-content { 
      padding: 24px 20px; 
    }
  }
`;

function ArticleContent({ svc }) {
  return (
    <>
      <h3 className="sli-article-title">{svc.title}</h3>
      <p className="sli-article-desc">{svc.description}</p>
      {svc.bullets && svc.bullets.length > 0 && (
        <>
          <div className="sli-divider" />
          <div className="sli-bullets">
            {svc.bullets.map((bullet, index) => (
              <div key={index} className="sli-bullet-item">
                <span className="sli-bullet-sq" />
                {bullet}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default function ManufacturingServices() {
  const [active, setActive] = useState(manufacturingData.services[0]?.key || 'manufacturing-it-strategy-consulting');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = manufacturingData.services || [];


  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10 }, backgroundColor: '#f0f4f8' }}>
      <style>{css}</style>

      <Container maxWidth={false} sx={{ px: { xs: 3, sm: 4, md: 5 } }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>

            {/* Main Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#002d5c",
                mb: { xs: 3, md: 4 },
                textAlign: { xs: 'left', md: 'left' },
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.2rem',
                  md: '2.5rem',
                  lg: '3rem'
                }
              }}
            >
              {manufacturingData.title}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "#4a5568",
                mb: { xs: 4, md: 6 },
                textAlign: 'justify',
                maxWidth: '1200px',
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                lineHeight: 1.7,
                px: { xs: 1, md: 0 }
              }}
            >
              {manufacturingData.description}
            </Typography>

            {/* Tabbed Interface */}
            {windowWidth > 700 ? (
              <div className="sli-shell">

                {/* Sidebar - Tabs */}
                <div className="sli-sidebar">
                  {services.map((svc) => (
                    <div
                      key={svc.key}
                      className={`sli-tab${active === svc.key ? ' active' : ''}`}
                      onClick={() => setActive(svc.key)}
                    >
                      <div className="sli-tab-pill">
                        <p className="sli-tab-label">{svc.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Content Panel */}
                <div className="sli-content">
                  {services.map((svc) => (
                    <div
                      key={svc.key}
                      className={`sli-article${active === svc.key ? ' active' : ''}`}
                    >
                      <ArticleContent svc={svc} />
                      
                    </div>
                  ))}
                </div>

              </div>
            ) : (
              // Mobile View - Stacked Cards
              <div className="sli-mobile-stack">
                {services.map((svc) => (
                  <div key={svc.key} className="sli-mobile-card">
                    <ArticleContent svc={svc} />
                
                  </div>
                ))}
              </div>
            )}

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}