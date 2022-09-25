import React from 'react';
import './Product.css'

const Product = ({product, productAddTocart}) => {
    const {name, img, rating, price, seller} = product
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h3 className='name'>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Rating {rating} star</p>
                <p>Seller: {seller}</p>
            </div>
            <div>
                <button onClick={ ()=> productAddTocart(product)} className='product-btn'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;