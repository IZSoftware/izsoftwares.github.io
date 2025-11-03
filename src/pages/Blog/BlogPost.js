import React from 'react'
import { Avatar, Box, Grid } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Share from '../../components/share/Share';
import { blogDataDetail } from '../../components/Data/BlogData';
import { useParams } from 'react-router-dom';
import ContactUsOther from '../../components/Main/MainContactUs/ContactUsOther';



export default function BlogPost() {
  const { blogUrl } = useParams();

  // Find the blog post with the matching url
  const selectedBlog = blogDataDetail.find(post => post.blogUrl === blogUrl);

  return (
    <Box sx={{p: 5, width: '100%',  marginTop: '150px'}}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10}>
          <div >
            <h1 style={{textAlign: 'center', color: '#005eb8', fontWeight: 700}}> {selectedBlog.title} </h1>
            <div style={{display:'flex', justifyContent:'center', paddingTop: 20}}>
              <Avatar alt="IZ Img" src={selectedBlog.userProfile} sx={{width: 100, height: 100}}/>
            </div>
            <div style={{textAlign:'center', fontSize: 20, fontWeight:'bold'}}> {selectedBlog.author} </div>
            <div style={{textAlign:'center', fontSize: 15, color:'#6c6e70', lineHeight: 3}}> {selectedBlog.position}, {selectedBlog.company}  </div>
          </div>
          <hr />
          <div>
            <Grid container spacing={2} alignItems="center">
              {/* Software Engineer */}
              <Grid item xs={12} sm={6}>
                <div style={{ color: '#005eb8', fontWeight: 500, textTransform: 'uppercase'}}> {selectedBlog.category} </div>
              </Grid>

              {/* Min read and Published date */}
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
                  {/* Min read */}
                  <Grid item xs={12} sm={3}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <AccessTimeIcon />
                      <div style={{ color: '#6c6e70' }}>{selectedBlog.timeframe} min read</div>
                    </div>
                  </Grid>

                  {/* Published date */}
                  <Grid item xs={12} sm={5}>
                    <div style={{ color: '#6c6e70' }}>{selectedBlog.publishedDate}</div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
      
          <br /> <br />          
          <div>
              {/* Overview*/}
              <span className='hp-title'> Overview </span>

              <div style={{marginTop: 20, textAlign: 'justify'}}>
                {selectedBlog.overviewContent}
              </div>

              <br />    
              <div>
                <Grid container direction="row" justifyContent="flex-start">
                  <Grid item xs={12} sm={10}>
                    <img
                      alt={selectedBlog.title || ''}
                      src={selectedBlog.image}
                      style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
                    />
                  </Grid>
                </Grid>
              </div>

              
              {/* Key Features|Benefits|Reason */}
              
              {/* Render Key Features */}
              {selectedBlog.keyFeatures.length > 0 && (
                <div>
                  <h2 className='hp-title'>Key Features</h2>
                  <ul>
                    {selectedBlog.keyFeatures.map((item, index) => (
                      <li key={index}>
                        <strong>{item.subtitle}</strong>: {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render Key Benefits */}
              {selectedBlog.keyBenefits.length > 0 && (
                <div>
                  <h2 className='hp-title'>Key Benefits</h2>
                  <ul>
                    {selectedBlog.keyBenefits.map((item, index) => (
                      <li key={index}>
                        <strong>{item.subtitle}</strong>: {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render Key Reason */}
              {selectedBlog.keyReason.length > 0 && (
                <div>
                  <h2 className='hp-title'>Key Reason</h2>
                  <ul>
                    {selectedBlog.keyReason.map((item, index) => (
                      <li key={index}>
                        <strong>{item.subtitle}</strong>: {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              
              {/* Render Challenge We Solve */}
              <div>
                <h2 className='hp-title'>Challenge We Solve</h2>
                <div style={{marginTop: 20}}> {selectedBlog.challengeWeSolve.content} </div>
                <ul>
                  {selectedBlog.challengeWeSolve.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

               {/* Contact Us */}
               <br /> <br />
               <h2 style={{fontWeight: 'bolder', color: '#000'}}>Reach Out To Our Expert</h2>
               <ContactUsOther />
          </div>
          
            <Share/>
        </Grid>
      </Grid>
    
    </Box>
  )
}
