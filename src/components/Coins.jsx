import React from 'react'
import { Link } from 'react-router-dom'

import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'

const Coins = ({coins}) => {
  return (
    <div className='container'>
      <div>
        <div className='coins__row coins__head'>
          <p>#</p>
          <p className='coins__name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {coins.map((coinItem, idx) => (
          <Link to={`/Cryptocurrency App/${coinItem.id}`} element={<Coin />} key={coinItem.name + idx}>
            <CoinItem coinItem={coinItem}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Coins