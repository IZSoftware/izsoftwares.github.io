import React from "react";
import ImageCardComponent from "../../components/ImageCard/ImageCardComponent";
import data from "../../components/Data/Imagedata";
import { Box, Grid } from "@mui/material";

const ImageCard = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={6}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} lg={4.5} key={index}> 
            <ImageCardComponent
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageCard;
