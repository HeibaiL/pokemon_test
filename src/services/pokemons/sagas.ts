import {axiosGet} from "../../api/axios";

export function* loadPokemons(){
    axiosGet("pokemon/?limit=20&offset=20").then(res => console.log(res))
}