import React, { useState, useEffect } from 'react'
import axios from "axios"

// receive new confirmedName from props
// grab pokemon from api (axios)
// display on load (useEffect)
// pokemon object: useState
// display object : ternary

const DisplayPokemonOnLoad = (props) => {
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.confirmedName}`)
            .then(response=>{
                setPokemon(response.data)
            })
            .catch(err=>{
                setPokemon(null)
            })
    }, [props.confirmedName])

    return (
        <div>
            {
                pokemon?
                <div>
                    <h1> {pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <ul>
                        {
                            pokemon.abilities.map((eachAbility, idx)=>{
                                return(
                                    <li key={idx}> {idx+1} - {eachAbility.ability.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>:
                <h1> Search for a pokemon!</h1>
            }
        </div>
    )
}

export default DisplayPokemonOnLoad