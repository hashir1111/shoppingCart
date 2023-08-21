import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './product'
import './shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Shopping Cart</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product,id) => {
                    return (
                        <div key={id}>
                            <Product data={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Shop

