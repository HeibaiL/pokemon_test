import {combineReducers} from 'redux'
import {pokemonsReducer} from "./services/index/reducers";

const rootReducer = combineReducers({
    pokemonsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;