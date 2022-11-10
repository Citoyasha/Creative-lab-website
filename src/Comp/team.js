import * as React from 'react';
import {Avatar, Box, Grid, Typography} from '@mui/material';
import clab from '../iconC.png';

const presObj = [
  {
    name: "Ons Chahed",
    pos: "President",
    pic: clab
  }
]

const managerObj = [
  {
    name: "Ilyes Hammouda",
    pos: "Event Manager",
    pic: clab
  },  
  {
    name: "Sarra Besrour",
    pos: "Agenda Manager",
    pic: clab
  },
  {
    name: "Zeineb Nahdi",
    pos: "Team Manager",
    pic: clab
  },
  {
    name: "Chaima Abdellaoui",
    pos: "Community Manager",
    pic: clab
  }
]

const leaderObj = [
  {
    name: "Ahmed Hamza Guissem",
    pos: "Visuals Team Leader",
    pic: clab
  },  
  {
    name: "Med Yassin Allaoui",
    pos: "Development Team Leader",
    pic: clab
  },
  {
    name: "Aziz Rezgui",
    pos: "Robotics & Iot Team Leader",
    pic: clab
  }
]



function Member(props){
  return(
<Grid className="py-10 flex grid" xs={3}>
    <Grid   
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      colums={2}
      >
      <Grid className="flex grid" xs={4}>
        <Avatar sx={{ width: 112, height: 112 }} alt={props.item.name} src={props.item.pic} />
      </Grid>
      <Grid className="flex grid" xs={4}>
        <Typography variant="h4" sx={{color: 'secondary.main'}}>
          {props.item.name}
        </Typography>
        <Typography variant="subtitle1" sx={{color: '#000'}}>
          {props.item.pos}
        </Typography>
      </Grid>
    </Grid>
 </Grid>
  )
}

export default function events() {
  return (
    <Box id="team" className="flex grid" sx={{backgroundColor: '#fff'}}>
      <Box >
        <Typography gutterBottom style={{borderColor: '#fff'}}className="border-8" variant="h2" sx={{color: 'primary.accent'}}>
          Meet the Team
        </Typography>
          <Grid   
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            colums={1}
            >
            <Member item={presObj[0]}/>
          </Grid>
          <Grid   
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            colums={4}
            >
            {managerObj.map( (item, i) => <Member key={i} item={item} />)}
          </Grid>
          <Grid   
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            colums={3}
            >
            {leaderObj.map( (item, i) => <Member key={i} item={item} />)}
          </Grid>
        </Box>
    </Box>

  );
};
