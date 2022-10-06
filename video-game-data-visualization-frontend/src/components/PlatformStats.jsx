import axios from 'axios';
import { useEffect } from "react";


const PlatformStats = (props) => {

    useEffect(() => {
        props.parentData.map(async (el) => {
            return(
                await axios.get(`http://localhost:8080/games/${el.id}`)
            )
        });
      }, []);



    return (
        <table className="table table-striped bg-info p-2 text-dark bg-opacity-10">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Rank</th>
            <th scope="col">Platform</th>
            <th scope="col">Year</th>
            <th scope="col">Genre</th>
            <th scope="col">Publisher</th>
            <th scope="col">Global Sales</th>
          </tr>
        </thead>
        {props.parentData.map((entry, index) => {
          return(
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.game_rank}</td>
              <td>{entry.platform}</td>
              <td>{entry.year}</td>
              <td>{entry.genre}</td>
              <td>{entry.publisher}</td>
              <td>{entry.globalsales}</td>
            </tr>
          )
        })}
    </table>
    );
}
export default PlatformStats