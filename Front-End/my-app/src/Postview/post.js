// import postviewimg from "../Postview/sunflower.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import Heart from "react-animated-heart";
import { useState } from "react";
import "./postview.css";
import Edit from "./Edit";
import axios from "axios";

export default function Post(props) {
  const [isClick, setClick] = useState(false);
  const [cond, setCond] = useState(false);
  const [count, setCount] = useState(0);
  console.log(props.image);
  function submitButton() {
    setCond(true);
  }

  function submitUp() {
    setCount(count + 1);
    setClick(!isClick);
  }

  function submitDown() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function deleteButton() {
    console.log("edit", props);
    axios
      .delete(`http://localhost:8000/posts/${props.id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzY0ODA0NjcsImRhdGEiOiI2MTg3NmEwYzFiOWMzM2MyYjk5ODkxY2MiLCJpYXQiOjE2MzYyNjQ0Njd9.xF7QgnBD1M1gQO-jX0r_qJ1Z2gUI4THQs6m9SiSo-oY",
        },
      })
      .then((response) => {
        console.log("test", response);
      });
  }

  return (
    <div>
      <div className="row justify-content-md-center pt-5">
        <div className="card px-0 py-3 maincard">
          <div class="row">
            <div class="col col-lg-6">
              <p className="name">{props.title}</p>
              <p className="Place">{props.location}</p>
            </div>
            <div class="col col-lg-6 fontawesome1">
              <i class="fa fa-ellipsis-h "></i>
            </div>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/uploads/${props.image}`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <h5 className="card-title">{dataObj.title}</h5> */}

            <div>
              <div class="row">
                <div class="col col-lg-8">
                  <div class="row">
                    {/* <div class="col col-lg-6"><Heart isClick={isClick} onClick={submitCount} /></div> */}
                    <div class="col col-lg-6">
                      <i class="fa fa-thumbs-up thumps" onClick={submitUp}></i>
                      <i
                        class="fa fa-thumbs-down thumps"
                        onClick={submitDown}
                      ></i>
                      <div>{count}</div>
                    </div>

                    <div class="col col-lg-6">
                      <i class="fa fa-paper-plane-o fontawesome send"></i>
                    </div>
                  </div>

                  {/* <i class="fa fa-heart-o fontawesome"></i> */}
                </div>

                <div class="col col-lg-4 send">10-Jan-2021</div>
              </div>
            </div>
            <p className="card-text">likes</p>
            <p className="description">{props.body}</p>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <button class="btn btn-primary m-3" onClick={submitButton}>
                <i class="fa fa-edit"></i>
              </button>
              {cond && (
                <Edit
                  key={props.id}
                  id={props.id}
                  title={props.title}
                  body={props.body}
                  location={props.location}
                ></Edit>
              )}
            </div>
            <div class="col-lg-6">
              <button class="btn btn-primary m-3" onClick={deleteButton}>
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
