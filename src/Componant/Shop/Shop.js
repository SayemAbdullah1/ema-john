import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( ()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const productAddTocart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(product)
    }

    return (
        <div className='shop'>
            <div className="shop-conatainer">
                {
                    products.map(product => <Product
                    product={product}
                    key = {product.id}
                    productAddTocart={productAddTocart}
                    ></Product>)
                }
            </div>
            <div className="order-conatainer">
                <Cart
                cart = {cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;