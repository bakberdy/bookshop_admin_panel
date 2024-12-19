import React from 'react'
import SaleChart from '../components/SaleChart'
import Bestsellers from '../components/Bestsellers'

const Home = () => {
  return (
    <div className='home-page'>
      <SaleChart />
      <Bestsellers/>
    </div>
  )
}

export default Home