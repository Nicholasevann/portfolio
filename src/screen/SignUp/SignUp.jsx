import { useState } from "react";
import { CoverSignUp } from "../../assets";
import "./SignUp.css";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <div className="col-2">
        <p className="title-signup">Sign Up</p>
        <p className="desc">Create account to start using notestar</p>
        <br></br>
        <p className="title-login">Email</p>
        <input
          type="text"
          value={username}
          onChange={(val) => setUsername(val.target.value)}
        />
        <p className="title-login">Password</p>
        <input
          type={showPassword ? "text" : "password"}
          onChange={(val) => setPassword(val.target.value)}
          // id="inputPassword"
        ></input>
        <p className="title-login">Confirm Password</p>
        <input
          type={showPassword ? "text" : "password"}
          onChange={(val) => setPassword(val.target.value)}
          // id="inputPassword"
        ></input>
        <button onClick={() => {}}>Sign Up</button>
      </div>
      <div className="col-1">
        <img src={CoverSignUp} className="image-1" alt="" />
      </div>
    </div>
  );
};

export default SignUp;
