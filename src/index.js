import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import persistStore from 'redux-persist/es/persistStore';
import store from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}  >
            <App />
        </PersistGate>
    </Provider>
);

