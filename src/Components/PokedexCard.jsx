import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PokedexCard = ({ url }) => {

    const [pokedex, setpokedex] = useState({})

    useEffect(()=>{
        axios.get(url)
        .then(res => setpokedex(res.data))

    },[])
    
   console.log(pokedex)


    return (
        <div className='Card-PokedexCard'>
            <h1 className='tittle-pokedexCard'>{pokedex.name}</h1>
        <Link to={`/pokedex/${pokedex.id}`}>
            <img src={pokedex.sprites?.other.dream_world.front_default} alt="Pokemon" className='Img-PokedexCard'/>
        </Link>
            <p> <b>Height:</b> {pokedex.height} hectograms</p>{" "}
            <p> <b>Type:</b> {pokedex.types?.[0].type.name}, {pokedex.types?.[1]?.type.name}</p> 
           
        </div>
    );
};

export default PokedexCard;