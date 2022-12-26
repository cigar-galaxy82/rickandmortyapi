import { Component } from 'react';

const styles = {
  characters: {
    border: 'solid 1px #eee',
    boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
    maxWidth: '100%',
    padding: '10px 15px',
    borderRadius: '5px'
  },
  img: {
    width: '100%'
  },
  details:  {
    padding: 0,
    margin: 0,
    color: '#263238'
  },
  description: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop: '5px',
    color: '#263238'
  }
}

function Character ({character}) {
    return (
      <div style={styles.characters}>
        <img style={styles.img} alt={character.name} src={character.image}></img>
        <p style={styles.description}> {character.name} </p>
        <div>
          <p style={styles.details}> Status: {character.status} </p>
          <p style={styles.details}> Species: {character.species} </p>
          <p style={styles.details}> Genter: {character.gender} </p>
          <p style={styles.details}> Origin: {character.origin.name} </p>
          <a></a>
          <a style={styles.details}href={character.location.name}>{character.location.name}</a>
        </div>
      </div>
    )
}

export default Character;