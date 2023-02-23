import React, { Component, Fragment } from "react";
import CardProductComponent from "../../component/CardProductComponent/CardProductComponent";
import './Product.css'
class Product extends Component{
    state = {
        neworder : 4
    }
    handleCounterChange = (newvalue) => {
        this.setState({
            neworder : newvalue
        })
    }
    render(){
        return(
            <Fragment>
                <div className="header" >
                    <div className="logo">
                        <img src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg" alt="" style={{width:70}} />
                    </div>
                    <p>{this.state.neworder}</p>
                    <div className="troley">
                        <img src="https://e7.pngegg.com/pngimages/946/819/png-clipart-shopping-cart-shopping-cart-angle-text.png" alt="" style={{width:70}} />
                        <div className="count"></div>
                    </div>
                </div>
            <CardProductComponent onPlus = {() => {
                this.setState({
                    neworder : this.state.neworder + 1
                })
            }} onMinus = {() => {
                this.setState({
                    neworder : this.state.neworder - 1
                })
            }}/>
            <CardProductComponent />
            </Fragment>
            
        );
    }
}

export default Product;