import React, {useState} from 'react';
import axios from "axios";

function Upload() {
    const [name , setname] = useState('')
    const [body , setbody] = useState('')
    const [image , setimage] = useState(null)

    function submitButton(){
        const formData=new FormData();
        formData.append(
            "my-file",
            image,image.name
        )
        axios
        .post(`http://localhost:8000/posts`, {
            title:name,
            body:body,
            formData:image
        
        },{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ5MDU0MTQsImRhdGEiOiI2MTcyN2JmZmY3MjQ1M2QwZDM5MmM2NjIiLCJpYXQiOjE2MzQ5MDE4MTR9.NcTQLuAn2elLArIY8eKur2Z2cm1skAxAqi2E7Kc2JfM"}})
        .then((response) => {
            console.log('test',response)
        });

    }
    
    return (
      <div className="App">
        <h2>Upload the Post</h2>
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
            <a onClick={submitButton} class="btn btn-success" href="/login/posts">Upload</a>
      </div>
    );
  }
  export default Upload;