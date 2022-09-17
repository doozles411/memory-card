import React from 'react';

const Card = (props) => {
    const {
        card: { src, id },
        handleGame
    } = props;

    return (
        <div className="card">
            <img
            className="card-img"
            alt={id}
            src={src}
            onClick={handleGame}
            />
        </div>
    )
}

export default Card;