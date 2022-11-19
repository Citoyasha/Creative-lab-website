import * as React from 'react';
import logo from './images/icon.png';
import {Box, Grid, Typography} from '@mui/material';
export default function about() {
  return (
    <Box className="place-self-center">
      <Box>
          <Grid   
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
            <Grid className="flex grid" xs={2}>
                <img className="place-self-center h-64"src={logo} alt="logo"/>
            </Grid>
            <Grid xs={6}>
              <Box>
               <Typography gutterBottom align="left" variant="h4" sx={{color: 'secondary.main'}}>
                  Creative Lab is an IT and content creation club that is devoted to sharing knowledge, helping young students to integrate themselves into professional life, learn how to collaborate in groups and appreciate team work.
                </Typography>         
                <Typography gutterBottom align="left" variant="h4" sx={{color: 'secondary.main'}}>
                 Our members are persuaded that spreading knowledge is the key to the development of our nation, so join us now and be a stakeholder for the benefit of our country.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </Box>
  );
};
