import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageI from '../images/contact.jpg'
export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ImageI}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Portfolio Site
        </Typography>
        <Typography variant="body2" color="text.secondary">
         This Portfolio was built with responsivity in mind but 
         it can do much more dont worry
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Code</Button>
        <Button variant="outlined">View App</Button>
      </CardActions>
    </Card>
  );
}
