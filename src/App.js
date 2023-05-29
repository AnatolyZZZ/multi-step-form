import './App.css';
import {Step} from '../src/components/Step'
import {Menu} from '../src/components/Menu'
import { Confirmation } from './components/Confirmation';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Step/>
      {/* <Confirmation/> */}
    </div>
  );
}

export default App;
