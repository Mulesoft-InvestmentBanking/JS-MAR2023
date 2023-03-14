import React, { useState } from 'react'
import DisplayPokemon from './DisplayPokemon'
import axios from "axios"

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState()

    const fetchPokemonThen = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonAwait = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax")
        const jsonResponse = await response.json()
        setPokemon(jsonResponse)
    }

    const fetchPokemonWithAxios = () => {
        // .get: read, .post: create, .put: update, .delete: delete
        axios.get("https://pokeapi.co/api/v2/pokemon/eevee")
            .then(response => {
                console.log(response.data)
                setPokemon(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1> Fetch Pokemon</h1>
            <button onClick={fetchPokemonThen}> Fetch pokemon with .then</button>
            <button onClick={fetchPokemonAwait}> Fetch pokemon with async/await</button>
            <button onClick={fetchPokemonWithAxios}> Fetch pokemon with Axios</button>
            {
                pokemon ?
                    <DisplayPokemon pokemon={pokemon} /> :
                    <h1> Fetch a pokemon!</h1>
            }
        </div>
    )
}

export default FetchPokemon