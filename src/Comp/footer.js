import * as React from 'react';
import divider from './utils/images/divider4.png';
import {Box, Typography, IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function footer() {

  return (
  <Box sx={{backgroundColor: 'primary.accent'}}>
    <Box sx={{backgroundColor: 'white'}} className='bg-cover bg-center bg-cover flex grid h-24' style={{backgroundImage: `url(${divider})`}}>
    </Box>
    <Box>
      <Typography align="right" className="pr-20" gutterBottom variant="h6" color="white" >
        © 2022 Yassine Chebbi All rights reserved.
      </Typography>
      <Box align="left" className="pl-20 pb-5">
        <IconButton href="https://www.facebook.com"><FacebookIcon fontSize="large" color="secondary"/></IconButton>
        <IconButton href="https://www.instagram.com"><InstagramIcon fontSize="large" color="secondary"/></IconButton>
        <IconButton href="https://www.youtube.com"><YouTubeIcon fontSize="large" color="secondary"/></IconButton>
      </Box>
    </Box>
  </Box>
  );
};
