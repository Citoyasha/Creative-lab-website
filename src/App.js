import './App.css';
import oregano from "@fontsource/oregano";
import Navbar from './Comp/navbar.js';
import Banner from './Comp/banner.js';
import About from './Comp/about.js';
import Dept from './Comp/dept.js';
import Ev from './Comp/events.js';
import Team from './Comp/team.js';
import Footer from './Comp/footer.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fbf700',
      accent: '#fd266c'
    },
    secondary: {
      main: '#013f62',
      accent: '#1785c2'
    }
  },
  typography : {
    fontFamily : 'Oregano'
  },
    components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Oregano';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${oregano});
        }
      `,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Banner/>
        <About/>
        <Dept/>
        <Ev/>
        <Team/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
