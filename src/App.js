import React, {Component} from 'react'
import {Route, Router} from 'react-router-dom'
import history from './history'
import './App.css';
import Header from './components/header'
import SignUp from './components/signUp'

class App extends Component {
  state = {
    students: [],
  }

  render(){
    return (
      <div className="">

        <Router history={history}>

          <Route exact path='/'>
            <Header />
            <SignUp />
          </Route>

        </Router>
      </div>
    )
  }
}



export default App;
