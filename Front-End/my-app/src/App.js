import './App.css';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import { Switch} from "react-router";
import Login from './auth/login'
import Register from './auth/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Postview from './Postview/postview';
import Upload from './Postview/Upload';
import Edit from './Postview/Edit'


function App() {
  return (
    
    <Router>
      <div class="container">
        <nav class="navbar navbar-expand-sm navbar-dark">
  <a class="navbar-brand" href="#" class="instamain">
    Instaclone
  </a>
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#" ><Link to="/login">Login</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><Link to="/register">Register</Link></a>
    </li>
  </ul>
</nav>
        </div>
      
      <hr />

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/login/posts">
          <Postview />
        </Route>
        <Route exact path="/login/posts/upload">
        <Upload />
        </Route>
        <Route exact path="/login/posts/edit">
        <Edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;