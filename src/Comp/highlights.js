import * as React from 'react';
import { Paper, Box, CardContent, CardMedia, Typography, Card} from '@mui/material';
import Hitems from './utils/slide.json';
import Carousel from 'react-material-ui-carousel'

function Slide(props) {
  return (
    <Card elevation={20} sx={{backgroundColor:'#f5f5f5',  display: 'flex' }}> 
      <CardMedia
        component="img"
        sx={{ width: '40%', height:'40%' }}
        image= "https://i.ibb.co/n3Xhy7S/ev3.jpg"
        alt="Preview"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">
            {props.item.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" >
            {props.item.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default function about() {
  return (
    <Box id="highlights">
      <Paper elevation={0} className="h-24">
        <Typography gutterBottom className="hover:italic" variant="overline" sx={{fontSize: 'h5.fontSize' ,color: 'secondary.main'}}>
          Information has the power to change any situation
        </Typography>
      </Paper>
      <Box>
        <Typography gutterBottom align="center" variant="h2" sx={{color: 'secondary.main'}}>
          Title here
        </Typography>
        <Box className="grid">
          <Carousel 
            autoplay='true'
            interval='1500'
            stopAutoPlayOnHover='true'
            animation='fade'
            className="w-10/12 place-self-center"
            >
            {
              Hitems.map( (item, i) => <Slide key={i} item={item} /> )
            }
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};
