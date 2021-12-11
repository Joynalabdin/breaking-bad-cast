import React from 'react'
import Spinner from '../UI/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items, isLoding}) => {
    return isLoding ? (<Spinner />) : <section className="cards">
        {
            items.map(item=>(<CharacterItem key ={item.char_id} item={item}> </CharacterItem>))
        }
    </section>
}

export default CharacterGrid
