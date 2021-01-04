import { Component} from 'react';
import {Form} from './components';
import {Car} from './components';
import './App.css';

class  App extends Component{

  render(){
    return (
      <div className="App">
       <Form />
       <Car />
      </div>
    );
  }
}

export default App;
