import "./App.css";
import { useState, useEffect } from "react";
import Portal from "./components/Portal/portal";
import Characters from "./components/Card/card";


function App() {
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    (async() => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const json = await response.json();
      setCharacters(json.results);
      setPage((prevState) => prevState+1)
      setLoader(true);
    })()
  }, []);

  // useEffect(() => {
  //   const nextbutton = document.getElementById("nextbutton")
  //   if(nextbutton) {
  //     console.log("DDD")
  //     nextbutton.addEventListener("click", async() => {
  //       setLoader(false)
  //       const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  //       const json = await response.json();
  //       setCharacters(json.results);
  //       setPage((prevState) => prevState+1)
  //       setLoader(true);
  //     })
  //   }
  // }, [])

  async function newCharacter(){
    setLoader(false)
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const json = await response.json();
    setCharacters(json.results);
    setPage((prevState) => prevState+1)
    setLoader(true);
  } 

  return (
    <>
      {!loader ? (
        <Portal />
      ) : (
        <div>
          <Characters characters={characters}/>
          <button id="nextbutton" onClick={newCharacter}>
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default App;
