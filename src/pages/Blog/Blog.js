import React, { useEffect, useState } from 'react';
import { BlogCardComponent } from './BlogCardComponent';
import { Grid, Box, CircularProgress, Typography } from '@mui/material';
import { fetchAllBlogPosts } from '../../api/service';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllBlogPosts()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 20 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 5, mt: 10 }}>
        <Typography color="error">Failed to load posts: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 5, width: '100%', marginTop: '90px' }}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10}>
          <h1 className='hp-title'>Blog</h1>
          <br />
          <Grid container spacing={4} direction="row" justifyContent="flex-start" alignItems="center">
            {posts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <BlogCardComponent post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}