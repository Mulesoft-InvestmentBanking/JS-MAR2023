import React, { useState } from 'react'

// form: input --> useState
// logic after submitting the form

const PokemonForm = (props) => {
    const [pokemonName, setPokemonName] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.onNewName(pokemonName)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="pokemonName" value={pokemonName} 
                    placeholder="Enter a pokemon name!"
                    onChange={e=> setPokemonName(e.target.value)} />
                <button type="submit"> Search</button>
            </form>
        </div>
    )
}

export default PokemonForm