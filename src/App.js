import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

const App = () => {
  var count = 0;
  const name = 'Wisanu';
  const surName = 'Phornjariyatham';
  const bool = true;
  return (
    <div style={{ textAlign: 'center' }}>
      <FirstComponent color="#f00" bgColor="blue"/>
      <SecondComponent color="blue" bgColor="orange"/>
      <h1>
        {name} {surName}
      </h1>
      {bool ? <h1>TRUE</h1> : <h1>FALSE</h1>}
      <h3>{count}</h3>
      <button
        onClick={() => {
          count = count + 1;
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default App;
