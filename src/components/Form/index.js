import { SearchBar } from "./styles";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

const ENDPOINT_BASE = "https://pokeapi.co/api/v2/"
const ENDPOINT_POKEMON = "pokemon/"

function Form() {

    const[infosPokemon,setInfosPokemon] = useState("")
    
    const getInfosPokemon = async (event) => {
        let response = await axios.get(ENDPOINT_BASE+ENDPOINT_POKEMON+event)
        setInfosPokemon(response.data)
    }

    useEffect(()=> {
      console.log(infosPokemon)
    })
     
    return (
      <div>
        <SearchBar onChange={debounce((event) => {getInfosPokemon(event.target.value)}, 1000)} type="text" placeholder="Digite aqui o nome do Pokemon"/>
      </div>
    );
  }

  
  export default Form;
  