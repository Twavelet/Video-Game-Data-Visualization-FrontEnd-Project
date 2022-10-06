import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import PlatformStats from './components/PlatformStats';
import GlobalSales from './components/GlobalSales';
import SearchBar from './components/SeachBar';

function App() {

  const [videoGames, setVideoGames] = useState([]);
  const [globalSales, setGlobalSales] = useState([])
  const [getById, setGetById] = useState([])

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
      <div>
        
        <GlobalSales parentGlobalSales = {globalSales}/>
        <SearchBar parentData = {videoGames} setGetById = {setGetById}/>
        <PlatformStats parentData = {getById}/>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
