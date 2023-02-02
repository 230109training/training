import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <Provider> is a special component that links every component and nested components
  // to the store
  // In this particular case, the App component and every child of the App component, grand-children, etc.
  // Are all going to be using this store
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

