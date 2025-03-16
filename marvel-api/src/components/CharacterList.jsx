import { useState, useEffect } from 'react';
import axios from 'axios';
import {array, string,  func } from 'prop-types';
import './CharacterList.css';
import CharacterDetails from './CharacterDetails';


const CharacterList = () => {

    const [characters, setCharacters] = useState([]);
    const [characterDescriptionId, setCharacterDescriptionId] = useState(null);


    const handleThumbnailClick = (characterId) => {
        if (characterDescriptionId === characterId){
            setCharacterDescriptionId(null); //Using this conditional it will set the state back to null, hiding the description if clicked again
        } else {
        setCharacterDescriptionId(characterId); //This now stores the selected character as state
        }
    }
    
    const fetchCharacters = async () => {
        try {
          const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=aba5bf7ed148aa16f4b98b67ac3b7952&hash=4b2946f4a570f2c31584a8176d77748b`)
          setCharacters(response.data.data.results);
            } catch (error) {
            console.error('Error fetching data: ', error);
            }
        }

    useEffect(() => {
        fetchCharacters();
    }, [])

    return (
        <div className="characterList">
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <div>
                            <strong>{character.name}</strong>
                        </div>

                        <img src={`${character.thumbnail.path}/standard_small.jpg`} alt={character.name} onClick={() => handleThumbnailClick(character.id)}/>
                        {characterDescriptionId === character.id && <CharacterDetails details={character} />}
                    </li>
                ))}
            </ul>
        </div>
    )
}


CharacterList.propTypes = {
    characters: array,
    handleThumbnailClick: func,
    characterDescriptionId: string
};

export default CharacterList;