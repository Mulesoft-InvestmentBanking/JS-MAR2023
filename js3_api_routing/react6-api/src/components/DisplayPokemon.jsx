import React from 'react'

const DisplayPokemon = (props) => {
    const {pokemon} = props
    return (
        <div>
            <h1>{pokemon.name} </h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    )
}

export default DisplayPokemon