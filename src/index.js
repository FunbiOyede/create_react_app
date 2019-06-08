import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

class Hello extends Component{
    render(){
        return(
           <App />
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById("root"));