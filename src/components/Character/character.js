const styles = {
  characters: {
    border: 'solid 2px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    maxWidth: '100%',
    padding: '10px 15px',
  },
  img: {
    width: '100%'
  },
  details:  {
    padding: 0,
    margin: 0,
    color: 'white'
  },
  description: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '5px',
    color: 'white'
  }
}
//Single Card of each character
function Character ({character}) {
    return (
      <div style={styles.characters}>
        <img style={styles.img} alt={character.element.name} src={character.element.image}></img>
        <p style={styles.description}> {character.element.name} </p>
        <div>
          <p style={styles.details}> Status: {character.element.status} </p>
          <p style={styles.details}> Species: {character.element.species} </p>
          <p style={styles.details}> Genter: {character.element.gender} </p>
          <p style={styles.details}> Origin: {character.element.origin.name} </p>
          <p style={styles.details}>Location: {character.element.location.name}</p>
          <p style={styles.details}>Number of Residents: {character.residents}</p>
        </div>
      </div>
    )
}

export default Character;