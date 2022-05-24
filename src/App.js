
import { render } from '@testing-library/react';
import './App.css';
import Cart from './Cart'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AddForm from './AddForm'
class  App extends React.Component{
  constructor() {
    super()
    this.state = {
        products: [
            {
                price: 999,
                title: "Shirt",
                qty: 1,
                img: 'https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1637661006.AP005.jpeg',
                id:1
            },
            {
                price: 800,
                title: "Watch",
                qty: 1,
                img: 'https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSRoseGold_540x.jpg?v=1585715221',
                id:2
            },
            {
                price: 40000,
                title: "Laptop",
                qty: 1,
                img: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06596134_8.png',
                id:3
            }
        ]
    }
}
handleIncreaseQuantity = (product)=>{
    const {products} = this.state
    const index = products.indexOf(product)

    products[index].qty+=1
    this.setState({
        products : products
    })
}
handleDecreaseQuantity = (product)=>{
    const {products} = this.state
    const index = products.indexOf(product)
    if(products[index].qty <= 0)return
    products[index].qty += -1 
    this.setState({
        products : products
    })
}
handleDeleteProduct = (id)=>{
    const {products} = this.state
    const items = products.filter((item)=>item.id!==id)
    this.setState({
        products : items
    })
}
getCartCount = ()=>{
  const {products} =this.state;
  var count = products.reduce((total,product)=>{
    return total+product.qty;
  },0)
  // console.log(count)
  return count
}
getTotalPrice = ()=>{
  const {products} =this.state;
  var count = products.reduce((total,product)=>{
    return total+product.qty*product.price;
  },0)
  // console.log(count)
  return count
}
addItem = (event)=>{
  event.preventDefault();
  const title = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const img = document.getElementById('image').value;
  if (title === '' || img === '' || price === '') {
    return 
  }
  
  const{products} = this.state;
  const id = products.length+1;
  const qty=0;
  const newProduct = {
    title,price,qty,img,id
  }
  products.push(newProduct)
  console.log(products)
  this.setState({
    products
  })
  
}
  render(){
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <div className="container">
          <Cart
            products = {products}
            increaseQty = {this.handleIncreaseQuantity} 
            decreaseQty = {this.handleDecreaseQuantity}
            deleteProduct = {this.handleDeleteProduct}/>
          <AddForm 
           addItem = {this.addItem}/>
        </div>
        <Footer price={this.getTotalPrice()}/>
      </div>
      );
    }
}

export default App;
