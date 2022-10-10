import axios from "axios";
import { useEffect, useState } from "react";
import ConsoleGameCopies from "./ConsoleGameCopies";

const PlatformStats = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true)
    props.parentData.map(async (el) => {
      return await axios.get(`http://localhost:8080/games/${el.id}`);
    });
  }, [props.parentData]);

 

  return (
    <div>
      {show ? (
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
              <th scope="col">Graph</th>
            </tr>
          </thead>
          {props.parentData.map((entry, index) => {
            return (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.game_rank}</td>
                <td>{entry.platform}</td>
                <td>{entry.year}</td>
                <td>{entry.genre}</td>
                <td>{entry.publisher}</td>
                <td>{entry.globalsales}</td>
                <td>
                  <button onClick={()=>setShow(false)}>View Graph</button>
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <ConsoleGameCopies testParameter={props.parentData} />
      )}
    </div>
  );
};
export default PlatformStats;
