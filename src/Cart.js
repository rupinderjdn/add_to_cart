import React from 'react'
import CartItem from './cartItem'
class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            products: [
                {
                    price: 999,
                    title: "Shirt",
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 800,
                    title: "Watch",
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price: 40000,
                    title: "Laptop",
                    qty: 1,
                    img: '',
                    id:3
                }
            ]
        }
    }
    render() {
        const { products } = this.state
        return (
            <div className="cart">
                {
                    products.map((product) => {
                        return ( 
                        <CartItem 
                            product={product} 
                            key={product.id} 
                        />
                        )
                    })
                }
            </div>
        );
    }
}

export default Cart