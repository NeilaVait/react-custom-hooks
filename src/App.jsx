import React, { useEffect, useState } from 'react';
import UpCounter from './components/Counter/UpCounter';
import DownCounter from './components/Counter/DownCounter';

function App() {
  return (
    <React.Fragment>
      <UpCounter />
      <DownCounter />
    </React.Fragment>
  );
}

export default App;
