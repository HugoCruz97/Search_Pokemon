import { SearchBar } from "./styles";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";

const ENDPOINT_BASE = "https://pokeapi.co/api/v2/"
const ENDPOINT_POKEMON = "pokemon/"

function Form() {

    const[infosPokemon,setInfosPokemon] = useState()
    const[infoSearchBar,setInfoSearchBar] = useState()
    console.log(infoSearchBar)


    
    const getInfosPokemon = useCallback(async () => {
        let response = await axios.get(ENDPOINT_BASE+ENDPOINT_POKEMON+infoSearchBar)
        setInfosPokemon(response.data)
        console.log("passou aqui")
        console.log(infosPokemon)
    })

    useEffect(() => {
        getInfosPokemon()
    }, [infoSearchBar])
        
    return (
      <div>
        <SearchBar onChange={debounce((event) => {setInfoSearchBar(event.target.value)}, 2000)} type="text" value={infoSearchBar} placeholder="Digite aqui o nome do Pokemon"/>
      </div>
    );
  }

  
  export default Form;
  