import React from 'react';

export default function Note({text, onDelete, id}) {


  return (
    <div className="container">
      <label>
        <input type="checkbox" onClick={(event) => {
          onDelete(id); 
          event.preventDefault();
          }}/>
          <p>{text}</p>
        <span className="checkmark"></span>
      </label>
    </div>  
  )
}
