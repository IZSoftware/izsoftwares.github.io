import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import {Box} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

export function BlogCardComponent({post}){
    return (
      <Card sx={{ maxWidth: 420, height: 500}}>
        <CardMedia component="img" alt="Blog Img" height="215" image={post.image}/>
        <CardContent>
          <Box sx={{ color: '#f59000', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase'}}>{post.category}</Box>
          <Typography gutterBottom variant="h5" component="div">
             {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
              {post.content}
          </Typography>
        </CardContent>
        <CardActions style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', paddingLeft: 20,  paddingRight: 25}}>
          <Typography style={{color:'#005eb8', fontSize: '12px', fontWeight: 600}} >{post.author}</Typography>
          <Typography style={{color:"#005eb8", fontSize: '12px', fontWeight: 600}} >{post.date}</Typography>       
        </CardActions>
        <Link to={`/blog/${post.blogUrl}`}  style={{textDecoration:'none', display:'flex', justifyContent:'flex-end', paddingRight: 25}}>
          <ArrowForwardIcon style={{color: '#005eb8', fontSize: '16px', fontWeight: 700}}/>
        </Link>
      </Card>
    );
  }
  
