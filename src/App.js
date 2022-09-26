
import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Options from './components/Options/Options';
import Notifications from './components/Notifications/Notifications';
import { AppBar, Typography } from '@mui/material';


// const imageStyle = {
//   marginLeft: '15px'
// }

const appBar = {
  borderRadius: 15,
  margin: '30px 100px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  border: '2px solid black',
}

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}



function App() {

  return (
    <div style={wrapper}>
      <AppBar style={appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">video chat app</Typography>
      </AppBar>
      <VideoPlayer></VideoPlayer>
      <Options>
        <Notifications></Notifications>
      </Options>
    </div>
  );
}

export default App;
