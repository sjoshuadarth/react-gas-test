import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import HomePage from './pages/HomePage/HomePage';

function App(props) {
  return (
    <ThemeProvider>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
