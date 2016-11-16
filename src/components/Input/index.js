import React from 'react';

export default ({ handler }) => (
  <div className="form-group col-xs-2">
    <input 
      type="text" 
      className="input" 
      onChange={e => {handler(+e.target.value)}} 
    />
  </div>
);