import {takeEvery} from 'redux-saga/effects';
import {REQUEST_POKEMONS} from "./actionTypes";
import {loadPokemons} from "./sagas";

export default function* saga(){
    yield takeEvery(REQUEST_POKEMONS, loadPokemons)
}