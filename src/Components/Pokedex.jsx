import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexCard from './PokedexCard'

const Pokedex = () => {
    const userName = useSelector(state => state.name)

    const[characterPokedex, setCharacterPokedex] = useState([])

    const[inputSearch, setInputSearch] = useState("")

    const navigate = useNavigate()

    const[typePokemon, setTypePokemon] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        // ?offset=0&limit=2
        .then(res => setCharacterPokedex(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res => setTypePokemon(res.data.results))
    },[])

    const buttonsearch = () => {
        navigate(`/pokedex/${inputSearch}`)
    }
     

     const FilterType = (e) => {
        const url = e.target.value;
        axios.get(url)
        .then(res=>setCharacterPokedex(res.data.pokemon))
    
     }
    const [page, setPage] = useState (1)
    const pokemonPerPage = 5
    const LastIndex = page*pokemonPerPage
    const FirstIndex = LastIndex-pokemonPerPage

    const pokemonpaginated = characterPokedex.slice(FirstIndex,LastIndex)
    const totalPages = Math.ceil(characterPokedex.length / pokemonPerPage)

    const numbers = []
    for(let i = 1; i <= totalPages; i++){
        numbers.push(i)
    }

       console.log(characterPokedex)
    return (
        <div className='card-pokedex'>
            <p>Welcome <br />
            <span> {userName} !!</span></p>
            <div className='input-serch-pokedex'>
            <input type="text" 
            placeholder='Serch the character'
            value={inputSearch}
            onChange={e => setInputSearch(e.target.value)}/>
            <select onChange={FilterType}name="" id="">
                {typePokemon.map((pokemon)=>(
                    <option 
                    value={pokemon.url} 
                    key={pokemon.name}>
                        
                    {pokemon.name}</option>
                ))}
            </select>
                <button onClick={buttonsearch}>Enviar</button>
            </div>
                <ul className='list-pokemon-pokedex'>
            {pokemonpaginated.map((pokedex)=>(
                <li key={pokedex.url ? pokedex.url : pokedex.pokemon.url }>
                <PokedexCard url={pokedex.url ? pokedex.url : pokedex.pokemon.url }/>
                </li>
                ))}
                </ul>
                <div className='pagination-pokedex'>
                <button onClick={()=>{setPage(page -1)}}
                disabled={page === 1}>Prev Page</button>
                {numbers.map((number) => (
                    <button onClick={()=> setPage(number)}>{number}</button>
                ))}
                <button onClick={()=>{setPage(page +1)}}
                disabled={page === totalPages}>Next Page</button>
                </div>
        </div>
    );
};

export default Pokedex;