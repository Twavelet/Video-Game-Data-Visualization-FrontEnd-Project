import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import PlatformStats from './components/PlatformStats';
import GlobalSales from './components/GlobalSales';

function App() {

  const [videoGames, setVideoGames] = useState([]);
  const [globalSales, setGlobalSales] = useState([])

  useEffect(() => {
    getVideoGames() && getGlobalSales();
  }, []);

  async function getVideoGames() {
    try{
      // debugger;
      const response = await axios.get("http://localhost:8080/games");
      console.log(response.data)
      setVideoGames(response.data);

    } catch(error){
      console.log(error.response)
    }
  }

  async function getGlobalSales() {
    try{
      // debugger;
      const response = await axios.get("http://localhost:8080/platform");
      console.log(response.data)
      setGlobalSales(response.data);

    } catch(error){
      console.log(error.response)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <div>
          <PlatformStats videoGames = {videoGames}/>
          <GlobalSales parentGlobalSales = {globalSales}/>


        </div>
      </div>
    </div>
  );
}

export default App;
