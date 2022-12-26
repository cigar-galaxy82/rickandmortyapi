import Character from "../Character/character";

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