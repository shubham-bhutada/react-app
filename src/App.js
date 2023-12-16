import React, {useState} from "react";
import "./App.css"

const App = () => {

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  
  function validateEmail(e) {
    setEmail(e.target.value);
    if((e.target.value).includes("@gmail.com")) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  function validatePassword(e) {
    setPassword(e.target.value);
    if((e.target.value).length>=8) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  }

  function validatConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    if((e.target.value)===password) {
      setValidConfirmPassword(true);
      return true;
    } else {
      setValidConfirmPassword(false);
      return false;
    }
  }

  const inputEmailStyle = {
    border: validEmail ? "2px solid green" : "2px solid red",
  };
  const inputPasswordStyle = {
    border: validConfirmPassword ? "2px solid green" : "2px solid red",
  };

  function validateForm(e) {
    e.preventDefault();
    if(validConfirmPassword===false){
      alert("Form cannot be submitted")
    } else {
      alert("Form submitted successfully!");
    }
  }

  return (
    <form onSubmit={validateForm} className="form-verification">
      <div className="inputs">
        <label htmlFor="email"><b>Email:</b></label> <br/>
        <input type="email" id="email" onChange={validateEmail} value={email} style={inputEmailStyle} /> <br/>
        {
          validEmail===true? null : <p style={{color:"red"}}>Invalid email format</p> 
        }
      </div>
      <div className="inputs">
        <label htmlFor="password"><b>Password:</b></label> <br/>
        <input type="password" id="password" onChange={validatePassword} value={password} style={inputPasswordStyle} /> <br/>
        {
          validPassword===true ? null : <p style={{color:"red"}}>Password must be atleast 8 characters</p>
        }
      </div>
      <div className="inputs">
        <label htmlFor="confirm-password"><b>Confirm Password:</b></label> <br/>
        <input type="password" id="confirm-password" onChange={validatConfirmPassword} value={confirmPassword} style={inputPasswordStyle} /> <br/>
        {
          validConfirmPassword===true ? null : <p style={{color:"red"}}>Passwords do not match</p>
        }
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default App;