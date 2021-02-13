import React, {Component} from 'react'
import './App.css';
import Header from './components/header'
import Class from './components/class'

class App extends Component {
  state = {
    students: [],
  }

  render(){
    return (
      <div className="">
        <Header />
        <Class students={this.state.students}/>
      </div>
    )
  }
}


export default App;
