import React, {useState} from 'react';
import axios from "axios";
import { useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit(props) {

    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [location , setlocation] = useState('')
    const [image , setimage] = useState(null)
    const history = useHistory();

    function submitButton(){
        console.log('edit',props)
        axios
        .put(`http://localhost:8000/posts/${props.id}`, {
            title:name,
            body:body,
            location:location
            // image:image
        
        },{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzUwNzkxNzAsImRhdGEiOiI2MTc1NDVlNjM3NDE4MWY0Yzk0YWEzYzEiLCJpYXQiOjE2MzUwNzU1NzB9.y27CjaQUHjsQCJGM4M1TU-tORMCzaYfWIxD31_qcBBA"}})
        .then((response) => {
            console.log('test',response)
        });
        history.push('/login/posts')

    }
    
    return (
      <div className="App">
        <h2>Edit Your Post</h2>
        <div class="container">
            <input 
            type="text" class="form-control"
            name="first_name" 
            onChange={e => setname(e.target.value)}
            placeholder="Name" 
            value={name}/>

            <br/>

            <input 
            type="text" class="form-control"
            name="email" 
            onChange={e => setbody(e.target.value)}
            placeholder="Description" 
            value={body}/>

            <br />
            <input 
            type="text" class="form-control"
            name="place" 
            onChange={e => setlocation(e.target.value)}
            placeholder="Location" 
            value={location}/>

            {/* <input 
            type="file" 
            name="image" 
            onChange={(event) =>{
                console.log(event.target.files[0])
                setimage(event.target.files[0])
            } } 
            placeholder="image"/> */}

            <br/>
            <a class="btn btn-success my-3" onClick={submitButton} href="/login/posts" >Edit</a>
      </div>
      </div>
    );
  }
  export default Edit;