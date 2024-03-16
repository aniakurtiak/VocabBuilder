import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <BrowserRouter basename='/VocabBuilder'>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      <GlobalStyle/>
    </BrowserRouter>
  </React.StrictMode>
);
