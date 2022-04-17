import { all, fork } from "redux-saga/effects";
import {pokemonSaga} from './services/index/sagas';

export function* rootSaga() {
    yield all([
        fork(pokemonSaga),
    ]);
}