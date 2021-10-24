import React, {useState} from 'react';
import axios from "axios";

function Register() {
    const [name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password, setpassword] = useState('')

    function submitButton(){
        axios
        .post(`http://localhost:8000/register`, {
        name: name,
        email:email,
        password:password
        })
        .then((response) => {
            console.log('test',response)
        });

    }
    return (
      <div className="App">
        <div class="container">
        <h2>Registration</h2>
            <input 
            type="text" 
            name="first_name" 
            onChange={e => setname(e.target.value)}
            placeholder="First Name" 
            class="form-control"
            value={name}/>

            <br/>

            <input 
            type="text" 
            name="email" 
            onChange={e => setemail(e.target.value)}
            placeholder="Gmail" 
            class="form-control"
            value={email}/>

            <br/>
            <input 
            type="text" 
            name="password" 
            onChange={e => setpassword(e.target.value)} 
            placeholder="Password" 
            class="form-control"
            value={password}/>

            <br/>
            <a class="btn btn-success my-3" href="/login" onClick={submitButton}>Register</a>
      </div>
      </div>
    );
  }
  export default Register;