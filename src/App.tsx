import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {requestPokemons} from "./services/pokemons/actions";


import './App.css';

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestPokemons())
    }, [])

    return (

            <div className="App">
            </div>

    );
}

export default App;
