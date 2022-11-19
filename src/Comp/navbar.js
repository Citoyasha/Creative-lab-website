import * as React from 'react';
import Clab_icon from './utils/images/logoheader.png';
import MenuIcon from '@mui/icons-material/Menu';
import {Fade, Fab, useScrollTrigger, AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button} from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

const drawerWidth = 240;
const navItems = ['Home', 'Highlights', 'Our Teams', 'Events', 'Meet the Staff'];
const navLinks = ['/#home', '/#highlights', '/#teams', '/#events', '/#staff'];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
           <ListItem disablePadding>
            <ListItemButton href={navLinks[0]}>
              <ListItemText primary={navItems[0]} />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
            <ListItemButton href={navLinks[1]}>
              <ListItemText primary={navItems[1]} />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
            <ListItemButton href={navLinks[2]}>
              <ListItemText primary={navItems[2]} />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
            <ListItemButton href={navLinks[3]}>
              <ListItemText primary={navItems[3]} />
            </ListItemButton>
          </ListItem>
           <ListItem disablePadding>
            <ListItemButton href={navLinks[4]}>
              <ListItemText primary={navItems[4]} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

const container = window !== undefined ? () => window().document.body : undefined;

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#home',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

  return (
      <Box display="grid" className="h-16">
      <ElevationScroll {...props}>
      <AppBar component="nav">
        <Toolbar>
          <Button href="#home">
          <img src={Clab_icon} alt="icon" className="h-12"/>
          </Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <Box  
                align="right"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                >
              <Button href={navLinks[0]} sx={{fontSize:'h5.fontSize', color: '#013f62' }}>
                <strong>{navItems[0]}</strong>
              </Button>
              <Button href={navLinks[1]} sx={{fontSize:'h5.fontSize', color: '#013f62' }}>
                <strong>{navItems[1]}</strong>
              </Button>
              <Button href={navLinks[2]} sx={{fontSize:'h5.fontSize',  color: '#013f62' }}>
                <strong>{navItems[2]}</strong>
              </Button>
              <Button href={navLinks[3]} sx={{fontSize:'h5.fontSize', color: '#013f62' }}>
                <strong>{navItems[3]}</strong>
              </Button>
              <Button href={navLinks[4]} sx={{fontSize:'h5.fontSize', color: '#013f62' }}>
                 <strong>{navItems[4]}</strong>
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
    </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      <ScrollTop {...props}>
        <Fab color="primary.main" size="big" aria-label="scroll back to top">
          <UpIcon />
        </Fab>
      </ScrollTop>
    </Box>
)
}

export default NavBar;
