import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';

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
            <h1>Hello Trainer!</h1>
            <p>Give me your name to start...</p>
            <div className='Input-Button-Name'>
            <input type="text" value={username} onChange={e=> setUserName(e.target.value)}/>
            <button onClick={enterName}>Enter</button>
            </div>
        </div>
    );
};

export default InputName;