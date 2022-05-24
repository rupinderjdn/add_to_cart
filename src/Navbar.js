import React from 'react'
// import CartItem from './cartItem'
class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1 style={styles.name}>Add To Cart</h1>
                <div className="LOGO">
                    <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="cart-image"/>
                    <span className="count">{this.props.count}</span>
                </div>
            </div>
        )
    }
}

export default Navbar
const styles = {
    name : {
        color : 'whitesmoke',
        fonstSize : 30,
        margin : 20
    }
}