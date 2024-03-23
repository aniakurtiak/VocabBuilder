import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const theme = {
    black: '#121417',
    green: '#85aa9f',
    white: '#fcfcfc',
    white1: '#f8f8f8',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <BrowserRouter basename='/VocabBuilder'>
   <Provider store={store}>
        <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle/>
        </ThemeProvider>
   </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
