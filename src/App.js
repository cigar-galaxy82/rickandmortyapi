import "./App.css";
import { useState, useEffect } from "react";
import Portal from "./components/Portal/portal";
import Characters from "./components/Card/card";

function App() {
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(0);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      nextCharacter();
    })();
  }, []);

  async function nextCharacter() {
    setLoader(false);
    setCharacters([]);
    await fetch(`https://rickandmortyapi.com/api/character/?page=${page + 1}`)
      .then((res) => {
        res.json().then((res) => {
          res.results.forEach(async (element) => {
            if (element.location.url !== "") {
              await fetch(element.location.url).then((res) => {
                res
                  .json()
                  .then((res) => {
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
              let character = {
                element,
                residents: 0,
              };
              setCharacters((state) => [...state, character]);
            }
          });
          setPage((prevState) => prevState + 1);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function prevCharacter() {
    setLoader(false);
    setCharacters([]);
    setPage((prevState) => prevState - 1);
    console.log(page);
    await fetch(`https://rickandmortyapi.com/api/character/?page=${page - 1}`)
      .then((res) => {
        res.json().then((res) => {
          res.results.forEach(async (element) => {
            if (element.location.url !== "") {
              await fetch(element.location.url).then((res) => {
                res
                  .json()
                  .then((res) => {
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
              let character = {
                element,
                residents: 0,
              };
              setCharacters((state) => [...state, character]);
            }
          });
        });
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
