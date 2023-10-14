import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveDrawer from './Components/Menu/Menu.jsx'
import Messages from './Pages/Messages/Messages.jsx';
import Explore from './Pages/Explore/Explore.jsx';
import Home from './Pages/Home/Home.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import PageNotFound  from './Pages/PageNotFound/PageNotFound.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx'
import {Routes,Route} from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
  typography: {
    fontFamily: ['Poppins', 'sans - serif'].join(',')
  }

});
export default function App() {
  return (

    <div>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Signup/>
     {/* <ResponsiveDrawer/>
    
      <div>
    <Routes>
            < Route path='/Home' element={<Home />}></Route>
            < Route path='/Explore' element={<Explore />} ></Route>
            < Route path='/Profile' element={<Profile />} ></Route>
            < Route path='/Messages' element={<Messages />} ></Route>
            <Route path='*' element={<PageNotFound />} ></Route>
     </Routes>
     </div> */}
     
    </ThemeProvider>

  </div>

  )
}
