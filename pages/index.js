import React from 'react'

import {client} from '../lib/client';
import {Header} from '../components/Header';

const Home = ({products}) => {
  return (
    <>
      <Header />

      <div className='heroWrapper'>

      </div>

      <div className='galleryWrapper'>
          {products?.map((product) => product.name)}
      </div>

      <div className='followMeWrapper'>

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