import React from 'react'

class CartItem extends React.Component{
    
    //  increaseQty = ()=>{
    //     // console.log(this.state)
    //     // setState form 1
    //     // this.setState({
    //     //     qty : this.state.qty+1
    //     // })
    //     // we can't make multiple setState calls inside the function because react would just batch them up, by merging all of them shallowy
    //     // setState form 2
    //     this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty+1
    //         }
    //     })
    //     // with form 2 as the precState should be upto date so having different calls to the setState will be effective individually
    // }
    // decreaseQty = ()=>{
    //     this.setState((prevState)=>{
    //         let val = prevState.qty > 0 ? prevState.qty-1:0;
    //         return {
    //             qty : val
    //         }
    //     })
    // }
    render(){
        const{price,title,qty} = this.props.product;
        
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={this.props.product.img} style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color: '#777'}}>Qty :{qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844_1280.png" 
                        onClick={()=>this.props.increaseQty(this.props.product)}/>
                        <img alt="decrease" className="action-icons" src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/yellow-minus-sign-icon-on-white-background_thumb.jpg" onClick={()=>this.props.decreaseQty(this.props.product)}/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" onClick={()=>this.props.deleteProduct(this.props.product.id)}/>
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {
    image:{
        height : 110,
        width : 110,
        borderRadius: 4,
        backgroundColor : 'white'
    }
}
export default CartItem