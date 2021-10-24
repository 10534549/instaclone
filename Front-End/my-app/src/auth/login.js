import React, {useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../Postview/image.png'
import { useHistory  } from 'react-router-dom';

function Login() {
    const [email , setemail] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory();

    function submitButton(){
        axios
        .post(`http://localhost:8000/login`, {
        email:email,
        password:password
        })
        .then((response) => {
            console.log('test',response)
        }).catch((error)=>{
          alert("Un Authorized User",error)       
        });
        history.push('/login/posts')
        

    }
    return (
      <div className="App">
        <div class="container">
          <div class="row">
          <div class="col-lg-6">
            <img src={image}/>
            </div>
            <div class="col-lg-6">
            <h2>Login</h2>
            <input 
            type="text" 
            name="email" 
            onChange={e => setemail(e.target.value)}
            placeholder="Email" 
            class="form-control"
            value={email}/>

            <br/>
            <input 
            type="password" 
            name="password" 
            onChange={e => setpassword(e.target.value)} 
            placeholder="Password" 
            class="form-control"
            value={password}/>

            <br/>
            <a href="/login/posts" onClick={submitButton} className="link" class="btn btn-success my-3">
          Login
        </a>
            </div>
            
          </div>

        </div>
      </div>
    );
  }
  export default Login;