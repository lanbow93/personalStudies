import { useState, useEffect } from "react"

export default function ApiCall(props){
    const [pokemon, setPokemon] = useState([])

    async function getPokemon(){
        const response = await fetch("https://dummydata.netlify.app/pokedex.json")
        const data = await response.json()
        setPokemon(data.pokemon)
    }

    useEffect(() => {getPokemon()}, [])

    return <div>
        <button onClick={getPokemon}>Get Pokemon</button>
        {pokemon.map((poke) => <div>
            <h1>{poke.name}</h1>
            <img src={poke.img} alt={poke.name} />
        </div>)}
        
    </div>
}