import {RequestPokemonAction, RequestPokemonFailureAction, RequestPokemonSuccessAction} from "./types";
import {REQUEST_POKEMONS, REQUEST_POKEMONS_FAILURE, REQUEST_POKEMONS_SUCCESS} from "./actionTypes";

export const requestPokemons:RequestPokemonAction = () => ({
    type: REQUEST_POKEMONS
});

export const requestPokemonsSuccess:RequestPokemonSuccessAction = (pokemons) => ({
    type: REQUEST_POKEMONS_SUCCESS,
    payload: pokemons
})

export const requestPokemonsFailure:RequestPokemonFailureAction = (error) => ({
    type: REQUEST_POKEMONS_FAILURE,
    payload: error
})