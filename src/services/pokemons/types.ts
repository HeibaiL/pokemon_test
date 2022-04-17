import {REQUEST_POKEMONS, REQUEST_POKEMONS_FAILURE, REQUEST_POKEMONS_SUCCESS} from "./actionTypes";

export type Pokemon = {
    id: string,
}

export type InitialState = {
    pokemonsList: Pokemon[],
    isLoading: boolean,
}


export interface RequestPokemonAction {
    (): { type: typeof REQUEST_POKEMONS }
}

export interface RequestPokemonSuccessAction {
    (pokemons: Pokemon[]): { type: typeof REQUEST_POKEMONS_SUCCESS, payload: typeof pokemons }
}

export interface RequestPokemonFailureAction {
    (error: typeof Error): { type: typeof REQUEST_POKEMONS_FAILURE, payload: typeof Error}
}