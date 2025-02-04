
import './App.css'

import { useState, useRef, useEffect } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  //  ref to store the previous counter value
  const prevCounterRef = useRef();

  // update the ref whenever the state changes
  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]); // run on every counter change

  //  previous counter value from the ref
  const prevCounter = prevCounterRef.current;

  return (
    <div className="container">
      <h1>Track Previous Counter State</h1>
      <p>Current counter: {counter}</p>
      <p>Previous counter: {prevCounter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
  
}

export default Counter;

