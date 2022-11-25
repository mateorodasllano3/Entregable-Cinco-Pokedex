import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetail = () => {

    const[pokemon, setPokemon] = useState({})

    const{id}= useParams()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=> setPokemon(res.data))
    },[])
    
    console.log(pokemon)
    return (
        <div className='Card-General-PokedexDetail'>
            <div className='Card-PokedexDetail'>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <h1>{pokemon.name}</h1>
            <div className='Container-WH'>
            <div className='Card-WH 1'>
            <h2>Weight</h2>
            <p>{pokemon.weight} Hectograms</p>
            </div>
            <div className='Card-WH 2'>
            <h2>Height</h2> 
            <p>{pokemon.height} Centimeters</p>
            </div>
            </div>
            </div>
            <div className='Container-Type-Abilities'>
                <div className='Card-Type'>
                    <h2>Types</h2>
                    <div className='Container-type-Pokemon'>
            <p className='Type-Pokemon'>{pokemon.types?.[0]?.type.name}</p>
            <p className='Type-Pokemon'>{pokemon.types?.[1]?.type.name}</p>
            </div>
            </div>
            <div className='Card-Abilities'>
                 <h2>Abilities</h2>
                 <div className='Container-abilities-Pokemon'>
            <p className='Abilities-Pokemon'>{pokemon.abilities?.[0]?.ability.name}</p>
            <p className='Abilities-Pokemon'>{pokemon.abilities?.[1]?.ability.name}</p>
            <p className='Abilities-Pokemon'>{pokemon.abilities?.[2]?.ability.name}</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default PokedexDetail;