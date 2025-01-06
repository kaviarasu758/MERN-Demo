import React, { useState, useMemo } from 'react';

const slowFunction = (number) => {
  for (let i = 0; i < 10000; i++) {}
  return number * 2;
};

const Usememo = () => {
  const [theme, setTheme] = useState(true);
  const [number, setNumber] = useState(0);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: theme ? 'black' : 'red',
    color: theme ? 'white' : 'green',
  };

  return (
    <section>
      <h1>This is useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </section>
  );
};

export default Usememo;