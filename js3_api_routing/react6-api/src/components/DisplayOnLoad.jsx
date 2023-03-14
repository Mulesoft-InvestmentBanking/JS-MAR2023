import React, { useEffect, useState } from 'react'
import axios from "axios"

// grab pokemon information when loading the components
// 1. grab pokemon info (axios)
// 2. on load (useEffect)
// 3. state variables for pokemon (useState)
// 4. display object (ternary )

const DisplayOnLoad = () => {
    const [pokemon, setPokemon] = useState()
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => setPokemon(null))
    }, [id])

    const randomIdGenerator = ()=>{
        const randomId = Math.floor(Math.random()*1200)
        setId(randomId)
    }

    return (
        <div>
            <h1> Display pokemon when the component loads</h1>
            <button onClick={randomIdGenerator}> Generate a random id</button>
            {id}
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