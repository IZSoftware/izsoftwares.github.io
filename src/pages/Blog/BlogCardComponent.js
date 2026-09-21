import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { Box, Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Link, useNavigate } from 'react-router-dom';

export function BlogCardComponent({ post }) {
  const navigate = useNavigate();
  const goToPost = () => navigate(`/blog/${post.blogUrl}`);

  return (
    <Card
      onClick={goToPost}
      sx={{
        maxWidth: 420,
        height: 520,
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s, transform 0.2s',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-2px)',
        },
      }}
    >
      <CardMedia
        component="img"
        alt={post.title || 'Blog image'}
        height="215"
        image={post.image}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            color: '#f59000',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          {post.category}
        </Box>

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 700,
            color: '#005eb8',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {post.content}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 2,
          paddingRight: 2,
          paddingBottom: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{ color: '#005eb8', fontSize: '12px', fontWeight: 600 }}
          >
            {post.author}
          </Typography>
          <Typography
            sx={{ color: '#6c6e70', fontSize: '11px', fontWeight: 500 }}
          >
            {post.date}
          </Typography>
        </Box>

        <Link
          to={`/blog/${post.blogUrl}`}
          onClick={(e) => e.stopPropagation()} // don't double-fire the card click
          style={{ textDecoration: 'none' }}
        >
          <Button
            size="small"
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              color: '#005eb8',
            }}
          >
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}