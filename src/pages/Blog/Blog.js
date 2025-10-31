import React from 'react';
import { BlogCardComponent } from './BlogCardComponent';
import { Grid, Box } from '@mui/material';
import { blogData } from '../../components/Data/BlogData';

export default function Blog() {

  return (
    <Box sx={{p: 5, width: '100%',  marginTop: '90px'}}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10}>
          <h1 className='hp-title'>Blog</h1>
          <br />
          <Grid container spacing={4} direction="row" justifyContent="flex-start" alignItems="center">
            {blogData.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                  <BlogCardComponent post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
