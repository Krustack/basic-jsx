import React, { useState } from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import UseEffectComponent from './components/UseEffectComponent';

const App = () => {
  const [count, setCount] = useState(0);
  const name = 'Wisanu';
  const surName = 'Phornjariyatham';
  const bool = true;
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ textAlign: 'center' }}>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        ADD
      </button>
      {toggle && (
        <>
          <FirstComponent color="#f00" bgColor="blue" />
          <SecondComponent color="blue" bgColor="orange" />
        </>
      )}

      <UseEffectComponent count={count} />
      <h1>
        {name} {surName}
      </h1>
      {bool ? <h1>TRUE</h1> : <h1>FALSE</h1>}
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default App;
