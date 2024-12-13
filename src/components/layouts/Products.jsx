import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../pages/Product'

function Products() {
  return (
    <div className='py-6 mt-5'>
      <Container>
        <Flex className={'justify-between'}>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </Flex>
      </Container>
    </div>
  )
}

export default Products
