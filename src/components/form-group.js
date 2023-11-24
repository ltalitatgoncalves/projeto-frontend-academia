import React from 'react';

function FormGroup(props){
  return (
      <div className="form-group" style={{ color: 'white' }}>
          <label htmlFor={props.htmlFor}>{props.label}</label>
            {props.children}
    </div>
  )
}

export default FormGroup;
