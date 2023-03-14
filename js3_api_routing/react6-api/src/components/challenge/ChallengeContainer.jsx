import React, {useState} from 'react'
import DisplayPokemonOnLoad from './DisplayPokemonOnLoad'
import PokemonForm from './PokemonForm'

// 1. form to send pokemonName to parent
// 2. receive new pokemonName & grab pokemon with useEffect & axios
const ChallengeContainer = () => {
    const [confirmedName , setConfirmedName] = useState("pikachu")

    const updateName = (newName) =>{
        setConfirmedName(newName)
    }

    return (
        <div>
            <h1> Pokemon Challenge</h1>
            <PokemonForm onNewName={updateName}/>
            <DisplayPokemonOnLoad confirmedName={confirmedName} />
        </div>
    )
}

export default ChallengeContainer