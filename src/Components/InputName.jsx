import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import pokemonimagen from '../assets/Img/Pokemon-Ash-Ketchum-PNG-Transparent-Image.png'

const InputName = () => {

    const[username, setUserName] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const enterName = () =>{
        navigate('/pokedex')
        dispatch(changeName(username))
    }
    return (
        <div className='Card-Input-Name'>
            <div className='Card-Title-Input'>
            <h1>Hello Trainer!</h1>
            <img 
            src={pokemonimagen}
            alt="pokemon" />
            <p>Give me your name to start...</p>
            <div className='Input-Button-Name'>
            <input type="text" value={username} onChange={e=> setUserName(e.target.value)}/>
            <button onClick={enterName}>Enter</button>
            </div>
            </div>
        </div>
    );
};

export default InputName;