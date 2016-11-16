import React from 'react';

export default ({ title, handler, step }) => {
  const param = step || 1;

  return (
    <button 
      className="btn btn-default" 
      type="button" 
      onClick={e => {handler(param)}}>
       {title}
    </button>
  );
}
