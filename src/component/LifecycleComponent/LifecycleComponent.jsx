import React, { Component,useState,useEffect } from "react";

class LifecycleComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
    }
    render(){
        return(
            <button>Component Button</button>
        )
    }
}

export default LifecycleComponent