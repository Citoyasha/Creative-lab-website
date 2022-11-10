import * as React from 'react';
import divider from '../divider.png';
import divider2 from '../divider2.png';
import {Box, Grid, Paper, Typography} from '@mui/material';
export default function about() {
  //todo make function for each grid like events.js
  return (
    <Box sx={{backgroundColor: 'secondary.accent'}} id="departments">
      <Paper elevation={0} className="h-24">
        <Typography gutterBottom className="hover:italic" variant="overline" sx={{color: 'white'}}>
          section depts
        </Typography>
      </Paper>
      <Box sx={{backgroundColor: 'white'}} id="home" className='bg-cover bg-center bg-cover flex grid h-16' style={{backgroundImage: `url(${divider})`}}>
      </Box>
      <Box className="flex grid">
        <Typography gutterBottom style={{borderColor: '#1785c2'}}className="border-8" variant="h2" sx={{color: 'white'}}>
          Our Departments
        </Typography>
          <Grid   
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            colums={3}
            >
            <Grid className="flex grid" xs={4}>
              <Typography gutterBottom variant="h4" sx={{color: 'primary.main'}}>
                Robotics & IoT
              </Typography>
              <img className="place-self-center h-64" src="https://i.ibb.co/hcdS2gQ/Robotics-pana.png" alt="img"/>
              <Typography gutterBottom variant="h6" sx={{color: 'secondary.main'}}>
                tbd, we make robots
              </Typography>
            </Grid>
            <Grid className="flex grid" xs={4}>
              <Typography gutterBottom variant="h4" sx={{color: 'primary.main'}}>
                Developement
              </Typography>
              <img className="place-self-center h-64" src="https://i.ibb.co/2kqhZ6M/Open-source-cuate.png" alt="img"/>
              <Typography gutterBottom variant="h6" sx={{color: 'secondary.main'}}>
                tbd, we make stuff on the web
              </Typography>
            </Grid>
            <Grid className="flex grid" xs={4}>
              <Typography gutterBottom variant="h4" sx={{color: 'primary.main'}}>
                Visuals
              </Typography>
              <img className="place-self-center h-64" src="https://i.ibb.co/PTZ7r5t/Palette-pana.png" alt="img"/>
              <Typography gutterBottom variant="h6" sx={{color: 'secondary.main'}}>
                tbd, we create stuff too
              </Typography>
            </Grid>
          </Grid>
        </Box>
      <Box sx={{backgroundColor: 'white'}} id="home" className='bg-cover bg-center bg-cover flex grid h-16' style={{backgroundImage: `url(${divider2})`}}>
      </Box>
    </Box>

  );
};
