import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import PlatformStats from './components/PlatformStats';
import GlobalSales from './components/GlobalSales';
import SearchBar from './components/SeachBar';
import UniqueFilter from './components/UniqueFilterChart';
import MostSuccessfulPublishers from './components/MostSuccessfulPublishers';

function App() {

  const [videoGames, setVideoGames] = useState([]);
  const [globalSales, setGlobalSales] = useState([])
  const [getById, setGetById] = useState([])
  const [uniqueFilter, setUniqueFilter] = useState([])
  const [mostSuccessfulPublisher, setMostSuccessfulPublisher] = useState([])
  

  useEffect(() => {
    getVideoGames() && getGlobalSales() && getUniqueFilter() && getMostSuccessfulPublisher();
  }, []);

  async function getVideoGames() {
    try{
      const response = await axios.get("http://localhost:8080/games");
      console.log(response.data)
      setVideoGames(response.data);

    }
    catch(error){
      console.log(error.response)
    }
  }

    async function getGlobalSales() {
      try{
        const response = await axios.get("http://localhost:8080/platform");
        console.log(response.data)
        setGlobalSales(response.data);

      }
      catch(error){
        console.log(error.response)
      }
    }
    async function getUniqueFilter() {
      try{
        // debugger;
        const response = await axios.get("http://localhost:8080/ranked_publisher");
        console.log(response.data)
        setUniqueFilter(response.data);

      }
      catch(error){
        console.log(error.response)
      }
    }

    async function getMostSuccessfulPublisher() {
      try{
        // debugger;
        const response = await axios.get("http://localhost:8080/copies");
        console.log(response.data)
        setMostSuccessfulPublisher(response.data);

      }
      catch(error){
        console.log(error.response)
      }
    }


  return (
    <div className="App">
      <div>
        
        <GlobalSales parentGlobalSales = {globalSales}/>
        <SearchBar parentData = {videoGames} setGetById = {setGetById}/>
        <PlatformStats parentData = {getById}/>
        <UniqueFilter parentUniqueFilter = {uniqueFilter}/>
        <MostSuccessfulPublishers parentPublisher = {mostSuccessfulPublisher}/>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
