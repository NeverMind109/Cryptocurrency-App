import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DOMPurify from 'dompurify'

import './Coin.css'

const Coin = () => {
  const [coin, setCoin] = useState({})
  const { coinId } = useParams()

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`

  useEffect(() => {
    axios.get(url).then(resp => setCoin(resp.data)).catch(error => console.log(error))
  }, [])

  return (
    <div className='coin'>
      <div className='coin__container'>
        <div className="coin__content">
          <h2 className="coin__name">{coin.name}</h2>
        </div>
        <div className="coin__content">
          <div className="coin__rank">
            <span className="coin__rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="coin__info">
            <div className="coin__head">
              {coin.image ? <img className='coin__img' src={coin.image.small} alt={coin.name} /> : null}
              <span className="coin__heading">{coin.name}</span>
              {coin.symbol ? <span className='coin__cut'>{coin.symbol.toUpperCase()}/USD</span> : null}
            </div>
            <div className="coin__price">
              {coin.market_data?.current_price ? <h3 className='coin__price-tag'>${coin.market_data.current_price.usd.toLocaleString()}</h3> : null}
            </div>
          </div>
        </div>

        <div className="coin__content">
          <table className="coin__table">
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>

                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>

                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>

                <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>

                <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>

                <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="coin__content">
          <div className="coin__stats">
            <div className="coin__col">
              <div className="coin__row">
                <h4 className="coin__stat">24 Hour Low</h4>
                {coin.market_data?.low_24h ?<p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
              </div>
              <div className="coin__row">
                <h4 className="coin__stat">24 Hour High</h4>
                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
              </div>
            </div>
            <div className="coin__col">
              <div className="coin__row">
                <h4 className="coin__stat">Market Cap</h4>
                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
              </div>
              <div className="coin__row">
                <h4 className="coin__stat">Circulating Supply</h4>
                {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="coin__content">
          <div className="coin__about">
            <h3 className="coin__title">About</h3>
            <p className="coin__descr" dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : '')
            }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin