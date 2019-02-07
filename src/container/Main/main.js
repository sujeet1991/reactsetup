import React, { Component } from 'react'
import {Route,Switch,Link} from 'react-router-dom';
import Home from '../Home/home';
import Contact from '../../component/contact/contact';

 class main extends Component {
  render() {
    return (
      <div>
        <ul>
            <li ><Link to="/" className="btn btn-primary">About</Link></li>
          
        </ul>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Contact/:id" exact component={Contact}/>

        </Switch>
      </div>
    )
  }
}

export default main;

