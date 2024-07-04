import { BiDislike } from "react-icons/bi"; 
import { BiLike } from "react-icons/bi"; 
import React from 'react'
import { useReducer } from "react";
import { useState } from "react";
import './card.scss'

const reducer = (state, action) => {
    switch (action.type) {
        case 'like':
            return [...state, action.product]
        case 'dislike':
            return state.filter(product => product.id !== action.product.id)
        default:
            return state
    }
}



const Card = ({ product }) => {

    const initialState = [];

    const [state, dispatch] = useReducer(reducer , initialState) 

    const handleLike = (product) => {
        dispatch({type: 'like', product})
        console.log(product)
    }

    const handleDislike = () => {
        dispatch({type: 'like', product})
        console.log(product.id)
    }

    console.log(state)




  return (
    <>
        <div className='card'>
      <div className="card__img">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="card__content">
        <div className="card__info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div className="likeDislike">
          <button onClick={() => {handleLike(product)}}><BiLike /></button>
          <button onClick={() => {handleDislike(product.id)}}><BiDislike /></button>
        </div>
      </div>
    </div>
    <h1>Liked</h1>
    <div>
        {state.map(product => (
            <Card key={product.id} product={product} />
        ))}
    </div>
    </>
  )
}

export default Card
