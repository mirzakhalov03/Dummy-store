import { FcLike } from "react-icons/fc"; 
import React, { useEffect, useState } from 'react'
import './home.scss'
import Card from '../../components/Card'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
      })
  }, [])

  return (
    <div className="home">
        <nav>
            <h1>Dummy Store</h1>
            <div className="thumbsUpDown">
                <NavLink className="navlink" to="/liked">{products.length}   <FcLike />   Favorites</NavLink>
            </div>
        </nav>
        <div className='wrapper'>
            {products.length > 0 ? (
                products.map(product => (
                <Card key={product.id} product={product} />
                ))
            ) : (
                <p style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', fontSize: '30px' }}>Loading...</p>
            )}
        </div>
    </div>
  )
}

export default Home
