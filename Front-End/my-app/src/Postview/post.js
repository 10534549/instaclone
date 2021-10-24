import postviewimg from "../Postview/sunflower.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heart from "react-animated-heart";
import {useState} from 'react';
import './postview.css'
import Edit from './Edit'
import axios from "axios";

export default function Post(props) {
  const [isClick, setClick] = useState(false);
  const [cond,setCond]=useState(false)

  function submitButton(){
    setCond(true)
  }

  function deleteButton(){
    console.log('edit',props)
    axios
    .delete(`http://localhost:8000/posts/${props.id}`,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ5MDU0MTQsImRhdGEiOiI2MTcyN2JmZmY3MjQ1M2QwZDM5MmM2NjIiLCJpYXQiOjE2MzQ5MDE4MTR9.NcTQLuAn2elLArIY8eKur2Z2cm1skAxAqi2E7Kc2JfM"}})
    .then((response) => {
        console.log('test',response)
    });
  }

    return (

    <div>
        <div className="row justify-content-md-center pt-5">
        <div className="card px-0 py-5 maincard">
            <div class="row">
             <div class="col col-lg-6">
             <p className="name">{props.title}</p>
             <p className="Place">Hyderabad</p>
         </div>
         <div class="col col-lg-6 fontawesome1">
       <i class="fa fa-ellipsis-h "></i>
        </div>
           
            </div>
          <img src={postviewimg} className="card-img-top" alt="..." />
           <div className="card-body">
            {/* <h5 className="card-title">{dataObj.title}</h5> */}
            
            <div>
        <div class="row">
        <div class="col col-lg-8">
          <div class="row">
            <div class="col col-lg-6"><Heart isClick={isClick} onClick={() => setClick(!isClick)} /></div>
            <div class="col col-lg-6"><i class="fa fa-paper-plane-o fontawesome send"></i></div>
          </div>
        
        {/* <i class="fa fa-heart-o fontawesome"></i> */}
         
         </div>
        
         <div class="col col-lg-4 send">
           10-Jan-2021
         </div>
       </div>
     </div>
    <p className="card-text">likes</p>  
            <p className="description">{props.body}</p>
         </div>
         <div class="row">
                    <div class="col-lg-6">
                    <button class="btn btn-primary m-3" onClick={submitButton}>Edit</button>
                    {cond && <Edit key={props.id} id={props.id}></Edit>}
                </div>
                <div class="col-lg-6">
                    <button class="btn btn-primary m-3" onClick={deleteButton}>Delete</button>
                </div>
                </div>
        </div>
       
        </div>
        </div>
    );
}