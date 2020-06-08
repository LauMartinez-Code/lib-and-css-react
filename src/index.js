import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import Warning from './Warning';
import Message from './Message';
import Counter from './Counter';


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