import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

// grab pokemon information when loading the components
// 1. grab pokemon info (axios)
// 2. on load (useEffect)
// 3. state variables for pokemon (useState)
// 4. display object (ternary )

const DisplayOnLoad = () => {
    const [pokemon, setPokemon] = useState()
    const {pokemonName} = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => setPokemon(null))
    }, [pokemonName])


    return (
        <div>
            <h1> Display pokemon when the component loads</h1>
            {
                pokemon ?
                    <div>
                        <h1>{pokemon.name} </h1>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div> :
                    <h1>Fetching pokemon</h1>
            }

        </div>
    )
}

export default DisplayOnLoad