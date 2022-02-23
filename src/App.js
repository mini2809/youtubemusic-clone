import './App.css';
import {Header} from './Components/Header';
import {Block} from './Components/Block';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="blockbody">
        <Block />
     </div>
    </div>
  );
}

export default App;
