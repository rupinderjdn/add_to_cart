import React from 'react'
import CartItem from './cartItem'
import Navbar from './Navbar'
class AddForm extends React.Component {
    render(){
        return (
            <div className="form">
                <h1 className="heading">ADD AN ITEM</h1>
                <form className="form-input-list" onSubmit={this.props.addItem}>
                    <div className ="form-input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="input-item"></input>
                    </div>
                    <div className ="form-input">
                        <label htmlFor="price">Price</label>
                        <input type="text" id="price" className="input-item"></input>
                    </div>
                    <div className ="form-input">
                        <label htmlFor="image">Image Link</label>
                        <input type="text" id="image" className="input-item"></input>
                    </div>
                    <button type ="submit" className="submit" >Submit</button>
                </form>
            </div>
        )
    }
        
}

export default AddForm