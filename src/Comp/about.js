import * as React from 'react';
import logo from '../icon.png';
import {Box, Grid, Paper, Typography} from '@mui/material';
export default function about() {
  return (
    <Box id="about">
      <Paper elevation={0} className="h-24">
        <Typography gutterBottom className="hover:italic" variant="overline" sx={{fontSize: 'h5.fontSize' ,color: 'secondary.main'}}>
          Information has the power to change any situation
        </Typography>
      </Paper>
      <Box>
          <Grid   
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
            <Grid className="flex grid" xs={4}>
                <img className="place-self-center h-64"src={logo} alt="logo"/>
            </Grid>
            
            <Grid  xs={6}>
              <Typography gutterBottom align="left" variant="h2" sx={{color: 'secondary.main'}}>
                About us
              </Typography>
              <Paper style={{borderColor: '#fff'}} className="border-8 border-white" elevation={3}>
               <Typography gutterBottom align="left" variant="h5" sx={{color: 'secondary.main'}}>
                  Creative Lab is an IT and content creation club that is devoted to sharing knowledge, helping young students to integrate themselves into professional life, learn how to collaborate in groups and appreciate team work.
                </Typography>         
                <Typography gutterBottom align="left" variant="h5" sx={{color: 'secondary.main'}}>
                 Our members are persuaded that spreading knowledge is the key to the development of our nation, so join us now and be a stakeholder for the benefit of our country.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
    </Box>
  );
};
