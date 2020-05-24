import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import faker from 'faker';
import Message from './Message';

const imgF = faker.image.avatar();

const ImgTag = () => {
  return <img src={imgF} alt="avatar Random"/>;
};

const Pp = () => {
  return <p>Lautaro la siguiente acción acabará con el mundo :O</p>;
};

const App = () => {
  return (
    <div className="container">
      <ImgTag/>
      <Pp/>
      <button className="ui button primary">Aceptar</button>
      <button className="ui button">Cancelar</button>
    </div>
  );
};
  //q los clases del btn se reciban con props


ReactDOM.render(<App/>, document.getElementById("root"));