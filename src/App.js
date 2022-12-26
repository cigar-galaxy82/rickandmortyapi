import "./App.css";
import { useState, useEffect } from "react";
import Portal from "./components/Portal/portal";
import Characters from "./components/Characters/characters";

function App() {
  //used for loader
  const [loader, setLoader] = useState(false);
  //current page number
  const [page, setPage] = useState(0);
  //current character on the page
  const [characters, setCharacters] = useState([]);

  //Load character on first render
  useEffect(() => {
    (async () => {
      nextCharacter();
    })();
  }, []);

  //Load next page
  async function nextCharacter() {
    //Show preloader if data not loaded
    setLoader(false);

    //Empty current page characters
    setCharacters([]);

    //load character on the current page
    await fetch(`https://rickandmortyapi.com/api/character/?page=${page + 1}`)
      .then((res) => {
        res.json().then((res) => {
          //find residents on each character current location
          res.results.forEach(async (element) => {
            if (element.location.url !== "") {
              //find the residents if url is present
              await fetch(element.location.url).then((res) => {
                res
                  .json()
                  .then((res) => {
                    //create a character object with resident at current location
                    let character = {
                      element,
                      residents: res.residents.length,
                    };
                    setCharacters((state) => [...state, character]);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                setLoader(true);
              });
            } else {
              //create a character object who location url is absent
              let character = {
                element,
                residents: 0,
              };
              setCharacters((state) => [...state, character]);
            }
          });
          //increase the page
          setPage((prevState) => prevState + 1);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Load prev page
  async function prevCharacter() {
    //Show preloader if data not loaded
    setLoader(false);

    //Empty current page characters
    setCharacters([]);

    //load character on the current page
    await fetch(`https://rickandmortyapi.com/api/character/?page=${page - 1}`)
      .then((res) => {
        res.json().then((res) => {
          res.results.forEach(async (element) => {
            if (element.location.url !== "") {
              await fetch(element.location.url).then((res) => {
                res
                  .json()
                  .then((res) => {
                    //create a character object with resident at current location
                    let character = {
                      element,
                      residents: res.residents.length,
                    };
                    setCharacters((state) => [...state, character]);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                setLoader(true);
              });
            } else {
              //create a character object who location url is absent
              let character = {
                element,
                residents: 0,
              };
              setCharacters((state) => [...state, character]);
            }
          });
        });
        //decrease the page
        setPage((prevState) => prevState - 1);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div data-testid="app-1">
      {!loader ? (
        <Portal />
      ) : (
        <div className="App">
          <Characters characters={characters} />
          {page > 1 ? (
            <button
              id="pastbutton"
              className="pagebutton"
              onClick={prevCharacter}
            >
              Past
            </button>
          ) : (
            ""
          )}
          <button
            id="nextbutton"
            className="pagebutton"
            onClick={nextCharacter}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
