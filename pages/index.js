import React from 'react'

import {client} from '../lib/client';
import Header from '../components/Header';
import Product from '../components/Product';

const Home = ({products}) => {
  return (
    <>
      <Header />


      <div className='home-gallery-container'>
          {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>

      <div className='follow-me-container'>

      </div>

      Footer
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: {products}
  }
}

export default Home