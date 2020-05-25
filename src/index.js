import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import faker from 'faker';
import Message from './Message';

const imgF = faker.image.avatar();

const ImgTag = () => {
  return <img src={imgF} alt="avatar Random"/>;
};

const Paragraph = () => {
  return <p>Lautaro la siguiente acción acabará con el mundo :O</p>;
};

const Ejer4 = () => {
  return (
    <div className="container">
      <ImgTag/>
      <Paragraph/>
      <button className="ui button primary">Aceptar</button>
      <button className="ui button">Cancelar</button>
    </div>
  )
}

const Counter = (props) => {
  const [count, setCount] = useState(0);
  
  const updateCount = () => setCount(count + 5);  

  return (
    <div className={props.clase}>
      {count}
      <button style={{margin:'10px'}} onClick={updateCount}>Sumar 5</button>
    </div>
  );

};

const App = () => {
  return (
    <div>
      <Ejer4/>
      <br/>
      <Message clase="contenedor">Definitivamente este es el fin del mundo como lo conociamos</Message>
      <Counter clase="container"/>
    </div>
  );
};



ReactDOM.render(<App/>, document.getElementById("root"));