import {InitialState} from "./types";


const initialState: InitialState = {
    pokemonsList: [],
    isLoading: false,
}
export default (state = initialState, action:any) => {
        switch (action.type){

            default:
                return state
        }

}