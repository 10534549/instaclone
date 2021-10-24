import React, {useState} from 'react';
import axios from "axios";
import { useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit(props) {

    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [image , setimage] = useState(null)
    const history = useHistory();

    function submitButton(){
        console.log('edit',props)
        axios
        .put(`http://localhost:8000/posts/${props.id}`, {
            title:name,
            body:body,
            image:image
        
        },{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ5MDU0MTQsImRhdGEiOiI2MTcyN2JmZmY3MjQ1M2QwZDM5MmM2NjIiLCJpYXQiOjE2MzQ5MDE4MTR9.NcTQLuAn2elLArIY8eKur2Z2cm1skAxAqi2E7Kc2JfM"}})
        .then((response) => {
            console.log('test',response)
        });
        history.push('/login/posts')

    }
    
    return (
      <div className="App">
        <h2>Edit Your Post</h2>
            <input 
            type="text" 
            name="first_name" 
            onChange={e => setname(e.target.value)}
            placeholder="Name" 
            value={name}/>

            <br/>

            <input 
            type="text" 
            name="email" 
            onChange={e => setbody(e.target.value)}
            placeholder="Description" 
            value={body}/>

            <br/>
            <input 
            type="file" 
            name="image" 
            onChange={(event) =>{
                console.log(event.target.files[0])
                setimage(event.target.files[0])
            } } 
            placeholder="image"/>

            <br/>
            <a class="btn btn-success my-3" onClick={submitButton} href="/login/posts" >Edit</a>
      </div>
    );
  }
  export default Edit;