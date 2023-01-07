import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
