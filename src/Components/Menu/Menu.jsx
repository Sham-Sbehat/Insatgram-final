import * as React from 'react';
import PropTypes from 'prop-types';
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
//import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
//import IconButton from '@mui/material/IconButton';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
//import {Route,Routes} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import SlidshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import Messages from '../Messages/Messages';
// import Explore from '../Explore/Explore';
// import Home from '../Home/Home.jsx';
// import Profile from '../Profile/Profile.jsx';
// import PageNotFound  from '../PageNotFound/PageNotFound.jsx';
// import {Routes,Route} from 'react-router-dom';



const drawerWidth = 250;
function ResponsiveDrawer(props) {
const { window } = props;
const [Open, setOpen] = React.useState(false);
// const handleDrawerToggle = () => {
//     setOpen(!Open);
// };
const drawer = (
    <div>
      <Toolbar style={{marginTop:-20}}/>
      <img src="images/instagram_Logo.png" alt='instagram-logo' width={100} style={{marginLeft:18,marginBottom:8}}/>
      <List>
        {['Home', 'Search', 'Explore', 'Reels','Messages','Notification','Create','Sham Sbehat'].map((text, index) => (
        <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon style={{ color: "white"}}>
          <Link  to='Home'> {text === "Home" && <HomeIcon style={{color:'white'}} />}</Link>
          {text === "Search" && <SearchIcon />}
          <Link to='Explore'> {text === "Explore" && <ExploreIcon style={{color:'white'}}/>}</Link>
          {text === "Reels" && <SlidshowIcon />}
          <Link to='Messages'> {text === "Messages" && <ChatIcon style={{color:'white'}} />}</Link>
          {text === "Notification" && <FavoriteBorderIcon />}
          {text === "Create" && < AddCircleOutlineIcon />}
          <Link to='Profile'> {text ==="Sham Sbehat" && <img src="images/Ellipse.png" alt='myprofilepic'/>}</Link>
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
        ))}
        <ListItem>
        <MenuIcon style={{fontSize:"25px", position:"absolute",bottom:"-180px",left:"14px" ,color:"white"}}/>
            <p  style={{fontSize:"16px",position:"absolute",bottom:"-195px",left:"50px" ,color:"#ffffff"}}>Menu</p>
        </ListItem>
      </List>
    </div>
);
const container = window !== undefined ? () => window().document.body : undefined;
  return (
<Box sx={{ display: 'flex' }}>
  <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">

<Drawer container={container} variant="temporary" open={Open} onClose={() => setOpen(!Open)}
    ModalProps={{ keepMounted: true, }}
    sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
   
>
    {drawer}
</Drawer>
<Drawer
    variant="permanent"
    sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
   
    open
>
    {drawer}
</Drawer>
  </Box>
  {/* <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} >
<BrowserRouter >
    <Routes>
       
        < Route path='/Explore' element={<Explore />} />
       < Route path='/Messages' element={<Messages />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
</BrowserRouter>

  </Box> */}
</Box>
);
}
ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default ResponsiveDrawer;
