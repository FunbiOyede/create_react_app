import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import App from './container/App.jsx';


ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot()){
    module.hot.reload();
}