import React from 'react';

const Quote = ({ quote, character, image }) => (
    <figure className="quote">
        <img className="image" src={image} alt={character} />
        <figcaption className="caption" >
            <blockquote>{quote}</blockquote>
            <cite>{character}</cite>
        </figcaption>
    </figure>
);
 
export default Quote;