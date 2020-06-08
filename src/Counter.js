import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    
    const updateCount = () => setCount(count + 5);  
  
    return (
      <div className={props.clase}>
        {count}
        <button className="ui button primary" style={{margin:'10px', backgroundColor: '#16C561'}} onClick={updateCount}>Sumar 5</button>
      </div>
    );
}; 

export default Counter;