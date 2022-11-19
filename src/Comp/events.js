import React, {useState} from 'react';
import {ImageList, ImageListItem, Button, Dialog, DialogActions, DialogContent, Slide, TransitionProps, Card, CardMedia, CardContent, CardActionArea, Box, Grid, Typography} from '@mui/material';
import divider from './utils/images/divider3.png';
import itemData from './utils/images.json';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

function ImagesList(){
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default function Events() {

  function Cards(props){

    return(
      <Grid className="flex grid" xs={4}>
        <Card className="place-self-center" sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={handleClickOpen}>
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
          </CardActionArea>
        </Card>
      </Grid>
    )
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="flex grid" sx={{backgroundColor: 'secondary.main'}}>
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
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogContent>
                <ImagesList/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Box>
      <Box sx={{backgroundColor: 'white'}} id="home" className='bg-cover bg-center bg-cover flex grid h-16' style={{backgroundImage: `url(${divider})`}}>
      </Box>
    </Box>
  );

};
