import React from 'react';

const FirstComponent = (props) => {
  return (
    <div>
      <h3 style={{color:props.color,backgroundColor:props.bgColor}}>My First Component</h3>
    </div>
  );
};

export default FirstComponent;
