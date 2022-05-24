import React from 'react'
// import CartItem from './cartItem'
class Footer extends React.Component {
    render() {
        return (
            <div>            
                <div style={styles.footer}>
                    <span ><h3>Total Price:</h3></span>
                    <span style={styles.item}>{this.props.price} ₹</span>
                </div>
            </div>
        )
    }
}

export default Footer
const styles = {
    footer :{
        backgroundColor : 'teal',
        color : 'whitesmoke',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize : 30,
    },
    item : {
        marginLeft : 20,
    }
}