import * as React from 'react';
import bpic from '../banner2.jpg';
import cicon from '../clabtransparent.png'
import {Box} from '@mui/material';
export default function banner() {
  return (
    <Box id="home" className='bg-scroll bg-center bg-no-repeat bg-cover flex grid h-screen' style={{backgroundImage: `url(${bpic})`}}>
      <img src={cicon} alt="icon" className="h-96 place-self-center hover:opacity-0"/>
    </Box>
  );
};
