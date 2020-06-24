import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import Warning from './components/Warning';
import Message from './components/Message';
import Counter from './components/Counter';


const App = () => {
  return (
    <div>
      <Warning clase="container"/>
      <br/>
      <Message clase="contenedor">Este puede ser el fin del mundo como lo conociamos. - Platon</Message>
      <Counter clase="container"/>
    </div>
  );
};


ReactDOM.render(<App/>, document.getElementById("root"));