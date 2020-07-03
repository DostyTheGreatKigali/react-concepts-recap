import React, { useState } from 'react';
import './App.css';

function App() {
  const [ pwd, setPwd] = useState("");
  const [ email, setEmail ] = useState("");

  const submitInfo = (event) => {
    event.preventDefault();
    console.log("I'm clicked")
    setEmail(email);
    setPwd(pwd);
    console.log(email, pwd)
  }


  return (
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-6">
  <h2>Fill form</h2>
  <form onSubmit={submitInfo}>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" 
      className="form-control" 
      id="email" 
      placeholder="Enter email" 
      name="email"
      value={email}
      onChange={(event)=> setEmail(event.target.value)}
      autoComplete="true"
      />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" 
      className="form-control" 
      id="pwd" 
      placeholder="Enter password" 
      name="pswd"
      value={pwd}
      onChange={(event)=> setPwd(event.target.value)}
      autoComplete="true"
      />
    </div>
    {/* <div className="form-group form-check">
      <label htmlFor="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div> */}
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
<div className="col-md-6">
<h1>Info</h1>
<h3>Email: {email}</h3>
{/* <p></p> */}
<h3>Password: {pwd}</h3>
{/* <p></p> */}
</div>
</div>
</div>

  );
}

export default App;
