import React, {useState} from 'react';
import bpic from './utils/images/banner2.jpg';
import bpic2 from './utils/images/banner.jpg';
import cicon from './utils/images/clabtransparent.png'
import {Box} from '@mui/material';
import About from './utils/about.js';

export default function Banner() {

  const [hide, setHide] = useState(false);
  const [bg, setBG] = useState(bpic);

  return (
    <Box id="home" 
        className='bg-scroll bg-center bg-no-repeat bg-cover flex grid h-screen' 
        style={{backgroundImage: `url(${bg})`}} 
        onPointerEnter={() => {setBG(bpic2); setHide(true);}} 
        onPointerLeave={() => {setBG(bpic); setHide(false);}}
        >
    {!hide && ( <img src={cicon} alt="icon" className="h-96 place-self-center"  /> )}
    {hide && ( <About/> )}
    </Box>
  );
};
