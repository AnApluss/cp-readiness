import React from 'react';
import './List.css';

  
  const List = props => (
    <ul className="Border-style">
      { props.items.map( (item, index) => <li className="List-style" key={index}>{item}</li> ) }
    </ul>
  );



export default List;