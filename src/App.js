import logo from './logo.svg';
import ironhack from './img/ironhack.jpeg'
import './App.css';
import NewComp from './NewComp'

function App() {
  return (
    <div className="App">
      <img src={ironhack} className="App-logo" alt="Ironhack"/>
     
      <h1>Welcome</h1>
   <NewComp/>
    </div>
  );
}

export default App;
