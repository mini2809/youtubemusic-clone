import './App.css';
import {Header} from './Components/Header';
import {Block} from './Components/Block';
import { Player } from './Components/Player';
import {useState} from 'react';

function App() {
  const [selectedSong, setSelectedSong] = useState({});
  const [playerVisible,setPlayerVisible] = useState(false);
  return (
    <div className="App">
     <Header />
     <div className="blockbody">
        <Block setSelectedSong={setSelectedSong} setPlayerVisible={setPlayerVisible}/>
     </div>
      {playerVisible && <Player name={selectedSong.name} image={selectedSong.image} artist ={selectedSong.artist}/>}
    </div>
  );
}

export default App;
