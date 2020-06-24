import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import RandomImage from './RandomImage';

const Warning = props => {
  return (
    <div className={props.clase}>
      <RandomImage/>
      <button className="ui button primary">Aceptar</button>
      <button className="ui button" >Cancelar</button>
    </div>
  );
}

export default Warning;