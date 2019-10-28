import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from './ThemeContext.js';
import Document from './Document.js';
import { log } from 'handlebars';

function App() {
  const theme = { org: 'adma', color: 'red' };

  return (
    <div className="App">
      <ThemeProvider value={theme}>
        <Document />
      </ThemeProvider>
    </div>
  );
}

export default App;