import React from 'react'

import './Coins.css'

const CoinItem = ({coinItem}) => {
  return (
    <div className='coins__row coins__line'>
      <p>{coinItem.market_cap_rank}</p>
      <div className='coins__info'>
        <img className='coins__symbol' src={coinItem.image} alt={coinItem.name} />
        <p>{coinItem.symbol.toUpperCase()}</p>
      </div>
      <p>${coinItem.current_price.toLocaleString()}</p>
      <p>{coinItem.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>${coinItem.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${coinItem.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem