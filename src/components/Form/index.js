import { SearchBar, Title } from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import Card from "../Card";

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
      <>
        <Title>Pesquisador Pokemon</Title>
        <SearchBar onChange={debounce((event) => {getInfosPokemon(event.target.value)}, 1000)} type="text" placeholder="Digite aqui o nome do Pokemon"/>
        <Card name={infosPokemon?.name} height={infosPokemon?.height} weight={infosPokemon?.weight} image={infosPokemon?.sprites?.front_default}/>
      </>
    );
  }

  
  export default Form;
  