import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

const Product = (props) => {
  console.log(props)
  const { id, productName, productImage, price } = props.data;
  const { addToCart , cartItems } = useContext(ShopContext)

  const cartItemsAmont = cartItems[id]
  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add To Cart {cartItemsAmont > 0 && <>({cartItemsAmont})</>}
      </button>
    </div>
  )
}

export default Product;