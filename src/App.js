import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CharacterGrid from './Components/Characters/CharacterGrid';
import Header from './Components/UI/Header';
import Search from './Components/UI/Search';

const  App =()=> {
  const [items, setItems]  = useState([])
  const [isLoding, setLoding] =useState(true)
  const [query, setQuery] =useState('')


  useEffect(()=>{
    const fetchItems = async () =>{
      const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setLoding(false)
    }
    fetchItems()
  },[query])
  return (
    <div className="container">
     <Header />
     <Search getQuery={(q)=> setQuery(q)} />
     <CharacterGrid isLoding={isLoding} items= {items} />
    </div>
  );
}

export default App;
