import React, { useState } from "react";
import { RegisterBg } from "../../assets";
import './Register.css'
const Register = () => {
    const [count, setCount] = useState(0);

    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} alt="" className="bg-image" />
            </div>
            <div className="right">
                <p>Form Register</p>
            </div>
        </div>
        </body>
        </html>
        
    )
}

export default Register