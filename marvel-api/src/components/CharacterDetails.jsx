import {string } from 'prop-types';

const CharacterDetails = ({details}) => {
    
    return (
       <div className="character-details">
            <h2>{details.name}</h2>
            <p>{details.description || 'No description available'}</p>

       </div>
    );

}

CharacterDetails.propTypes = {
    details: string
}


export default CharacterDetails;