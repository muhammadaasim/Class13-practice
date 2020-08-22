import React, { useRef, useEffect } from 'react';

function App() {
  const element = useRef(null);
  useEffect(() => {
    element.current.focus();
  })
  return (
    <div className="App">
      <input ref={element} type="text">

      </input>
    </div>
  );
}

export default App;
