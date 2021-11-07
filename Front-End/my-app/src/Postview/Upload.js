import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [location, setlocation] = useState("");
  const [image, setImage] = useState(null);
  const history = useHistory();

  function submitButton() {
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("location", location);
    data.append("image", image);
    console.log("upload", data);
    axios
      .post(`http://localhost:8000/posts`, data, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzY0ODA0NjcsImRhdGEiOiI2MTg3NmEwYzFiOWMzM2MyYjk5ODkxY2MiLCJpYXQiOjE2MzYyNjQ0Njd9.xF7QgnBD1M1gQO-jX0r_qJ1Z2gUI4THQs6m9SiSo-oY",
        },
      })
      .then((response) => {
        console.log("test", response);
      });
    history.push("/login/posts");
  }

  return (
    <div className="App">
      <div class="container">
        <h2>Upload the Post</h2>
        <input
          type="text"
          class="form-control"
          name="first_name"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Name"
          value={title}
        />

        <br />

        <input
          type="text"
          class="form-control"
          name="email"
          onChange={(e) => setbody(e.target.value)}
          placeholder="Description"
          value={body}
        />

        <br />
        <input
          type="text"
          class="form-control"
          name="location"
          onChange={(e) => setlocation(e.target.value)}
          placeholder="Location"
          value={location}
        />

        <br />
        <input
          type="file"
          name="image"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setImage(event.target.files[0]);
          }}
          placeholder="image"
        />

        <br />
        <button onClick={submitButton} class="btn btn-success">
          Upload
        </button>
      </div>
    </div>
  );
}
export default Upload;
