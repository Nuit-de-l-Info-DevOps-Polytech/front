import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Chip } from '@mui/material';

export default function RescueSummary({ image, name, shortDescription, type }: { image: string; name: string; shortDescription: string; type: string; }) {
  return (
    <Box sx={{ boxShadow:"1", padding: "12px" }}>
      <Box sx={{ display: "flex" }}>
        <img
          src={image}
          alt="image sauvetage"
          height="140"
          width="290"
        />
        <Box sx={{ paddingLeft: "1em", width:"100%" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Chip label={type} size="small" variant="outlined" />
            </Box>
            <Typography variant="body2" color="text.secondary">
            {shortDescription}
            </Typography>
        </Box>
      </Box>
    </Box>
  );
}
