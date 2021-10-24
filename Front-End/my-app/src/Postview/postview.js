import React,{useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './postview.css'
// import postviewimg from "../Postview/sunflower.jpg";
import Post from './post'
// import './App.css';
// import {Component} from 'react';
import axios from 'axios';

export default function PostView() {
  const [posts , setPosts] = useState([])
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8000/posts',{headers:{Authorization:" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzUwNzkxNzAsImRhdGEiOiI2MTc1NDVlNjM3NDE4MWY0Yzk0YWEzYzEiLCJpYXQiOjE2MzUwNzU1NzB9.y27CjaQUHjsQCJGM4M1TU-tORMCzaYfWIxD31_qcBBA"}})
        .then(response =>{
          //console.log(response)
          //setTimeout(()=>{setPosts(response.data)},3000)
          setPosts(response.data)
          
          console.log(posts)
        });

// empty dependency array means this effect will only run once (like componentDidMount in classes)
});
  return (
    <div class="container">
    <div className="py-5">
       <nav className="navbar navbar-light bg-light justify-content-between maintext px-5">
        <p className="navbar-brand" ><i class="fa fa-user-circle-o" aria-hidden="true"></i>Instaclone</p>           <a href="/login/posts/upload" className="link"><i className="fa fa-camera"></i></a>
      </nav>
      </div>
        {
        posts.map(post => (
      <Post key={post._id} title= {post.title} body={post.body} location={post.location} image={post.image} id={post._id}></Post>))
      }
        {/* <img src={postviewimg} className="img" alt="Landing image"></img>
          <div className="card-body">
            <h5 className="card-title">card title</h5>
            <div className="container">
            <div className="row justify-content-md-center">
              <div className="cd-md-5"> 
                <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
           <div className="cd-md-5">
           <h3>09-Sep-2021</h3>
           </div>
           </div>
            </div>
            <p className="card-text"> kick start your career with a bang</p>
          </div> */}
        </div>

     
  );
}