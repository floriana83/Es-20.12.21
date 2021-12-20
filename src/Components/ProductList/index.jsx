import React from 'react'
import useFetch from 'use-http'
import styles from "./ProductList.module.scss"

function ProductList() {
  const options = {} 
  const {data = [] } = useFetch('https://fakestoreapi.com/products', options, [])
  return (
    <div>
    <h1>My E-commerce</h1>
    <div className={styles.section}>
    
        {data.map(data => 
        (<div key={data.id}>
        <div className={styles.card}> 
        <h4>{data.title}</h4>
        
        <p className={styles.card__description}>{data.description}</p>
        <img src={data.image} className={styles.card__image}/>
        <p><small>{data.rating.rate}⭐</small></p>
        <h5>{data.price}$</h5>
        
        </div>
        </div>))}
    </div>
    </div>
)
}



export default ProductList
