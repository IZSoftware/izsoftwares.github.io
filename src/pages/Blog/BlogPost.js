import React, { useEffect, useState } from 'react';
import { Avatar, Box, Grid, CircularProgress, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Share from '../../components/share/Share';
import { useParams } from 'react-router-dom';
import ContactUsOther from '../../components/Main/MainContactUs/ContactUsOther';
import Persona from '../../resources/images/IZ.svg';
import { fetchBlogPostBySlug } from '../../api/service';

export default function BlogPost() {
  const { blogUrl } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPostBySlug(blogUrl)
      .then((data) => {
        if (!data) setError('Post not found');
        else setPost({ ...data, userProfile: Persona });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [blogUrl]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 20 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Box sx={{ p: 5, mt: 15, textAlign: 'center' }}>
        <Typography variant="h5" color="error">
          {error || 'Post not found'}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 5, width: '100%', marginTop: '150px' }}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10}>
          <div>
            <h1 style={{ textAlign: 'center', color: '#005eb8', fontWeight: 700 }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
              <Avatar alt="IZ Img" src={post.userProfile} sx={{ width: 100, height: 100 }} />
            </div>
            <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
              {post.author}
            </div>
            <div style={{ textAlign: 'center', fontSize: 15, color: '#6c6e70', lineHeight: 3 }}>
              {post.position}, {post.company}
            </div>
          </div>
          <hr />
          <div>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <div style={{ color: '#005eb8', fontWeight: 500, textTransform: 'uppercase' }}>
                  {post.category}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                  <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <AccessTimeIcon />
                      <div style={{ color: '#6c6e70' }}>{post.timeframe} min read</div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <div style={{ color: '#6c6e70' }}>{post.publishedDate}</div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>

          <br /> <br />
          <div>
            <span className='hp-title'> Overview </span>
            <div style={{ marginTop: 20, textAlign: 'justify' }}>
              {post.overviewContent}
            </div>

            <br />
            <div>
              <Grid container direction="row" justifyContent="flex-start">
                <Grid item xs={12} sm={10}>
                  <img
                    alt={post.title || ''}
                    src={post.image}
                    style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                  />
                </Grid>
              </Grid>
            </div>

            {post.keyFeatures?.length > 0 && (
              <div>
                <h2 className='hp-title'>Key Features</h2>
                <ul>
                  {post.keyFeatures.map((item, index) => (
                    <li key={index}>
                      <strong>{item.subtitle}</strong>: {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.keyBenefits?.length > 0 && (
              <div>
                <h2 className='hp-title'>Key Benefits</h2>
                <ul>
                  {post.keyBenefits.map((item, index) => (
                    <li key={index}>
                      <strong>{item.subtitle}</strong>: {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.keyReason?.length > 0 && (
              <div>
                <h2 className='hp-title'>Key Reason</h2>
                <ul>
                  {post.keyReason.map((item, index) => (
                    <li key={index}>
                      <strong>{item.subtitle}</strong>: {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.challengeWeSolve && (
              <div>
                <h2 className='hp-title'>Challenge We Solve</h2>
                <div style={{ marginTop: 20 }}>{post.challengeWeSolve.content}</div>
                <ul>
                  {post.challengeWeSolve.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <br /> <br />
            <h2 style={{ fontWeight: 'bolder', color: '#000' }}>Reach Out To Our Expert</h2>
            <ContactUsOther />
          </div>

          <Share />
        </Grid>
      </Grid>
    </Box>
  );
}