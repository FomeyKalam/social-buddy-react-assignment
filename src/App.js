import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import CommentDetails from './components/CommentDetails/CommentDetails';

import ShowComment from './components/ShowComment/ShowComment';

function App() {
  return (
    <div>
     
      <Router>
      <Switch> 
        <Route path="/home">
          <Home></Home>
           </Route>
          
           
           <Route  path="/post/:id"> 
           <PostDetail></PostDetail>

           </Route>
           <Route exact path="/"> 
           <Home></Home>

           </Route>
           <Route path="*">
             <NoMatch></NoMatch>

           </Route>
      </Switch>
    </Router>
    </div>
   
  );
}

export default App;
