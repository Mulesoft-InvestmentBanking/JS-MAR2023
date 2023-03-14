import React, { useState } from 'react'
import DisplayPokemon from './DisplayPokemon'
import axios from "axios"
// 1. button to trigger a function
// 2. a function to have api call (Fetch/ axios) -- variable change
// 3. useState for the updated variables
// 4. display object : ternary

const FetchPokemon = () => {
    // 1. state variable to store pokemon info (from api)
    const [pokemon, setPokemon] = useState()

    const fetchPokemonThen = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse)
                setPokemon(jsonResponse)
            })
            .catch(err =>{ // logic if API call is unsuccessful
                console.log("In .catch")
                console.log(err)
                alert("Invalid api call")
                setPokemon(null)
            })
    }

    const fetchPokemonAwait = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax")
        const jsonResponse = await response.json()
        setPokemon(jsonResponse)
    }


    // 2. function to grab info from API
    const fetchPokemonWithAxios = () => {
        // .get: read, .post: create, .put: update, .delete: delete
        axios.get("https://pokeapi.co/api/v2/pokemon/eevee")
            .then(response => { // successful response
                console.log(response.data)  
                setPokemon(response.data)
            })
            .catch(err => { // handle unsuccessful response
                console.log(".catch")
                alert("Invalid api call")
                setPokemon(null)
            })
    }

    const fetchPokemonWithAxiosAsync = async() =>{
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/me")
            setPokemon(response.data)
        }catch(err){
            console.log(".catch")
            setPokemon(null)
        }
    }

    return (
        <div>
            <h1> Fetch Pokemon</h1>
            <button onClick={fetchPokemonThen}> Fetch pokemon with .then</button>
            <button onClick={fetchPokemonAwait}> Fetch pokemon with async/await</button>
            <button onClick={fetchPokemonWithAxios}> Fetch pokemon with Axios</button>
            <button onClick={fetchPokemonWithAxiosAsync}> Fetch pokemon with Axios and async/await</button>
            {
                pokemon ?
                    <DisplayPokemon pokemon={pokemon} /> :
                    <h1> Fetch a pokemon!</h1>
            }
        </div>
    )
}

export default FetchPokemon