// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import '@mantine/core/styles.css'; // Correct import for Mantine's core styles
 // Import Mantine core styles for global styles and normalization

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>  {/* Wrap with Redux Provider if using */}
    <MantineProvider >
      <App />
    </MantineProvider>
  </Provider>
);
