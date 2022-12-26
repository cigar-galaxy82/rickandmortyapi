import Character from "../Character/character";

//Load all characters 
function Characters ({characters}) {
    return (
        <div className="charactersContainer">
        {characters.length > 0 && characters.map((ch, key) =>
          <Character
            key={key}
            character={ch}
          />
        )}
      </div>
    )
}

export default Characters