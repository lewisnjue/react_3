
import './App.css';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import MyComponent2 from './MyComponent2';


function App() {
  return (
  <ThemeProvider>
    <div>
     
      <MyComponent2 />
    </div>
  </ThemeProvider>
  );
}

export default App;
