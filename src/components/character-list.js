import React from 'react';

export default function CharacterList(props) {
    const characters = props.characters.map((character, index) =>
        <li key={index}>
            <strong>{character.name}</strong> ({character.actor}) - {character.description}
        </li>
    );
    // const filtererCharacters = props.character.filter(character => {
        
    // })
    return (
        <ul className="character-list">
            {characters}
        </ul>
    );
}
