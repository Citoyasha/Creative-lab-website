import * as React from 'react';
import {Card, CardMedia, CardContent, Box, Grid, Typography} from '@mui/material';
import divider from '../divider3.png';

const eventsObj = [
  {
    pic: "https://i.ibb.co/476L20h/ev1.jpg",
    title: "رمضانا يزيد يحلى بكبارنا",
    date: "25 March 2022",
    place: "دار المسنين بمنوب · تونس"
  },
  {
    pic: "https://i.ibb.co/S3G6h7q/274095718-4871448316234237-3727383648830474684-n.jpg",
    title: "Art Valley",
    date: "25 April 2022",
    place: "Riadh Palms Hôtel Sousse"
  },
  {
    pic: "https://i.ibb.co/n3Xhy7S/ev3.jpg",
    title: "CREATIVE LEARNING",
    date: "25 April 2022",
    place: "Marina Palace"
  }
]

function Cards(props){
  return(
<Grid className="flex grid" xs={4}>
    <Card className="place-self-center" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="60"
          image={props.item.pic}
          alt="event_pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary" >
            {props.item.date}
          </Typography>
          <Typography sx={{ fontSize: 14 }} component="div">
            {props.item.place}  
          </Typography>
        </CardContent>
    </Card>
 </Grid>
  )
}

export default function events() {
  return (
    <Box className="flex grid" sx={{backgroundColor: 'secondary.main'}} id="events">
      <Box >
        <Typography gutterBottom style={{borderColor: '#013f62'}} className="border-8" variant="h2" sx={{ color: 'primary.main'}}>
          Recent Events
        </Typography>
          <Grid   
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            colums={3}
            >
            {eventsObj.map( (item, i) => <Cards key={i} item={item} />)}
          </Grid>
        </Box>
      <Box sx={{backgroundColor: 'white'}} id="home" className='bg-cover bg-center bg-cover flex grid h-16' style={{backgroundImage: `url(${divider})`}}>
      </Box>
    </Box>

  );
};
